FROM node:18-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN corepack enable && yarn install --frozen-lockfile

COPY . .

EXPOSE 8001

CMD ["yarn", "start"]