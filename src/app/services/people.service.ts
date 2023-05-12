import { Injectable } from '@angular/core';
import { People } from '../model/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private $listPeople: People[] = [];

  get personas() {
    return this.$listPeople;
    return (this.$listPeople = JSON.parse(localStorage.getItem('$datos')!));
  }

  createRegister(persona: People) {
    this.$listPeople.push(persona);
    localStorage.setItem('$datos', JSON.stringify(this.$listPeople));
  }
}
