import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from '../app-home/app-home.component';
import { HomeNotFoundComponent } from '../home-not-found/home-not-found.component';
import { HomeMovieComponent } from '../moviedb/home-movie/home-movie.component';
import { FokirComponent } from './fokir.component';

const routes: Routes = [
  // {path:"fokir",component:FokirComponent},
  // {path:"**",component:HomeNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FokirRoutingModule { }
