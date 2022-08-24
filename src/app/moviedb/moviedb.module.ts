import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviedbRoutingModule } from './moviedb-routing.module';
import { MoviedbComponent } from './moviedb.component';
import { HomeMovieComponent } from './home-movie/home-movie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NetworkComponent } from './network/network.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MoviedbComponent,
    HomeMovieComponent,
    LoginComponent,
    RegisterComponent,
    NetworkComponent,
    TvComponent,
    PeopleComponent,
    MoviesComponent,
    AboutComponent,
    MovieDetailsComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MoviedbModule { }
