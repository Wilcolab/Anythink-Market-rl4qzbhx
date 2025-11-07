/**
 * @module routes/api/profiles
 * @description
 * Express router handling profile-related API endpoints.
 *
 * Behavior summary:
 * - Preloads a User document as req.profile for routes containing the :username param.
 * - GET    /:username           - Public (auth.optional): returns the profile JSON for the requested user.
 * - POST   /:username/follow    - Protected (auth.required): authenticated user follows the requested profile.
 * - DELETE /:username/follow    - Protected (auth.required): authenticated user unfollows the requested profile.
 *
 * Responses:
 * - 200: JSON object { profile: <profileJSON> } where profileJSON is produced by User.prototype.toProfileJSONFor.
 * - 401: Unauthorized when an authenticated user cannot be found for a required route.
 * - 404: Not Found when the :username does not correspond to an existing user.
 * - Other errors are forwarded to next(err) for default error handling.
 *
 * Notes on request properties:
 * - req.profile: populated User document for the :username parameter (set by router.param).
 * - req.payload: when present (set by auth middleware), contains the authenticated user's payload with at least an `id` property.
 *
 * Dependencies:
 * @requires express.Router - router instance used to define the routes.
 * @requires mongoose       - used to obtain the User model.
 * @requires module:models/User - Mongoose User model with methods:
 *    - toProfileJSONFor(userOrFalse): returns profile JSON tailored to the provided user (or false).
 *    - follow(profileId): adds profileId to the calling user's following list and returns a Promise.
 *    - unfollow(profileId): removes profileId from the calling user's following list and returns a Promise.
 * @requires ../auth        - authentication middleware exposing `optional` and `required` middlewares and setting req.payload when authenticated.
 *
 * Route details:
 * @route GET /:username
 * @middleware auth.optional
 * @param {string} req.params.username - username to lookup and preload as req.profile
 * @returns {Object} 200 - { profile: Object } or 404 if user not found
 *
 * @route POST /:username/follow
 * @middleware auth.required
 * @param {string} req.params.username - target username to follow (preloaded as req.profile)
 * @param {Object} req.payload - must contain authenticated user's id
 * @returns {Object} 200 - { profile: Object } or 401 if authenticated user not found
 *
 * @route DELETE /:username/follow
 * @middleware auth.required
 * @param {string} req.params.username - target username to unfollow (preloaded as req.profile)
 * @param {Object} req.payload - must contain authenticated user's id
 * @returns {Object} 200 - { profile: Object } or 401 if authenticated user not found
 */
var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload user profile on routes with ':username'
router.param('username', function(req, res, next, username){
  User.findOne({username: username}).then(function(user){
    if (!user) { return res.sendStatus(404); }

    req.profile = user;

    return next();
  }).catch(next);
});

router.get('/:username', auth.optional, function(req, res, next){
  if(req.payload){
    User.findById(req.payload.id).then(function(user){
      if(!user){ return res.json({profile: req.profile.toProfileJSONFor(false)}); }

      return res.json({profile: req.profile.toProfileJSONFor(user)});
    });
  } else {
    return res.json({profile: req.profile.toProfileJSONFor(false)});
  }
});

router.post('/:username/follow', auth.required, function(req, res, next){
  var profileId = req.profile._id;

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    return user.follow(profileId).then(function(){
      return res.json({profile: req.profile.toProfileJSONFor(user)});
    });
  }).catch(next);
});

router.delete('/:username/follow', auth.required, function(req, res, next){
  var profileId = req.profile._id;

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    return user.unfollow(profileId).then(function(){
      return res.json({profile: req.profile.toProfileJSONFor(user)});
    });
  }).catch(next);
});

module.exports = router;
