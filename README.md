# FlightsAndSearchService

Lightweight service that manages flight data and search functionality for a personal Airline Management System. Built with a clear MVC structure and Sequelize ORM to persist flight, airport, city, and airplane data.

**Tech stack:**

- **Node.js**: application runtime
- **Express**: HTTP server and routing
- **Sequelize**: ORM
- **MySQL (mysql2)**: database driver

**Prerequisites**

- **Node.js** (>= 16) and **npm**
- **MySQL** server accessible for the app

**Configuration**

- Primary config is in [src/config/config.json](src/config/config.json). You can override values via environment variables:
    - `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS`
    - `NODE_ENV` (development|production)
    - `PORT` (HTTP port)

**Quick setup**

1. Install dependencies:

```bash
npm install
```

2. Create or ensure a MySQL database is available and update `src/config/config.json` or set environment variables.

3. Run migrations and seeders (requires `sequelize-cli` installed locally or globally):

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

4. Start the service:

```bash
npm start
# or
node src/index.js
```

**Database**

- Migrations are in `src/migrations` and define tables for `city`, `airport`, `airplane`, and `flight`.
- Seeders are in `src/seeders` for demo data.

**API overview**

- Base router entry is [src/routes/index.js](src/routes/index.js).
- Versioned routes are under [src/routes/v1](src/routes/v1): `city`, `airport`, `airplane`, and `flight` resources.
- Main controllers are in [src/controllers](src/controllers). Example endpoints:
    - `GET /api/v1/flights` — list/search flights
    - `POST /api/v1/flights` — create a flight
    - `GET /api/v1/airports` — list airports

Refer to the route files in [src/routes/v1](src/routes/v1) for the full HTTP surface.

**Project layout (important folders)**

- `src/controllers` — request handlers
- `src/services` — business logic
- `src/repository` — DB access abstractions
- `src/models` — Sequelize models
- `src/middlewares` — request middlewares and validation
- `src/config` — configuration and DB connection

**Development notes**

- Keep model and migration changes in sync; update seeders when schema changes.
- Run linter/formatter as desired. Tests are not included in this repo snapshot.

**Troubleshooting**

- If migrations fail, confirm DB connectivity and user permissions.
- Check `src/config/config.json` and environment overrides if connection settings are unexpected.

**Contributing**

- Open issues and pull requests for improvements. Keep changes focused and add migration files for schema updates.

---