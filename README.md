# CloudDonate

CloudDonate is an AI-powered smart donation distribution and resource matching platform designed to connect donors, verified organizations, volunteers, and administrators through cloud-native workflows, AI decision support, transparent tracking, and real-time notifications.

## Problem statement

Donations are often stranded in one area while urgent needs exist elsewhere. The system addresses this gap by using intelligent matching, urgency scoring, and transparent logistics to route resources effectively.

## Solution

CloudDonate uses an AI matching engine to score donation-to-request compatibility using category, urgency, quantity fit, distance, and timing. It supports role-based workflows for donors, recipients, volunteers, and admins while using Firebase services for secure authentication, Firestore persistence, storage, and deployment.

## Features

- Donation creation with validation and image uploads
- Resource request management with urgency scoring
- AI-powered matching and explainable reasons
- Fraud detection and verification workflows
- Volunteer task management and delivery proof
- Admin dashboard, analytics, and audit logs
- Firebase security rules and environment-based configuration
- Responsive multi-role dashboard and landing experience

## AI features

- Donation categorization
- Request categorization
- Match ranking
- Priority explanation
- Duplicate request detection
- Automatic impact summaries
- Deterministic mock AI when API keys are unavailable

## Cloud architecture

- Frontend: Next.js + TypeScript + Tailwind CSS
- Auth: Firebase Authentication
- Database: Firestore
- Storage: Firebase Storage
- Functions: Firebase Cloud Functions
- Hosting: Firebase Hosting or Vercel
- AI: Gemini or OpenAI-compatible provider with mock fallback

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Firebase
- Recharts
- lucide-react

## System architecture

- Landing page and authentication
- Role-specific dashboards
- Donation and request workflows
- AI score generation and match ranking
- Cloud functions for notifications and analytics
- Analytics layer for admin reporting

## Database schema

`users`, `organizations`, `donations`, `requests`, `matches`, `deliveries`, `notifications`, `reviews`, `auditLogs`, `categories`, `analytics`.

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment variables

Look at `.env.example` for the required configuration. Never commit real secrets.

## Firebase setup

1. Create a Firebase project.
2. Enable Authentication, Firestore, Storage, Hosting, and Cloud Functions.
3. Export the config values into `.env.local`.
4. Deploy rules with Firebase CLI.

## AI API setup

- Set `GEMINI_API_KEY` or `OPENAI_API_KEY` if you want live AI responses.
- If absent, CloudDonate automatically uses the deterministic mock AI engine.

## Running locally

```bash
npm install
npm run dev
```

## Testing

```bash
npm run build
npm run lint
```

## Deployment

```bash
firebase login
firebase init
firebase deploy
```

## Screenshots

Add screenshots in a `screenshots` folder after deployment or local capture.

## Future enhancements

- Real-time map tracking
- Multi-tenant admin workspaces
- SMS and push notifications
- Stronger AI verification and anomaly detection
- Integration with logistics providers

## Team

- Product and design
- Cloud architecture
- AI/ML engineering
- Full-stack engineering
- Security and QA
