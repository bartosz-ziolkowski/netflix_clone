import { Component, OnInit, effect, inject } from '@angular/core';
import { Genre, GenresResponse } from '../../../models/genre.model';

import { MovieListComponent } from './movie-list/movie-list.component';
import { TmdbService } from '../../../services/tmdb.service';

@Component({
  selector: 'app-movie-selector',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './movie-selector.component.html',
  styleUrl: './movie-selector.component.scss',
})
export class MovieSelectorComponent implements OnInit {
  tmdbService = inject(TmdbService);

  genres: Genre[] | undefined;

  constructor() {
    effect(() => {
      let genresResponse =
        this.tmdbService.genres().value ?? ({ genres: [] } as GenresResponse);
      this.genres = genresResponse.genres;
    });
  }

  ngOnInit(): void {
    this.fetchAllGenres();
  }

  private fetchAllGenres(): void {
    this.tmdbService.getAllGenres();
  }
}
