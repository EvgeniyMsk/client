import { Component, OnInit } from '@angular/core';
import {Person} from "../models/Person";
import {PeopleService} from "../service/person.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  people : Person[];
  displayedColumns: string[] = ['Организация', 'Персона', 'Дата рождения', 'Паспорт', 'Место рождения', 'Допущен', 'Дата проверки', 'Документ', 'Дата'];

  constructor(private peopleService : PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getAllUsers()
      .subscribe(data => {
          this.people = data;
          console.log(data)
        }
      )
  }

}
