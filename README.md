# Getting Started with GetMovieInfo

This project was bootstrapped with [GetMovieInfo](https://github.com/mani154/SampleMovieApp).

## Install Dependencies

### `react-scripts`
### `axios`

Run npm i 'package name' to install dependencies.
react-scripts is usually pre-installed, however, run the respective command, if dependency error occurs.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### APIs Used
[The Open Movie Database APIs](http://www.omdbapi.com/)

In case server authentication error occurs with the existing API key, generate new API key from : http://www.omdbapi.com/apikey.aspx

### API Info
* Method: `GET`
* Search URL: `https://www.omdbapi.com/?s={MOVIE_NAME}&apikey={API_KEY}`
* Movie Details URL: `https://www.omdbapi.com/?i={MOVIE_ID}&apikey={API_KEY}`
