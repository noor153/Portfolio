import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {


  id:any
  mD:any

  imgPrefix:string ='https://image.tmdb.org/t/p/w500'


  constructor(private _ActivatedRoute:ActivatedRoute,private _movieDetais:MoviesService) {

    this.id = _ActivatedRoute.snapshot.params.id
    _movieDetais.getMovie(this.id).subscribe((data)=>{
      
    this.mD = data
    })
  }

  ngOnInit(): void {
  }

  

}
