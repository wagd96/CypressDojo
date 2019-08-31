import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CodebreakerService {

  URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  setSecret(secret:String){
    return this.http.get(`${this.URL}/setsecret/${secret}`);
  }

  guess(number:string){
    return this.http.get(`${this.URL}/guess/${number}`)
  }
}
