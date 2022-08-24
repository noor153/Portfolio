import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=5258870cfe26c46daffc8052f242f1c0`)
  }

  getMovie(id:string):Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5258870cfe26c46daffc8052f242f1c0&language=en-US`)
  }

  getPopM(page:string,type:string){

  }

  getTRM(page:string,type:string){

  }

  getUCM(page:string,type:string){

  }
  getLts(page:string,type:string){

  }

}
