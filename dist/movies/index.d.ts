import { Movie, MovieDescription } from "./types";
export declare abstract class Base {
    private baseUrl;
    private fallbackUrl;
    protected request<T>(query: string, retry?: boolean): Promise<T>;
}
export declare class Movies extends Base {
    getRandomMovies(): Promise<MovieDescription[]>;
    getMovieById(id: string): Promise<Movie>;
    searchMovies(query: string): Promise<MovieDescription[]>;
}
//# sourceMappingURL=index.d.ts.map