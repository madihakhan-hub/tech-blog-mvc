# tech-blog-mvc

A CMS-style blog site where developers can publish articles, blog posts, and thoughts and opinions. This project is built from scratch following the MVC (Model-View-Controller) paradigm, utilizing Handlebars.js as the templating language, Sequelize as the ORM, and express-session for authentication. The application is deployed on Heroku.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Users can sign up, log in, and log out. Authentication is handled using express-session and bcrypt for password hashing.
- **Dashboard**: Logged-in users have access to a dashboard where they can view and manage their blog posts.
- **Comments**: Users can leave comments on blog posts.
- **Session Management**: Sessions are managed using express-session, and session data is stored in a MySQL database using Sequelize.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd cms-style-blog-site
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your MySQL database:

   - Create a MySQL database based on the configuration specified in `config/config.json`.
   - Run database migrations using Sequelize:

     ```bash
     sequelize db:migrate
     ```

5. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   SESSION_SECRET=your_session_secret
   DATABASE_URL=mysql://username:password@host:port/database_name
   ```

   Replace `your_session_secret` with a long, randomly generated string for session encryption and `DATABASE_URL` with your MySQL database connection URL.

6. Start the server:

   ```bash
   npm start
   ```

7. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Visit the homepage to view existing blog posts, log in, or sign up.
- Once logged in, users can access their dashboard to manage their blog posts.
- Click on a blog post title to view the full post and leave comments.

## Dependencies

- [Express.js](https://expressjs.com/): Web application framework for Node.js.
- [Handlebars.js](https://handlebarsjs.com/): Templating language for building UI components.
- [Sequelize](https://sequelize.org/): Promise-based ORM for Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt): Library for password hashing.
- [express-session](https://www.npmjs.com/package/express-session): Session middleware for Express.js.
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize): Session store for Sequelize.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.

## Contributing

Contributions are welcome! Please feel free to open a pull request or submit an issue if you find any bugs or have suggestions for improvements.

