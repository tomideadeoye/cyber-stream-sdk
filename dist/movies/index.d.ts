import { Base } from "../base";
import { Movie, MovieDescription } from "./types";
export declare class Movies extends Base {
    getRandomMovies(): Promise<MovieDescription[]>;
    getMovieById(id: string): Promise<Movie>;
    searchMovies(query: string): Promise<MovieDescription[]>;
}
