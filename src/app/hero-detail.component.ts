import { Component,Input,OnInit} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls:['./hero-detail.component.scss']
})

export class HeroDetailComponent {
  
  @Input() hero:Hero;

  ngOnInit(){
    alert("lancio HeroDetails!");
  }

}