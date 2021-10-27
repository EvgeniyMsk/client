import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {TokenStorageService} from "./token-storage.service";
import {Router} from "@angular/router";

const PATH = "http://localhost:8081/api/people";
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http : HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(PATH);
  }


}
