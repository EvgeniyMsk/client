import { Component, OnInit } from '@angular/core';
import {Person} from "../models/Person";
import {PeopleService} from "../service/person.service";
import {TokenStorageService} from "../service/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  people : Person[];
  displayedColumns: string[] = ['Организация', 'Персона', 'Дата рождения', 'Паспорт', 'Место рождения', 'Допущен', 'Дата проверки', 'Документ', 'Дата'];

  constructor(private peopleService : PeopleService,
              private tokenService : TokenStorageService,
              private router : Router) { }

  ngOnInit(): void {
    this.peopleService.getAllUsers()
      .subscribe(data => {
          this.people = data;
          console.log(data)
        }
      )
  }

  logout() : void {
    this.tokenService.logOut();
    this.router.navigate(['login']);
  }

}
