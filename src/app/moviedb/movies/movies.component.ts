import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trending:any[]=[]

  constructor(private _service:MoviesService) { }

  ngOnInit(): void {
    this._service.getTrending('movie').subscribe((res)=>{
      this.trending = res.result
    })
  }

  hello = true

}
