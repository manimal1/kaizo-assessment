# Kaizo assessment

This is a simple SPA that queries the [Giphy API](https://developers.giphy.com/docs/api/).\
Enter a search item in the input and click the button to retrieve related gifs.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## App architecture

The app employs an architecture that is used at my current workplace. I find it to be quite intuitive and since I voted on and helped implement it at my current job, there was no reason to not use it here. It is organized into `modules`.

### Feature modules

A feature module is a group of functionality for a specific domain feature.

### Routing modules

A routing module is a feature module which has its own routes. Routing modules are prefixed with a `+` sign. This convention groups elements together in the editor's tree, and communicates the way with which the module is loaded.

### Other modules

`Containers` are components that import other services and administer logic to be shared from parent to child. `Components` bridge logic and templates, and are mostly `dumb` components that handle styling. `Providers` are used to handle `React context` to manage shared state across the app. Feature modules can contain any of these `other modules`, as necessary.

### Services

A word on the `giphy` service folder: it was created to separate out the service call to the Giphy API. The idea is that this can then be easily maintained and updated in the future, or even switched out entirely, without affecting the parts of the application that rely on the data from this service. Maybe we want to change out the use `Axios`, or maybe we will use a different API in the future. Managing all that in one service folder is easier than having the calls spread out across the application.

## Added libraries

### Craco

I used [Craco](https://github.com/gsoft-inc/craco) because it allows for easily editing your `create-react-app` config without ejecting. I personally used it here to easily setup the paths and extend our `tsconfig`, but it can be used for a lot more.

### Axios

I used [Axios](https://github.com/axios/axios) for the API query because it is a great library with a lot of features. I am really only using it to quickly create a simple axios instance for quickly creating queries and to have timeout functionality, but it can also be used to intercept HTTP requests, get the download progress, and a lot more.

### Material-UI

[Material-UI](https://material-ui.com/) allows for quickly creating good looking styled components in React. I am very familiar with it and like that it allows for fast prototyping.

### Prettier and EsLint

I also configured these for the project, as any good project should do.
