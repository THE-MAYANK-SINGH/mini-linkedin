# 🧑‍💼 Mini-LinkedIn — A Community Platform

A mini LinkedIn-style web app where users can register, login, create public posts, and view user profiles. Built as part of a full-stack internship assignment.

## 🔗 Live Demo

🌐 Frontend (Vercel) : https://mini-linkedin-teal.vercel.app/

🖥️ Backend (Render) : https://mini-linkedin-iw8f.onrender.com/

## 📦 GitHub Repository
🔗 https://github.com/THE-MAYANK-SINGH/mini-linkedin

## ⚙️ Tech Stack Used
### 🔹 Frontend
Next.js 15 (App Router)

Tailwind CSS

Vercel for deployment

### 🔹 Backend
Node.js + Express.js

MongoDB (with Mongoose)

JWT Authentication

Render for deployment

## 🚀 Features
🔐 User registration & login (JWT-based)

📝 Create & view public posts

👤 View user profile with bio and post history

✅ Responsive UI with clean layout

## 🛠️ Setup Instructions
### 📁 1. Clone the repository

    git clone https://github.com/THE-MAYANK-SINGH/mini-linkedin.git
    cd mini-linkedin
### 📦 2. Install dependencies
#### 🖥️ Backend

    cd server
    npm install

#### 🌐 Frontend

    cd ../client
    npm install
### 🔑 3. Environment Variables
Create .env files in both folders:

#### server/.env

    PORT=5001
    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

#### client/.env.local

    NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
    
Replace the values appropriately.

### ▶️ 4. Run Locally
#### Backend:

    cd server
    npm run dev

#### Frontend:

    cd ../client
    npm run dev

Visit: 

    http://localhost:3000

