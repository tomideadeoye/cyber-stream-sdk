# Cyber Stream SDK

The Cyber Stream TypeScript SDK provides a robust interface to interact with IMDB movie database API, facilitating operations like fetching random movies, searching for movies based on keywords, and retrieving detailed information about movies using their IMDb ID.

It also provides a fallback API to fetch just lists from IMDB.

## Installation

To install the SDK, use the following npm command.

<pre>npm install cyber-stream-sdk</pre>

## Usage

### Initializing the SDK

Import the SDK and initialize it with your API key or other necessary configuration parameters.

<pre>const cyberStream = new TomideStreams();</pre>

### Fetching Random Movies

To get a list of random movies, use the `getRandomMovies` method. This method ensures you receive a diverse selection of movies each time it's called.

<pre>cyberStream.getRandomMovies().then((movies) => {
  console.log(movies);
});</pre>

### Searching for Movies

You can search for movies by titles or keywords using the `searchMovies` method, which returns a list of movies matching the search criteria.

<pre>searchMovies("Inception").then((movies) => {
  console.log(movies);
});</pre>

### Retrieving a Movie by IMDb ID

```
cyberStream.getMovieById("tt1375666")
```

To get detailed information about a specific movie, use the `getMovieById` method with the movie's IMDb ID as the parameter.

Contributors

- **Tomide Adeoye**
  - **LinkedIn**: [tomide-adeoye-828604129](https://www.linkedin.com/in/tomide-adeoye-828604129/)
  - **Twitter**: [\_Tomide
    ](https://twitter.com/_Tomide)
  - [M](https://twitter.com/_Tomide)obile: +234 818 92 7251
  - **Email**: [tomide@merislabs.com](mailto:tomide@merislabs.com)

## License

The TomideStreams SDK is available under the MIT License. For more details, see the LICENSE file in the repository.
