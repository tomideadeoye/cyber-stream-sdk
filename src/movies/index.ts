import {
  Movie,
  MovieDescription,
  MoviesApiResponse,
  convertToMovieDescription,
} from "./types";

export abstract class Base {
  private baseUrl = "https://search.imdbot.workers.dev/";
  private fallbackUrl = "https://v2.sg.media-imdb.com/suggestion/h/";

  protected async request<T>(query: string, retry = true): Promise<T> {
    const url = `${this.baseUrl}?${query}`;

    const response = await fetch(url, {
      mode: "no-cors",
    });

    if (response.ok) {
      const data = await response.json();
      return data as T;
    } else if (response.status === 429 && retry) {
      console.log("429 Too Many Requests: Switching to fallback URL");
      return this.requestFallback<T>(query);
    }

    throw new Error(response.statusText);
  }

  private async requestFallback<T>(query: string): Promise<T> {
    console.log(`Requesting from fallback URL: ${this.fallbackUrl}?${query}`);

    const url =
      this.fallbackUrl + encodeURIComponent(query.replace("q=", "")) + ".json";

    const response = await fetch(url, {
      mode: "no-cors",
    });

    if (response.ok) {
      const data = await response.json();
      const totalMovies = convertToMovieDescription(data["d"]);
      const description = totalMovies.filter((movie) => movie["#IMG_POSTER"]);
      console.log("description: ", description);

      return {
        ok: true,
        description,
        error_code: 0,
      } as T;
    }

    throw new Error(response.statusText);
  }
}

export class Movies extends Base {
  async getRandomMovies(): Promise<MovieDescription[]> {
    let uniqueMovies = new Map<string, MovieDescription>();

    while (uniqueMovies.size < 10) {
      const randomLetter = String.fromCharCode(
        97 + Math.floor(Math.random() * 26)
      );

      const { description } = await this.request<MoviesApiResponse>(
        `q=${randomLetter}`
      );

      description.forEach((movie) => {
        uniqueMovies.set(movie["#IMDB_ID"], movie);
      });
    }

    // Convert the Map values to an array and shuffle it to randomize the order
    const shuffledMovies = Array.from(uniqueMovies.values()).sort(
      () => 0.5 - Math.random()
    );

    // Return the first 10 movies from the shuffled array
    return shuffledMovies.slice(0, 10);
  }
  // Get Movie from API using the ID
  async getMovieById(id: string): Promise<Movie> {
    const movie = await this.request<Movie>(`tt=${id}`);

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
