# 🍽️ Restaurant Management System API

A production-ready RESTful API built for the **CodeAlpha Backend Internship**, designed to streamline restaurant operations including authentication, menu management, table reservations, order processing, and inventory tracking.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (JSON Web Tokens) |
| Encryption | bcrypt.js |
| Config | dotenv |
| API Testing | Thunder Client |
| Architecture | MVC (Model-View-Controller) |

---

## 📁 Project Structure

```
Restaurant Management Backend/
├── src/
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   │
│   ├── controllers/
│   │   ├── authController.js      # Register, login, logout
│   │   ├── menuController.js      # Menu CRUD operations
│   │   ├── tableController.js     # Table management
│   │   ├── orderController.js     # Order processing
│   │   └── inventoryController.js # Inventory tracking
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.js      # JWT verification
│   │   ├── adminMiddleware.js     # Role-based access control
│   │   └── error.middleware.js    # Global error handling
│   │
│   ├── models/
│   │   ├── User.js                # User schema
│   │   ├── Menu.js                # Menu item schema
│   │   ├── Table.js               # Table schema
│   │   ├── Order.js               # Order schema
│   │   └── Inventory.js           # Inventory schema
│   │
│   └── routes/
│       ├── authRoutes.js          # /api/auth
│       ├── menuRoutes.js          # /api/menu
│       ├── tableRoutes.js         # /api/tables
│       ├── orderRoutes.js         # /api/orders
│       └── inventoryRoutes.js     # /api/inventory
│
├── .env                           # Environment variables
├── package.json
└── server.js                      # App entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Thunder Client (VS Code extension) or Postman

### Installation

```bash
# Clone the repository
git clone https://github.com/reyan3/codealpha_tasks_Restaurant_Management_Backend.git
cd codealpha_tasks_Restaurant_Management_Backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/restaurant_db
JWT_SECRET=your_super_secret_key
```

### Running the Server

```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

Server starts at: `http://localhost:5000`

---

## 🔐 Authentication

The API uses **JWT-based authentication**. Passwords are hashed with **bcrypt** before storage.

### Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `POST` | `/api/auth/register` | Register a new user | Public |
| `POST` | `/api/auth/login` | Login and receive JWT | Public |

### Register

```json
POST /api/auth/register
{
  "name": "Reyan",
  "email": "reyan@example.com",
  "password": "securepass123",
  "role": "admin"
}
```

### Login

```json
POST /api/auth/login
{
  "email": "reyan@example.com",
  "password": "securepass123"
}
```

**Response:**
```json

{
    message: "Login successful",
    token,
  }

```

> 🔑 Include the token in the `Authorization` header for protected routes:
> `Authorization: Bearer <your_token>`

---

## 📋 API Endpoints

### 🍕 Menu

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/api/menu` | Get all menu items | Public |
| `POST` | `/api/menu` | Add a new item | Admin |

**Sample Request Body:**
```json
{
  "name": "Margherita Pizza",
  "category": "Main Course",
  "price": 12.99,
  "available": true
}
```

---

### 🪑 Tables

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/api/tables` | Get all tables | Auth |
| `POST` | `/api/tables` | Add a new table | Admin |
| `PATCH` | `/api/tables/:id/toggle` | Update table status | Admin |

**Sample Request Body:**
```json
{
  "tableNumber": 5,
  "capacity": 4,
  "isReserved": true
}
```

---

### 📦 Orders

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/api/orders` | Get all orders | Auth |
| `GET` | `/api/orders/:id` | Get order by ID | Auth |
| `POST` | `/api/orders` | Place a new order | Auth |
| `PATCH` | `/api/orders/:id` | Update order status | Admin |

**Sample Request Body:**
```json
{
  "tableId": "64f3a...",
  "items": [
    { "menuItemId": "64f1b...", "quantity": 2 },
    { "menuItemId": "64f2c...", "quantity": 1 }
  ]
"totalAmount" : 12
"status" : "Pending"
}
```

---

### 🏪 Inventory

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/api/inventory` | Get all inventory items | Admin |
| `POST` | `/api/inventory` | Add inventory item | Admin |
| `PATCH` | `/api/inventory/:id` | Update stock | Admin |
| `DELETE` | `/api/inventory/:id` | Remove item | Admin |

**Sample Request Body:**
```json
{
  "itemName": "Tomato Sauce",
  "quantity": 50,
}
```

---

## 🛡️ Middleware

| Middleware | File | Purpose |
|-----------|------|---------|
| Auth Guard | `authMiddleware.js` | Verifies JWT on protected routes |
| Admin Guard | `adminMiddleware.js` | Restricts routes to admin role only |
| Error Handler | `error.middleware.js` | Catches and formats all errors globally |

---

## 🧪 Testing with Thunder Client

All endpoints were tested using **Thunder Client** in VS Code.

**To test protected routes:**
1. Login via `POST /api/auth/login`
2. Copy the returned `token`
3. In Thunder Client, go to **Auth → Bearer Token** and paste the token
4. Make your request

---

## 📦 Dependencies

```json
{
  "bcryptjs": "^3.0.3",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^9.6.3"
}
```

Install dev dependency for hot reload:
```bash
npm install --save-dev nodemon
```

---

## 🚢 Deployment (Render)

1. Push your code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repository
4. Set the following:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variables in the Render dashboard
6. Deploy 🎉

---

## 📄 License

This project is developed as part of the **CodeAlpha Internship Program**.
