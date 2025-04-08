# 📝 Blog API

A modular and scalable blog backend built with Node.js, Express, TypeScript, and Prisma.

---

## 📂 Project Structure

```
├── .env
├── .env.example
├── .gitignore
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── src
    ├── app.ts
    ├── server.ts
    ├── configs
    ├── docs
    ├── dtos
    ├── entities
    ├── exceptions
    ├── guard
    ├── interfaces
    ├── logs
    ├── middlewares
    ├── modules
    │   └── databases
    ├── prisma
    │   ├── schema.prisma
    │   └── migrations
    ├── routes
    ├── storages
    └── utils
        ├── data-types
        └── helpers
```

---

## 🚀 Getting Started

### 1. Clone project

```bash
git clone https://github.com/dainguyen1809/blog-api.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3.Configure Environment

```bash
cp .env.example .env
```

## 🛠️ Prisma Setup

### 1. Initialize Prisma

```bash
npx prisma generate
```

### 2. Run Migrations

```bash
npx prisma migrate dev --name init
```

## 📄 Documentation

### Updating...
