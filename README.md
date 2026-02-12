# 🎉 BookMyVibe

A **Full Stack AI Event Management Platform** designed to modernize event organization with AI-powered features and a user-friendly interface.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Convex](https://img.shields.io/badge/Convex-FF6B6B?style=for-the-badge)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk)

## 🎥 Demo

<!-- Replace the video URL below with your actual demo video -->
[Watch the Demo Video](VIDEO_LINK_HERE)

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
| **AI Integration**    | Google Gemini AI                              |
| **Design & Planning** | Mobbin                                        |
| **Code Review**       | Code Rabbit                                   |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher
- **Package Manager**: npm, yarn, or pnpm
- **Accounts**:
  - [Convex](https://www.convex.dev/) account for the backend
  - [Clerk](https://clerk.com/) account for authentication
  - [Google AI Studio](https://aistudio.google.com/) account for Gemini API

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/bookmyvibe.git
   cd bookmyvibe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Authentication (Clerk)**

   - Create a new application in Clerk.
   - Copy the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`.
   - Add the following URLs to your Clerk application paths:
     - Sign in: `/sign-in`
     - Sign up: `/sign-up`

4. **Set up Database (Convex)**

   - Initialize Convex in your project:
     ```bash
     npx convex dev
     ```
   - This will prompt you to log in and create a new project.
   - It will automatically generate the `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL` in your `.env.local` file.

5. **Configure Environment Variables**

   - Create a `.env.local` file in the root directory.
   - Add the following variables (see the bottom of this README for the template):

   ```env
   # Deployment used by `npx convex dev`
   CONVEX_DEPLOYMENT=generated_by_convex
   NEXT_PUBLIC_CONVEX_URL=generated_by_convex

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # Get this from https://aistudio.google.com/
   GEMINI_API_KEY=your_gemini_api_key
   ```

6. **Run the Application**

   You need to run both the backend and frontend:

   **Terminal 1 (Backend):**
   ```bash
   npx convex dev
   ```

   **Terminal 2 (Frontend):**
   ```bash
   npm run dev
   ```

7. **Open the App**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
bookmyvibe/
├── app/                        # Next.js App Router
│   ├── (auth)/                # Authentication routes (sign-in, sign-up)
│   ├── (main)/                # Main application routes
│   │   ├── create-event/      # Event creation flow
│   │   ├── my-events/         # User's events dashboard
│   │   └── my-tickets/        # User's tickets
│   ├── (public)/              # Public routes (explore, event details)
│   ├── api/                   # API routes (Gemini integration)
│   ├── globals.css            # Global styles and custom cursor
│   ├── layout.js              # Root layout with providers
│   └── page.js                # Integrated Landing Page
├── components/                 # Reusable UI components
│   ├── ui/                    # Shadcn UI primitives
│   ├── event-card.jsx         # Event display component
│   ├── footer.jsx             # Site footer
│   ├── header.jsx             # Main navigation header
│   ├── onboarding-modal.jsx   # User onboarding
│   ├── search-location-bar.jsx# Search functionality
│   └── unsplash-image-picker.jsx # Image selection
├── convex/                    # Backend API & Database
│   ├── auth.config.js         # Clerk authentication setup
│   ├── events.js              # Event management logic
│   ├── registrations.js       # Ticket handling
│   ├── schema.js              # Database schema
│   └── users.js               # User management
├── lib/                       # Utilities
│   ├── utils.js               # Helper functions
│   └── location-utils.js      # Location services
└── public/                    # Static assets
    └── navigation.png         # Custom cursor image
```

---


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
---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">Made with ❤️ by the BookMyVibe Team</p>
3v_KSLB9b3fm3QXNosCGdx0-_XRQsaa0nznDyrpLe4A