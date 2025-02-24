# Express.js Assignment

## Introduction
This project is a simple **RESTful API** built using **Express.js**. It demonstrates the fundamental concepts of Express.js, including **routing, middleware, controllers, environment variables, and error handling**. The API provides endpoints for managing **users** and **products**, supporting CRUD (Create, Read, Update, Delete) operations.

## Features
- Organized **MVC structure** (Routes, Controllers, Middleware)
- **Custom Middleware** for logging requests
- **Environment Variables** support using `dotenv`
- **Global Error Handling Middleware**
- **RESTful API** implementation with proper status codes

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [NPM](https://www.npmjs.com/) (Comes with Node.js)

## Installation and Setup

### 1. Clone the Repository
```sh
git clone https://github.com/PLP-Full-Stack-Development-MERN/week-2-express-js-fundamentals-assignment-kaidavi.git
cd express-assignment
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Create a `.env` File
Create a `.env` file in the root directory and add:
```
PORT=5000
```

### 4. Run the Server
#### Start with Node.js:
```sh
node index.js
```
#### Start with Nodemon (for auto-restart on changes):
```sh
npm install -g nodemon
nodemon index.js
```

## Project Structure
```
express-assignment/
│-- routes/
│    ├── userRoutes.js
│    ├── productRoutes.js
│-- middleware/
│    ├── logger.js
│-- controllers/
│    ├── userController.js
│    ├── productController.js
│-- middleware/
│    ├── errorHandler.js
│-- index.js
│-- package.json
│-- README.md
│-- .env
```

## API Endpoints

### **Users API**
| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| GET    | `/users`       | Get all users           |
| GET    | `/users/:id`   | Get a user by ID        |
| POST   | `/users`       | Create a new user       |
| PUT    | `/users/:id`   | Update user details     |
| DELETE | `/users/:id`   | Delete a user          |

#### Example Request (Create User):
```sh
POST /users
Content-Type: application/json

{
  "name": "Alice",
  "email": "alice@example.com"
}
```

#### Example Response:
```json
{
  "id": 3,
  "name": "Alice",
  "email": "alice@example.com"
}
```

### **Products API**
| Method | Endpoint         | Description               |
|--------|-----------------|---------------------------|
| GET    | `/products`     | Get all products         |
| GET    | `/products/:id` | Get a product by ID      |
| POST   | `/products`     | Create a new product     |
| PUT    | `/products/:id` | Update product details   |
| DELETE | `/products/:id` | Delete a product        |

#### Example Request (Create Product):
```sh
POST /products
Content-Type: application/json

{
  "name": "Laptop",
  "price": 1200
}
```

#### Example Response:
```json
{
  "id": 3,
  "name": "Laptop",
  "price": 1200
}
```

## Middleware

### **1. Logger Middleware** (`middleware/logger.js`)
- Logs each request with method, URL, and timestamp.
- Applied globally to all routes.

### **2. Global Error Handling Middleware** (`middleware/errorHandler.js`)
- Catches any unhandled errors.
- Returns structured error responses.

#### Example Error Response:
```json
{
  "success": false,
  "message": "User not found"
}
```

## Testing the API
You can test the API using **Postman** or **cURL**.

### **Using Postman:**
1. Open Postman and create a new request.
2. Enter the API endpoint (e.g., `http://localhost:5000/users`).
3. Select the HTTP method (GET, POST, PUT, DELETE).
4. Add JSON data in the body (for POST and PUT requests).
5. Click "Send" and observe the response.

### **Using cURL:**
```sh
curl -X GET http://localhost:5000/users
```

## Error Handling
- If an endpoint is invalid, the server responds with `404 Not Found`.
- If an internal error occurs, a `500 Internal Server Error` is returned.
- Errors are logged in the console.

## Deployment (Optional)
You can deploy the project using **Heroku, Vercel, or DigitalOcean**.

### **Deploy to Heroku**
```sh
heroku create express-assignment
heroku config:set PORT=5000
heroku git:remote -a express-assignment
git push heroku main
```

## Contribution
Feel free to contribute by submitting a pull request or reporting issues.

## Author
Your Name

## License
This project is licensed under the **MIT License**.

