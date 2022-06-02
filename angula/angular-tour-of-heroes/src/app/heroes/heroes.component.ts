import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
import { HEROES } from "../mock-hero"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "WindStorm"
  };

  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  TextEmit = '';
  onClick(value: string){
    this.TextEmit = value;
  }

}
