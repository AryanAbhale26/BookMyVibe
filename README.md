# AI Event Organiser

A full-stack event management platform built with Next.js, Convex, Clerk, and Tailwind CSS.

# 🎉 BookMyVibe

A **Full Stack AI Event Management Platform** designed to modernize event organization with AI-powered features and a user-friendly interface.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Convex](https://img.shields.io/badge/Convex-FF6B6B?style=for-the-badge)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk)

## ✨ Features

### 🤖 AI-Powered Event Creation

Generate complete event details including title, description, and category using a single AI prompt. Let AI do the heavy lifting for your event setup.

### 💎 Subscription Model

- **Free Tier**: Create one event for free
- **BookMyVibe Pro**: Unlock unlimited event creation and customizable event page themes

### 🎯 Personalized User Experience

- Onboarding flow to select interests and location
- Personalized event recommendations based on preferences
- Tailored content for each user

### 🔍 Comprehensive Event Discovery

- Featured events carousel
- Local events near you
- Category-based browsing
- Recommended events across the country
- Global event search
- Location switching to explore events worldwide

### 📋 Event Details & Registration

- Beautifully designed event detail pages
- All essential event information at a glance
- Seamless registration flow

### 🎫 Ticketing System

- QR-coded tickets for registered events
- Personal "My Tickets" dashboard
- Easy access to all your event tickets

### 📊 Organizer Dashboard

- Real-time analytics on:
  - Registration numbers
  - Attendance tracking
  - Earnings overview
  - Engagement metrics
- Built-in QR scanner for instant check-ins

### 📱 Responsive UI

Fully responsive and attractive user interface that works seamlessly across all devices.

---

## 🛠️ Tech Stack

| Category              | Technology                                    |
| --------------------- | --------------------------------------------- |
| **Frontend**          | React 19, Next.js 16, Tailwind CSS, Shadcn UI |
| **Backend**           | Convex (Database & Serverless Functions)      |
| **Authentication**    | Clerk                                         |
| **Design & Planning** | Mobbin                                        |
| **Code Review**       | Code Rabbit                                   |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Convex account
- Clerk account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/bookmyvibe.git
   cd bookmyvibe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your Convex and Clerk credentials.

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
bookmyvibe/
├── app/                # Next.js App Router
├── components/         # Reusable UI components
│   └── ui/            # Shadcn UI components
├── lib/               # Utility functions
├── public/            # Static assets
└── convex/            # Convex backend functions
```

---

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">Made with ❤️ by the BookMyVibe Team</p>

### Make sure to create a `.env` file with following variables -

```
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

CLERK_JWT_ISSUER_DOMAIN=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
GEMINI_API_KEY=
```
3v_KSLB9b3fm3QXNosCGdx0-_XRQsaa0nznDyrpLe4A