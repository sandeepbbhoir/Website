import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  displayWeb:boolean=false;
  displayMarketing:boolean=false;
  displayIot:boolean=false;
  displayMobile:boolean=false;
  constructor(private meta:Meta) {
    this.meta.addTags([
      { name: 'keywords', content: 'Web Application, UI/Front End Dev, Mobile App Dev, Mobile App, Testing Services' },
      { name: 'description', content: 'Our expertise is in Web Application Development, UI/Front End Dev, Mobile App Dev, Mobile App Testing, Testing Services' },
      { name: 'author', content: 'Ojas Enterprise' },
    ]);
   }

  ngOnInit(): void {
  }
  showDevelopment(){
    this.displayWeb=true;
  }
  showDigital(){
    this.displayMarketing=true;
  }
  showIOT(){
    this.displayIot=true;
  }
  showMobile(){
    this.displayMobile=true;
  }
}
