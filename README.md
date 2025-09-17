# 🌌 Midnight Dev Portfolio

A full-stack MERN portfolio website built with Vite + React (frontend) and Express + MongoDB (backend). 

Designed to showcase projects, skills, and contact info with a sleek, dark-mode aesthetic.

---

## 📁 Project Structure

mid-night-dev/
    ├── frontend/
       ├── # React + Vite + Tailwind CSS
       ├── # Express + MongoDB + Mongoose
       ├── # README.md

---

## 🚀 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios
- **Backend**: Node.js, Express, Mongoose, MongoDB Atlas
- **Deployment**: Vercel (frontend), Render (backend)
- **Styling**: Dark mode, responsive layout, animated sections

---

## 🧱 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/mid-night-dev.git
cd mid-night-dev
```

### 2. Install Dependencies

Frontend

```bash
cd frontEnd
npm install
```

Backend

```bash
cd ../backEnd
npm install

```

### 3. Configure Environment Variables
Create a .env file in backEnd/:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 🧪 Running Locally

### Start Backend

```bash
cd backEnd
npm run dev
```

### Start Frontend

```bash
cd ../frontEnd
npm run dev
```

Frontend will run on http://localhost:5173

Backend will run on http://localhost:5000

### 📦 API Endpoints

Method  |  Endpoint          |  Description
|-------|--------------------|--------------|
GET     |  /api/projects     |  Fetch all projects
POST    |  /api/projects     |  Add new projects (admin)
DELETE  |  /api/projects/:id |  Delete project (admin)



### 🧑‍💻 Features
- Dynamic project showcase from MongoDB
- Responsive layout with Tailwind CSS
- Admin-ready backend structure
- SEO-optimized metadata (React Helmet)
- Clean folder structure for scalability
<!-- 
📸 Screenshots
Add screenshots of your homepage, project cards, and contact form here once deployed.


🌐 Live Demo
https://midnightdev.vercel.app (replace with your actual link) -->


### 📬 Contact

Made with 💻 by Akash Chawla

[GitHub](https://github.com/MidnightDev024) • [Email](https://mail.google.com/mail/u/0/#inbox)