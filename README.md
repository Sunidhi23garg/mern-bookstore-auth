## MERN Bookstore with User Authentication

## 🎯 Project Description
This is a **full-stack MERN** (MongoDB, Express.js, React, Node.js) bookstore application with user authentication. The application allows users to browse, purchase, and manage books with secure login and registration functionalities.

Key features of this application include:
- User Authentication: Secure registration and login with email/password authentication, using JWT for session management and bcrypt.js for password encryption.
- Bookstore Management: Browse and search books in the bookstore catalog.
- Shopping Cart: Add books to a shopping cart and purchase them.
- User Roles: Users can access specific features based on their roles (e.g., Admin, Customer).
- Responsive Design: The frontend is styled using Tailwind CSS, ensuring a mobile-friendly and responsive user interface.

## 🛠️ Technologies Used:
- MongoDB: NoSQL database for storing user data and books.
- Express.js: Backend framework for building APIs and handling requests.
- React.js: Frontend library for building the user interface.
- Node.js: JavaScript runtime used to build the backend.
- JWT: JSON Web Tokens for secure authentication and authorization.
- bcrypt.js: For password encryption and secure authentication.
- Tailwind CSS: For responsive design and easy styling.

## 💻 Installation Instructions
Follow the steps below to set up the project locally on your machine.

## Prerequisites
- Node.js (Install from [nodejs.org](https://nodejs.org/))
- MongoDB (Install locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud storage)
- npm (Node package manager)

## 🖥️ Usage
Once the project is set up, here’s how you can use it:

User Registration: Navigate to /register to create a new user account.
User Login: Log in with the credentials at /login.
Browse Books: Users can view the available books in the catalog.
Add to Cart: Add books to the shopping cart and proceed to checkout.
Protected Routes: Only authenticated users can access certain pages, such as the shopping cart and checkout.

## 🚀 Features
Authentication: Secure user registration, login, and password encryption using JWT.
Authorization: Role-based access for different users (Admin, Customer).
Bookstore Management: Admin users can add, update, and delete books in the store.
Shopping Cart: Users can add books to the cart, view them, and proceed to purchase.
Responsive UI: Built with Tailwind CSS for a responsive design on all devices.

## 🙌 Credits
This project was developed by:
Sunidhi Garg – Lead Developer
[GitHub](https://github.com/Sunidhi23garg)

## Special thanks to the following resources:
[React Documentation](https://react.dev/)
[MongoDB Documentation](https://www.mongodb.com/docs/)
[Tailwind CSS Documentation](https://tailwindcss.com/)

## 🤝 How to Contribute
We welcome contributions! If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
git checkout -b feature-name
3. Make your changes and commit them:
git commit -m 'Add new feature'
4. Push to the branch:
git push origin feature-name
5. Open a pull request.

## 🧪 Testing
You can write unit and integration tests to ensure the application works correctly.

-- Install Testing Dependencies:
npm install --save-dev jest supertest

-- Example Test:
const request = require('supertest');
const app = require('../app');

test('GET / should return status 200', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
});

## 🔒 Security: 
Ensure that the JWT tokens are kept secure and follow best practices for password hashing and token expiration.

## 📱 Future Features:

Integrating third-party payment gateways for processing book purchases.
Implementing pagination and filtering for the bookstore catalog

## Enjoy exploring and contributing to the MERN Bookstore project! 🚀
