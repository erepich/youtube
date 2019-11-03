## YouTube Video Search 
* This is a singlepage React app that connects to YouTube api to search and returns image, title description and comments.
* The app allows for sorting by clicking on the relevance, rating and date buttons.

## Getting Started

*  In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode with coverage.<br />

### `npm run lint`

Launches the lint runner eslint.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment
### `serve -s build` 
Build file is in /build and can be run after installing serve.

## Notes
* Originally bootstrapped with  [Create React App](https://github.com/facebook/create-react-app)
* Semantic-ui made quick work of some simple format styles
* Used linting based on AirBnb, eslint:recommended and plugin:react/recommended
* Used .env for youtube api key storing and normally this would not be in github 
* Unit tests written with jest/react testing library
* uses axios version 0.18.1 as their is a bug with current latest version 0.19.0 and merging of the params. see https://github.com/axios/axios/issues/2190
