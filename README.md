# 🚀 Techfest

A high-performance backend system for managing a techfest platform, built using Fastify, MySQL, and raw SQL for maximum control and scalability.

---


## 📁 Folder Structure

```
techfest-backend/
├── src/
│   ├── app.ts                   
│   ├── plugins/
│   │   └── db.ts                 
│   ├── routes/                   
│   │   ├── index.route.ts
│   │   ├── user.route.ts
│   │   └── ...
│   ├── utils/
│   │   └── sqlLoader.ts        
│   └── sql/                      
│       ├── users/
│       ├── hackathons/
│       └── ...
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Running the Project

### 1. Install dependencies
```bash
pnpm install
```

### 2. Create a `.env` file
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=techfest
```

### 3. Run the dev server
```bash
npx tsx src/app.ts
```

Visit: [http://localhost:3000](http://localhost:3000)


## 📌 Conventions

- **SQL-first** development for maximum DB control
- **Routes are modular** and cleanly separated per entity
- **SQL files are reusable** and organized under `/sql`

---

## 🧪 Next Suggestions

- Add authentication (JWT or session-based)
- Add validation with `zod` or `fastify-schema`
- Dockerize the service for deployment
- Add a GraphQL gateway (e.g., Mercurius)

---

Built with ❤️ using Fastify and raw SQL.
