import {
  Component,
  OnInit
} from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { Mensajes } from '../mensajes';
import { LISTA_MENSAJES } from '../lista_mensajes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroes = HEROES;
selectedHero?: Hero;
lista_mensajes = LISTA_MENSAJES;
selectId?: Mensajes;
id = 0;

  constructor() { }

  ngOnInit(): void {

  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.lista_mensajes.push({id: hero.id});
    this.id = hero.id;
  }
  limpiar(){
    this.lista_mensajes = [];
    console.log(this.lista_mensajes)
  }
}

