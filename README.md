# 💕 Just Us

**Just Us** is a private, relationship-focused mobile application designed to give couples a shared digital space for memories, conversations, activities, and meaningful moments.

The project was built as a personal software project to explore mobile development, backend architecture, database management, authentication, and full-stack application development.

> **Status:** 🚧 In Development

---

## ✨ About

Just Us is designed around the idea of creating a small digital space that belongs to two people.

Instead of being a general-purpose social network, the application focuses on **one relationship** and the experiences shared within it.

The goal is to combine useful relationship features with a personal, intimate interface — allowing couples to keep track of memories, interact with each other, and build a shared history inside the app.

---

## 🚀 Features

The application is being developed around features such as:

* 💑 Couple-focused user experience
* 🔐 User authentication
* 👤 Individual user profiles
* 💬 Shared interactions and communication
* ❤️ Relationship-specific content
* 📸 Memories and shared moments
* 🗓️ Shared activities/events
* 💾 Persistent cloud data
* 📱 Mobile-first interface
* 🔄 Backend API integration
* 🗄️ PostgreSQL database

> Features may change as development continues.

---

## 🛠️ Tech Stack

### Mobile Application

* **React Native**
* **Expo**
* **JavaScript / TypeScript**

### Backend

* **Node.js**
* **Express.js**

### Database

* **PostgreSQL**
* **Supabase**

### Development

* **Git**
* **GitHub**
* **Replit**
* **VS Code**

---

## 🏗️ Architecture

Just Us follows a client-server architecture.

```text
┌──────────────────────────┐
│      Mobile App          │
│   React Native + Expo    │
└────────────┬─────────────┘
             │
             │ API Requests
             ▼
┌──────────────────────────┐
│        Backend           │
│     Node.js / Express    │
└────────────┬─────────────┘
             │
             │ Database Queries
             ▼
┌──────────────────────────┐
│        Database          │
│    PostgreSQL / Supabase │
└──────────────────────────┘
```

The mobile application communicates with the backend, while persistent application data is stored in PostgreSQL.

---

## 📁 Project Structure

The exact structure may change during development, but the project is generally organized around the following components:

```text
just-us/
│
├── app/                  # Mobile application screens/routes
├── components/           # Reusable UI components
├── assets/               # Images, icons, fonts, etc.
├── backend/              # Server-side application
│   ├── routes/           # API routes
│   ├── controllers/      # Request handling
│   ├── models/           # Data/database models
│   └── ...
│
├── database/             # Database-related configuration
├── .env.example          # Example environment variables
├── package.json
├── app.json              # Expo configuration
└── README.md
```

> The structure above should be updated to match the actual repository structure before publishing.

---

## ⚙️ Configuration

Just Us uses environment variables for configuration and sensitive credentials.

Create a `.env` file based on the provided example:

```bash
cp .env.example .env
```

Then configure the required variables.

Example:

```env
DATABASE_URL=your_database_connection_string
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
API_URL=your_backend_url
```

### ⚠️ Important

Never commit your actual `.env` file to GitHub.

Sensitive values such as:

* Database passwords
* Database connection strings
* Supabase service-role keys
* API secrets
* Authentication secrets
* Private signing credentials

should remain local and should be added to `.gitignore`.

---

## 🧑‍💻 Local Development

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file and add the required configuration.

### 4. Start the development server

```bash
npx expo start
```

Depending on the project configuration, the application can then be opened using:

* Expo Go
* Android emulator
* iOS simulator
* Development build

---

## 🗄️ Database

The application uses **PostgreSQL** for persistent data storage, with **Supabase** providing the hosted database infrastructure and related services.

Database configuration should be supplied through environment variables rather than hard-coded into the application.

If database migrations or schema files are included in the repository, they should be applied according to the project's database setup instructions.

---

## 🔒 Security

This repository is intended to contain the application's **source code and configuration templates**, not private credentials.

Before deploying or making changes to the production environment, make sure that:

* `.env` files containing secrets are ignored.
* Database credentials are not committed.
* API keys are not hard-coded.
* Supabase service-role credentials are never exposed to the client.
* Production secrets are stored using the deployment platform's environment-variable system.

---

## 🗺️ Roadmap

Planned development may include:

* [ ] Complete authentication system
* [ ] Couple linking/invitation system
* [ ] Shared memories
* [ ] Relationship timeline
* [ ] Shared activities
* [ ] Notifications
* [ ] Improved messaging
* [ ] Profile customization
* [ ] Production deployment
* [ ] Improved security and validation
* [ ] Automated testing

---

## 🎯 Purpose of the Project

Just Us began as a personal project and has also become an opportunity to learn and apply real-world software engineering concepts.

The project covers several areas of development, including:

* Mobile application development
* REST API development
* Database design
* Authentication
* Cloud infrastructure
* State management
* Environment configuration
* Version control
* Application architecture
* Deployment

Rather than being built solely as a demonstration project, Just Us is intended to evolve into a functional application.

---

## 📌 Project Status

Just Us is currently under active development.

The architecture, features, and technology choices may change as the application evolves.

---

## 📄 License

License information will be added before the project is released for public use.
