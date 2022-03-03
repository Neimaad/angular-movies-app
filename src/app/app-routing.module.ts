import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMoviesComponent } from './movies/details-movies/details-movies.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'details/:id', component: DetailsMoviesComponent },
    { path: 'genre/:genre', component: MoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
