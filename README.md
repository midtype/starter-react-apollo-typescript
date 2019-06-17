# Midtype Starter

This project is a starter kit for using Midtype with the following libraries:

- **Typescript**, a [typed superset of Javascript](https://typescriptlang.org/docs/).
- **React** the [open-source front-end framework](https://reactjs.org/docs/).
- **Apollo Client** the [open-source library developed by Apollo GraphQL for building client applications that use a GraphQL API](https://www.apollographql.com/docs/react/).

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and slightly modified to integrate with Midtype.

## Getting Started

Before you get started, visit your project's Midtype dashboard and be sure you add `localhost:3000/login` as a valid login redirect URL to test this locally. This **shouldn not** be the default URL, just an additional one.

1. Cloning this repository and run `yarn` from within the root directory. This will install all necessary dependencies.
2. Next open the `.env` file in the root directory. Here, you'll find some important environment variables that you must update:

- `REACT_APP_MY_APP_NAME` - a display name for your application.
- `REACT_APP_MY_APP_ID` - the Midtype project ID for your application. This can be found in [the "Project" section of your Midtype dashboard](https://app.midtype.com/project).
- `REACT_APP_MY_APP_GOOGLE_SIGN_IN_LINK` - the Google sign in link for your project. This can also be found in [the "Project" section of your Midtype dashboard](https://app.midtype.com/project). You can create different `.env` files [for local versus production environments](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables), and each one should have the right Google sign in link. For local development, be sure this value is set to the sign in link associated with the `localhost:3000/login` redirect URL.

3. Run the `yarn start` command from the root directory and your application should start running on `localhost:3000`.

Once the app is up and running, you can use any of the GraphQL queries or mutations you find [in the API docs for your project](https://app.midtype.com/data). Good luck!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
