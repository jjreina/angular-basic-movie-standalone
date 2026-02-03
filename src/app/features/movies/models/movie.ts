export interface MovieResponse {
  status: boolean;
  message: string;
  timestamp: number;
  movies: Movie[];
}

export interface Movie {
  id: string;
  qid: string;
  title: string;
  year: number;
  stars: string;
  q: string;
  image: string;
}
