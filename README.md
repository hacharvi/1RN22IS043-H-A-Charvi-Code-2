# Average Calculator Microservice

This is a simple HTTP microservice for calculating the average of a set of numbers. It is built using TypeScript and Express.

## Features

- Calculate the average of an array of numbers.
- RESTful API for easy integration.

## Project Structure

```
average-calculator-microservice
├── src
│   ├── server.ts               # Entry point of the microservice
│   ├── controllers
│   │   └── averageController.ts # Contains the logic for average calculation
│   ├── routes
│   │   └── averageRoutes.ts     # Defines the API routes
│   └── types
│       └── index.ts             # Type definitions for requests and responses
├── package.json                  # NPM package configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd average-calculator-microservice
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the microservice, run the following command:
```
npm start
```

The service will be running on `http://localhost:3000`.

## API Endpoint

### Calculate Average

- **Endpoint:** `/average`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "numbers": [1, 2, 3, 4, 5]
  }
  ```
- **Response:**
  ```json
  {
    "average": 3
  }
  ```

## License

This project is licensed under the MIT License.