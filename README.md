This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick Setup and Info

### A simple app using the public IUCN Red List API

Loads a random region for species. Fetch all species in the selected region.

* filter response for Critically Endangered species. Fetch the conservation measures for all critically endangered species and concatenated the title
of response.
* filter response for mammal class

Will take a while to complete. Is a huge list

### Node Version

v12.11.1

### Package Manager

Yarn

```

git clone git@github.com:anvode/species.git directory
cd directory
yarn install
cp .env.example .env
yarn start

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
