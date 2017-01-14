import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import { HEROES } from './mock-heroes';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})

export class AppComponent implements OnInit {
    constructor(private heroService:HeroService){

    }


    welcome = 'Welcome in the Hero Tour!';
    hero:	Hero 	=	{ 

  						id:1,
  						name:'Windstorm'
  					}

    heroes = HEROES;
    selectedHero:Hero;

    onSelect(hero:Hero):void{
    	this.selectedHero = hero;
    }

    ngOnInit(){
      alert("lancio app!");
    }
}





