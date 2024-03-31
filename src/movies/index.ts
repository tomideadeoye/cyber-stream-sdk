import { Base } from "../base";
import { Movie, MovieDescription, MoviesApiResponse } from "./types";

// Class that extends the Base class and implements the Movies API
export class Movies extends Base {
  // Method to get a random set of movies
  async getRandomMovies(): Promise<MovieDescription[]> {
    let uniqueMovies = new Map<string, MovieDescription>();

    while (uniqueMovies.size < 10) {
      const { description } = await this.request<MoviesApiResponse>();

      description.forEach((movie) => {
        if (!uniqueMovies.has(movie["#IMDB_ID"])) {
          uniqueMovies.set(movie["#IMDB_ID"], movie);
        }
      });

      if (description.length < 10) {
        break;
      }
    }

    return Array.from(uniqueMovies.values()).slice(0, 10);
  }
  // Get Movie from API using the ID
  async getMovieById(id: string): Promise<Movie> {
    const movie = await this.request<Movie>(`?tt=${id}`);
    return movie;
  }

  // Search for movies by title or keywords
  async searchMovies(query: string): Promise<MovieDescription[]> {
    const { description } = await this.request<MoviesApiResponse>(
      `q=${encodeURIComponent(query)}`
    );
    return description;
  }
}
