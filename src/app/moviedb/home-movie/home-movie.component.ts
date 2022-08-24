import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.scss']
})
export class HomeMovieComponent implements OnInit {

  trendingMovies:any[]=[]
  trendingTv:any[]=[]
  trendingPersons:any[]=[]

  imgPrefix:string ='https://image.tmdb.org/t/p/w500'

  constructor(private _service:AuthenticationService,private _moviesService:MoviesService) { 

    this._moviesService.getTrending('movie').subscribe((response)=>{
      this.trendingMovies = response.results.slice(0,10)
    })

    this._moviesService.getTrending('tv').subscribe((response)=>{
      this.trendingTv = response.results.slice(0,10)
    })

    this._moviesService.getTrending('person').subscribe((response)=>{
      this.trendingPersons = response.results.filter((x:any)=>{
        return x.profile_path
      }).slice(0,10)
    })

   }

  ngOnInit(): void {
  }

  fn=this._service.fn
}
