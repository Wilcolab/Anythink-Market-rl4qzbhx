# GitHub Copilot Workshop

## Enhance a Node Calculator app using GitHub Copilot

<img width="400" alt="Node Calculator image" src="./assets/Node%20calculator%20image.png">

The project contains a simple node.js application that exposes REST APIs to perform arithmetic operations, and provides a test suite with mocha and chai.

## Features

### Calculator Operations
- ➕ **Addition** - Add two numbers
- ➖ **Subtraction** - Subtract two numbers
- ✖️ **Multiplication** - Multiply two numbers
- ➗ **Division** - Divide two numbers (handles division by zero)
- 🔢 **Power** - Raise a number to any power (supports fractional exponents)

### User Interface
- Interactive calculator with button interface
- Keyboard support for all operations
- Clear (C) and Clear Entry (CE) functions
- Sign toggle (+/-) for negative numbers
- Decimal point support
- Exponential notation for large/small numbers

## Instructions 

### Running the Application
```bash
# Install dependencies
npm install

# Start the server
npm start
```

The calculator will be available at: http://localhost:3000

### Running Tests
```bash
# Run test suite with coverage
npm test

# Run linter
npm run lint
```

## API Endpoints

### Arithmetic Operations
**Endpoint:** `GET /arithmetic`

**Parameters:**
- `operation` - The operation to perform: `add`, `subtract`, `multiply`, `divide`, or `power`
- `operand1` - First number (supports integers, decimals, and exponential notation)
- `operand2` - Second number (supports integers, decimals, and exponential notation)

**Examples:**
```bash
# Addition: 5 + 3 = 8
curl "http://localhost:3000/arithmetic?operation=add&operand1=5&operand2=3"

# Subtraction: 10 - 4 = 6
curl "http://localhost:3000/arithmetic?operation=subtract&operand1=10&operand2=4"

# Multiplication: 6 × 7 = 42
curl "http://localhost:3000/arithmetic?operation=multiply&operand1=6&operand2=7"

# Division: 20 ÷ 5 = 4
curl "http://localhost:3000/arithmetic?operation=divide&operand1=20&operand2=5"

# Power: 2^10 = 1024
curl "http://localhost:3000/arithmetic?operation=power&operand1=2&operand2=10"

# Fractional exponent (square root): 16^0.5 = 4
curl "http://localhost:3000/arithmetic?operation=power&operand1=16&operand2=0.5"
```

**Response Format:**
```json
{
  "result": 42
}
```

**Error Response:**
```json
{
  "error": "Error message"
}
```

## Keyboard Shortcuts

- **Numbers:** 0-9
- **Decimal:** .
- **Operations:** +, -, *, /, ^
- **Execute:** =

## Project Structure

```
├── api/
│   ├── controller.js    # Business logic for arithmetic operations
│   └── routes.js        # API route definitions
├── public/
│   ├── client.js        # Frontend calculator logic
│   ├── default.css      # Styling
│   └── index.html       # Calculator UI
├── test/
│   ├── arithmetic.test.js  # Test suite (26 tests)
│   ├── config.json      # Test configuration
│   └── helpers.js       # Test helpers
├── server.js            # Express server setup
└── package.json         # Dependencies and scripts
```

## Test Coverage

The project includes 26 comprehensive tests covering:
- Input validation (5 tests)
- Addition operations (6 tests)
- Multiplication operations (6 tests)
- Division operations (7 tests)
- Power operations (2 tests)

Current test coverage: **85.71%**

## Acknowledgements

A special thanks to the following awesome Hubbers who have contributed in many different ways to this repository. 
[pierluigi](https://github.com/pierluigi), [parroty](https://github.com/yuichielectric), [yuichielectric](https://github.com/yuichielectric), [dchomh](https://github.com/dchomh), [nolecram](https://github.com/nolecram), [rsymo](https://github.com/rsymo), [damovisa](https://github.com/damovisa) and anyone else I've inadvertently missed.

_v1.0 Released June, 2023_
