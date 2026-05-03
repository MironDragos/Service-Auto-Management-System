# 🔧 Service Auto Management System

A full-stack web admin panel for managing a car service workshop — built with React, Supabase, and Tailwind CSS.

> **Live Demo:** [service-auto-management-system.vercel.app](https://service-auto-management-system.vercel.app/)
>
> **Test credentials:** Email: `Service_Owner@gmail.com` · Password: `admin123`

---

## 📌 About the Project

This application was built to digitize and streamline the daily operations of a car service workshop. It replaces manual record-keeping with a real-time dashboard that allows the service manager to track orders, manage client requests, and monitor workshop performance — all from a single interface.

The project was developed as a personal initiative to apply full-stack skills in a real-world business context, combining a modern React frontend with a live PostgreSQL backend via Supabase.

---

## ✨ Features

- **📊 Live Dashboard** — Real-time statistics: total orders, active jobs, completed services
- **🗂️ Order Management (CRUD)** — Create, view, edit, and delete car service orders
- **🔍 Search & Filter** — Filter orders by status (pending, in progress, completed)
- **🔐 Authentication** — Secure login system powered by Supabase Auth
- **🖼️ Car Image Integration** — Dynamic car images fetched via the Pexels API
- **📱 Responsive Design** — Fully usable on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS |
| Backend / Database | Supabase (PostgreSQL) |
| Authentication | Supabase Auth |
| Image API | Pexels API |
| Deployment | Vercel |

---

## 🗄️ Database Schema (Supabase / SQL)

The core `orders` table stores all service requests:

```sql
CREATE TABLE cars(
  id INT PRIMARY KEY,
  client VARCHAR(40),
  car_model VARCHAR(30),
  mechanic VARCHAR(30),
  status VARCHAR(20),
  date DATE
)
```

Row-Level Security (RLS) is enabled — only authenticated users can read or write data.

---

## 🚀 Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/MironDragos/Service-Auto-Management-System.git
cd Service-Auto-Management-System
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_PEXELS_API_KEY=your_pexels_api_key
```

> Get your Supabase credentials from [supabase.com](https://supabase.com) → Project Settings → API.

### 4. Run the development server

```bash
npm run dev
```

App runs at `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components (OrderCard, Navbar, etc.)
├── pages/            # Main views (Dashboard, Orders, Login)
├── lib/              # Supabase client configuration
├── hooks/            # Custom React hooks
└── App.jsx           # Root component with routing
```

---

## 🔮 Future Improvements

- Export orders as PDF reports
- Email notifications when order status changes
- Multi-user roles (admin vs. mechanic)
- Dark mode toggle
- Charts for monthly revenue and order trends

---

## 👤 Author

**Dragos Miron**
- GitHub: [@MironDragos](https://github.com/MironDragos)
- LinkedIn: [linkedin.com/in/dragosmiron](https://linkedin.com/in/dragosmiron)
