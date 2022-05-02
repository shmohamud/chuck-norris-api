This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To view deployment on Heroku: 

https://chuck-norris-react-client.herokuapp.com/

## Running the application

1. npm install
2. npm start

## Styling

1. Note that the expectation is that this is a simple application an would not grow.
2. This is why CSS/SCSS selectors lack specificity. 
3. SCSS is used for App level styles. For more on Sass: https://sass-lang.com/documentation

## State Management

React Hooks are used for state management and side effects.

## React Component Hiearchy

`<App> <Header/> <Content/> <Footer/> </App>`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the Jest test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:cypress`

Launches the Cypress test runner in interactive watch mode. (https://www.npmjs.com/package/@cypress/react).
Note that rather than spin up a separate server for npm run test:cypress, the developer must already be running the application using 'npm start' in a different terminal.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


