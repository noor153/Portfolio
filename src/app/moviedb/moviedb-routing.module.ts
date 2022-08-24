import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from '../app-home/app-home.component';
import { NavbarComponent } from '../crypto-field/navbar/navbar.component';
import { HomeNotFoundComponent } from '../home-not-found/home-not-found.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeMovieComponent } from './home-movie/home-movie.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviedbComponent } from './moviedb.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:"moviedb",component:MoviedbComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', canActivate:[AuthGuard],component:HomeMovieComponent },
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:"network", canActivate:[AuthGuard],component:NetworkComponent},
    {path:"tv", canActivate:[AuthGuard],component:TvComponent},
    {path:"people", canActivate:[AuthGuard],component:PeopleComponent},
    {path:"movies", canActivate:[AuthGuard],component:MoviesComponent},
    {path:"about", canActivate:[AuthGuard],component:AboutComponent},
    {path:"movieDetails/:id", canActivate:[AuthGuard],component:MovieDetailsComponent},
    {path:"**",component:NotFoundComponent},
  ]},
  {path:"**",component:HomeNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviedbRoutingModule { }
