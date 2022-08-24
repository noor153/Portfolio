import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNotFoundComponent } from '../home-not-found/home-not-found.component';
import { HomeMovieComponent } from '../moviedb/home-movie/home-movie.component';
import { CryptoFieldComponent } from './crypto-field.component';

const routes: Routes = [
  {path:"cryptoField",component:CryptoFieldComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoFieldRoutingModule { }
