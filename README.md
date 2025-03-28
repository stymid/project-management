# Project Management App

This project is a project management application built using Next.js, Supabase, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org) (version 14.x or higher)
- [Git](https://git-scm.com/)

## Installation and Setup

1. **Clone the repository:**

   Clone the project repository from GitHub:

   ```bash
   git clone https://github.com/stymid/project-management.git
   cd project-management
   ```

2. **Install dependencies:**

   To install all the required dependencies for the project, run the following command:

   ```bash
   npm install
   ```

3. **Set up .env file:**

   To configure the project, you need to create a `.env` file. Copy the `.env.example` file to `.env` by running the following command:

   ````bash
   cp .env.example .env

   ‍‍‍‍‍‍‍```
   Then, fill in the Supabase values:

   ‍‍```bash
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ````

   You can get the SUPABASE_URL and SUPABASE_ANON_KEY from your Supabase dashboard.

4. Run the development server:
   To start the development server, run:

   ```bash
   npm run dev
   ```

Your project will be available at http://localhost:3000.

## Using the Project

This project allows you to manage projects, apply filters based on project status, price, and favorites, and view the details of each project.

**Filtering Projects**

You can filter projects based on the following criteria:
• Search: Search for projects by name.
• Project Status: Project status includes Not Started, In Progress, Completed, and Approved.
• Price: You can specify the price range of the projects.
• Favorites: You can filter projects by your favorite ones.

Project Structure
• src/app/: Contains all pages and components.
• src/lib/: API-related code and server-side interactions (such as Supabase).
• src/context/: Global state management (like projects and filter state).
• src/components/: All project components, including project cards and progress bars.

## Support

If you have any questions or run into issues, feel free to contact us or open an issue on GitHub.

### `.env` Setup

The `.env` file in Node.js projects is used to store environment variables. In this project, we use `.env` to store sensitive information like `SUPABASE_URL` and `SUPABASE_ANON_KEY`.

#### Steps to set up `.env` file:

1. You will see an `.env.example` file in the project. This file is for reference and doesn't contain any sensitive data.
2. Create a copy of this file and rename it to `.env`. This file will contain your Supabase keys and other settings.
3. Retrieve the necessary values from your Supabase dashboard or other services.
4. The `.env` file should **not** be committed to Git. It should be listed in `.gitignore` to prevent sensitive information from being shared.

```bash
# .gitignore file
.env
```

Additional Notes:
• The project may require different environments (development, production, testing, etc.), which can be managed via different .env files.
