import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _http:HttpClient) { }

  public getForm(name:string){
    return this._http.get(`assets/forms/${name}.json`);
  }

 
}
