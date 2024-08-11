import { Component, OnDestroy, OnInit, effect, inject } from '@angular/core';

import { DatePipe } from '@angular/common';
import { Movie } from '../../../models/movie.model';
import { TmdbService } from '../../../services/tmdb.service';

@Component({
  selector: 'app-more-infos',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './more-infos.component.html',
  styleUrl: './more-infos.component.scss',
})
export class MoreInfosComponent implements OnInit, OnDestroy {
  public movieId = -1;

  tmdbService = inject(TmdbService);

  movie: Movie | undefined;

  constructor() {
    effect(() => {
      this.movie = this.tmdbService.movieById().value;
    });
  }

  ngOnInit(): void {
    this.getMovieById();
  }

  getMovieById(): void {
    this.tmdbService.getMovieById(this.movieId);
  }

  ngOnDestroy(): void {
    this.tmdbService.clearGetMovieById();
  }
}
