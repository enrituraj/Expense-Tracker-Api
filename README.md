# 💰 Expense Tracker API

An **Expense Tracker API** built with **Node.js, Express, MongoDB (Atlas), and JWT Authentication**. This API enables users to manage expenses, track budgets, and provides admin functionalities to oversee users and expenses.

## 🚀 Features

- **User Authentication** (Signup, Login, Logout) with JWT
- **Profile Management** (Edit profile, Upload Profile Picture via Cloudinary)
- **Expense Management** (Add, Edit, Delete, View expenses)
- **Monthly Budget Tracking & Analytics**
- **Admin Panel** (Manage users, Disable/Delete accounts, Manage expenses)
- **Swagger API Documentation**

---

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Token)
- **Image Storage:** Cloudinary
- **API Documentation:** Swagger UI

---

## 📦 Installation & Setup

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/enrituraj/expense-tracker-api.git
cd expense-tracker-api
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Setup Environment Variables**

Create a `.env` file in the root directory or rename `.env.sample` to `.env` and add your own configurations:

```env
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

### 4️⃣ **Run the Server**

```sh
npm run dev
```

Server will start at **http://localhost:5000**

---

## 📜 API Documentation (Swagger)

Swagger UI is available at:  
📌 **[http://localhost:5000/api-docs](http://localhost:5000/api-docs)**

This provides an interactive UI to test all API endpoints.

---

## 👨‍💻 Author

- **Ritu Raj**
- GitHub: [enrituraj](https://github.com/enrituraj)

---
