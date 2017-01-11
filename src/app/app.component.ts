import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  welcome = 'Welcome in the Hero Tour!';
  hero:	Hero 	=	{ 

  						id:1,
  						name:'Windstorm'
  					}
}
export class Hero{
	id:number;
	name:string;
}
