<p align="center">
    <img alt="Monad Discord Auth" src="https://github.com/user-attachments/assets/32f470e7-ca9f-4610-a28b-0d630456dce2">
</p>

<p align="center">
    <a href="https://discord.gg/T7KKNT4cng">
        <img src="https://img.shields.io/badge/Discord-Monad%20Developers-7289DA?logo=discord&logoColor=white" alt="Discord">
    </a>
    <a href="https://github.com/monad-devrel/monad-discord-auth">
        <img src="https://img.shields.io/github/contributors/monad-devrel/monad-discord-auth" alt="GitHub contributors">
    </a>
    <img src="https://img.shields.io/badge/Next.js-Framework-000000?logo=next.js" alt="Next.js Framework">
    <img src="https://img.shields.io/badge/Discord-OAuth2-7289DA?logo=discord" alt="Discord OAuth2">

</p>

## <a name='TableofContents'></a>Table of Contents

- [1. Overview](#1-overview)
- [2. Features](#2-features)
- [3. Prerequisites](#3-prerequisites)
- [4. Getting Started](#4-getting-started)
  - [4.1 Clone the Repository](#41-clone-the-repository)
  - [4.2 Navigate to the Project Directory](#42-navigate-to-the-project-directory)
  - [4.3 Install Dependencies](#43-install-dependencies)
  - [4.4 Set Up Environment Variables](#44-set-up-environment-variables)
  - [4.5 Run the Development Server](#45-run-the-development-server)
- [5. Deployment](#5-available-scripts)
- [6. Deployment](#6-deployment)
- [7. Troubleshooting](#6-troubleshooting)
- [8. Contributing](#7-contributing)
- [9. License](#8-license)

## 1. Overview

**Monad Discord Auth** is a Next.js application that integrates Discord authentication using NextAuth.js, allowing users to log in with their Discord credentials. This application also fetches guild membership and roles from the Monad Discord server, enabling more personalized user experiences.

## 2. Features

- **Discord OAuth2 Integration**: Provides a seamless login experience using Discord credentials.
- **User Data Retrieval**: Fetches user guild membership and roles from the Monad Discord server.
- **Environment-Based Configuration**: Allows secure and flexible deployment across various environments.

## 3. Prerequisites

Ensure that your system meets the following requirements:

- **Node.js**: Ensure you have Node.js installed (version 14 or later is recommended). You can download and install Node.js from the official website [here](https://nodejs.org/en/).

- **pnpm** is a package manager that can be installed in various ways. To explore the different installation methods and choose the one that best suits your system and needs, visit the official pnpm installation page: [pnpm Installation](https://pnpm.io/installation).

- **PostgreSQL**: Version 13 or later, for database management. You can follow the instructions to set up a local [PostgreSQL](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database).

## 4. Getting Started

### 4.1 Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/monad-devrel/monad-discord-auth.git
```

### 4.2 Navigate to the Project Directory

```bash
cd monad-discord-auth
```

### 4.3 Install Dependencies

Install the project dependencies using `pnpm`:

```bash
pnpm install
```

### 4.4 Set Up Environment Variables

Create a `.env` file based on the `.env.example` provided in the repository. Replace the placeholders with your actual credentials:

```env
AUTH_SECRET=your_auth_secret_here
NEXTAUTH_URL=http://localhost:3000
DISCORD_ID=your_discord_id_here
DISCORD_SECRET=your_discord_secret_here
MONAD_GUILD_ID=your_monad_guild_id_here
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
```

### 4.5 Run the Development Server

Start the development server:

```bash
pnpm dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

### 5. Available Scripts

Here is a list of available scripts in the project along with their purposes:

```bash
pnpm dev             # Starts the development server for local development and testing.
pnpm build           # Compiles the application into an optimized production build.
pnpm start           # Runs the application in production mode using the compiled files.
pnpm prisma migrate dev # Applies database migrations to keep the schema in sync with your Prisma schema.
pnpm prisma generate  # Regenerates the Prisma Client based on the updated schema.
pnpm lint            # Checks for code style and syntax issues.
```

## 6. Deployment

Deploy your Next.js application using [Vercel](https://vercel.com/), which provides a seamless deployment experience for Next.js projects.

1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and import your project.
3. Vercel will automatically detect the Next.js framework and deploy your application.
4. After deployment, make sure to configure your environment variables in the Vercel dashboard.

For more information, refer to the [Vercel documentation](https://vercel.com/docs).

---

## 7. Troubleshooting

### 1. `pnpm` Command Not Found

If you encounter a "command not found" error for `pnpm`, make sure that you have installed it globally using npm:

```bash
npm install -g pnpm
```

To explore other installation methods and choose the one that best suits your system and needs, visit the official pnpm installation page: [pnpm Installation](https://pnpm.io/installation).

### 2. Issues with Environment Variables

Ensure that your `.env` file is correctly set up and placed in the root directory of the project.

### 3. Issues with Dependencies

If you encounter errors during the installation of dependencies, try deleting `node_modules` and the lock file, then reinstall:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 8. Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository on GitHub.
2. Create a new branch from `main` for your feature or bugfix.
3. Make your changes and commit them with a clear and descriptive commit message.
4. Push your changes to your fork and create a pull request to the main repository.

For detailed guidelines, refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

---

## 9. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
