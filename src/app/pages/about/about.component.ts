import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/seo.service';
import Typed from 'typed.js';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private seoTags:any=[
    {title:'About Us'},
    {keywords:'development, digital marketing, IOT, Mobile app, , ios app'},
    {description:'Ojas enterprise is modelized with a vision to provide a software development, web application development, digital marketing, IOT and Mobile app Development company with experienced IT consultants who can offer valuable business solution. We help you and your business connect with customers, integrate with vendors and employees to work to their fullest potential.'},
  ]
  constructor(private meta:Meta,private seo:SeoService) {
    this.seo.updateMeta(this.seoTags);
  }

  ngOnInit() {
    const options = {
      strings: ["Digital Marketing Agency","Technology Planners", "Pile of Tech Stack","Time Saving Agency","Social Media Geek"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,

    }

    new Typed(".typing-element3", options);
  }
  ngAfterViewInit(): void {

  }

}
