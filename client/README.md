# Mini LinkedIn – A Community Platform

A simple, responsive community platform inspired by LinkedIn. Built as part of a full-stack development assessment, this app allows users to register, log in, post updates, and view user profiles with their public posts.


---

## 🚀 Live Demo

👉 [Click here to view the deployed app](https://your-live-demo-link.com)

---

## 🛠️ Tech Stack

**Frontend:**
- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

**Backend:**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [JWT (JSON Web Tokens)](https://jwt.io/) for authentication
- [dotenv](https://www.npmjs.com/package/dotenv)

**Deployment:**
- Frontend: [Vercel](https://vercel.com/)
- Backend: [Render](https://render.com/)

---

## 📦 Features

### ✅ Authentication
- User registration and login via email/password
- JWT-based protected routes
- `.env` for secrets

### ✅ Home Feed
- Public post feed from all users
- Display of author name and timestamp
- Posts sorted newest-first

### ✅ Profile Page
- View a user’s profile with bio and email
- See only that user’s posts

### ✅ Post Creation
- Authenticated users can create text-only posts
- Instant update to feed
- Responsive UI

---

## 🔐 Demo Login (optional)

| Role   | Email               | Password   |
|--------|---------------------|------------|
| User   | mayank@example.com  | abc123     |

> You can also register your own account!

---

## 🧑‍💻 Local Development Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mini-linkedin.git
cd mini-linkedin

### 2. Setup backend

```bash
cd server
npm install

Create a .env file:


PORT=5001
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your_jwt_secret

Then start the server:

npm run dev

### 3. Setup frontend

cd ../client
npm install
npm run dev