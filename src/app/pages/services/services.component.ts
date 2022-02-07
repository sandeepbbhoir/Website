import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/seo.service';

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
  private seoTags:any=[
    {title:'Services'},
    {keywords:'Web Application, UI/Front End Dev, Mobile App Dev, Mobile App, Testing Services'},
    {description:'Our expertise is in Web Application Development, UI/Front End Dev, Mobile App Dev, Mobile App Testing, Testing Services'},
  ]
  constructor(private meta:Meta, private seo:SeoService) {
    this.seo.updateMeta(this.seoTags);
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
