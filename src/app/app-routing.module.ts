import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { CryptoFieldComponent } from './crypto-field/crypto-field.component';
import { FokirComponent } from './fokir/fokir.component';
import { HomeNotFoundComponent } from './home-not-found/home-not-found.component';
import { AboutComponent } from './moviedb/about/about.component';
import { HomeMovieComponent } from './moviedb/home-movie/home-movie.component';
import { LoginComponent } from './moviedb/login/login.component';
import { MovieDetailsComponent } from './moviedb/movie-details/movie-details.component';
import { MoviedbComponent } from './moviedb/moviedb.component';
import { MoviesComponent } from './moviedb/movies/movies.component';
import { NetworkComponent } from './moviedb/network/network.component';
import { NotFoundComponent } from './moviedb/not-found/not-found.component';
import { PeopleComponent } from './moviedb/people/people.component';
import { RegisterComponent } from './moviedb/register/register.component';
import { TvComponent } from './moviedb/tv/tv.component';


const routes: Routes = [
  {path:"",component:AppHomeComponent,children:[

  ]},
  // {path:"movieDb",component:MoviedbComponent,children:[
  //   {path:'',redirectTo:'home',pathMatch:'full'},
  //   {path:'home',component:HomeMovieComponent },
  //   {path:'login',component:LoginComponent},
  //   {path:'register',component:RegisterComponent},
  //   {path:"network",component:NetworkComponent},
  //   {path:"tv",component:TvComponent},
  //   {path:"people",component:PeopleComponent},
  //   {path:"movies",component:MoviesComponent},
  //   {path:"about",component:AboutComponent},
  //   {path:"movieDetails/:id",component:MovieDetailsComponent},
  //   {path:"**",component:NotFoundComponent},
  // ]},
  {path:"fokir",component:FokirComponent},
  {path:"cryptoField",component:CryptoFieldComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
