import { Component, Input, inject } from '@angular/core';

import { Movie } from '../../../../../models/movie.model';
import { TmdbService } from '../../../../../services/tmdb.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;

  tmdbService = inject(TmdbService);
}
