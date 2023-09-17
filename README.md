## Overview

This Project Management App is a web-based application designed to help you manage your projects and clients efficiently. With a user-friendly interface, it provides features for adding, updating, and viewing project details. This README provides an overview of the app's structure and how to get started.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your development machine.
- A GraphQL server (e.g., [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)) running at `http://localhost:5005/graphql` to provide data to the app.

## Getting Started

To get started with the Project Management App, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/ZainAmjad68/team-flow.git
   ```

2. Navigate to the project's root directory:

   ```shell
   cd team-flow
   ```

3. Install the required dependencies for the Server:

   ```shell
   npm install
   ```

4. Create a `.env` file in Root and Add your environment variables:

   ```shell
   NODE_ENV = 'development'
   PORT = 5005
   MONGO_URI = 'mongodb+srv://username:password@cluster0.qwtev05.mongodb.net/mgmt_db?retryWrites=true&w=majority'
   ```

5. Run the Node Server:

   ```shell
   npm run dev
   ```

6. Go To the Client App and install dependencies:

   ```shell
   cd client
   npm install
   ```

7. Update the GraphQL URI in `App.js` to match your server's location:

   ```javascript
   const client = new ApolloClient({
     uri: 'http://localhost:5005/graphql', // Update this URI
     cache
   });
   ```

8. Start the development server:

   ```shell
   npm start
   ```

9. Open your web browser and access the app at `http://localhost:3000`.

## Features

The Project Management App offers the following features:

- **Home Page**: View a list of projects and navigate to individual project pages.
- **Project Details Page**: View and update project details, including name, description, and status.
- **404 Not Found Page**: Handle routes that do not exist.

## Usage

- **Home Page**:
  - Visit the home page by navigating to the root URL (`http://localhost:3000`).
  - Browse the list of projects, and click on a project to view its details.

- **Project Details Page**:
  - Access a project's details page by clicking on a project from the home page.
  - On the project details page, you can:
    - View project information.
    - Update the project's name, description, and status.
    - Submit changes by clicking the "Submit" button.

## Contributing

Contributions to this project are welcome! To contribute, follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix:
   ```shell
   git checkout -b feature/my-feature
   ```
3. Make your changes and commit them with a descriptive message:
   ```shell
   git commit -m "Add my feature"
   ```
4. Push your changes to your forked repository:
   ```shell
   git push origin feature/my-feature
   ```
5. Create a pull request on the original repository.

## License

This Project Management App is open-source software released under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as needed for your projects.
