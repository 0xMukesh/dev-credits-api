# Dev Credits API

The API for communicating with the dev credits bot and the database.

## 👨‍💻 Demo

Check out the website: [Dev Credits API](https://devcredits-api.herokuapp.com/)

## 👇 Prerequisites

Before starting working on this project, please make sure you have already installed the following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)
- [Yarn](https://yarnpkg.com/)

## 🛠️ Installation Steps

1. Fork the project
2. Clone the project, by using the following command
   ```bash
   $ git clone https://github.com/Kira272921/dev-credits-api
   ```
3. Navigate to the project directory `cd dev-credits-api`
4. Install dependencies with `yarn install`
5. Run `yarn start` to start a local development environment

## 🛣️ Available endpoints

- `/`: The root route
- `/get/:id`: The route for getting the total dev credits for a specific user (ID is the discord user ID for that specific user)
- `/post`: The route for adding/updating dev credits for a specific user
- `/top`: The route for getting the leaderboard.

## 👨‍💻 Contributing

All kinds of contributions are always welcomed. It is recommended to either tell the maintainers that you are working on a previously made issue or make a new issue and let the maintainers now that you are working on it.
