import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Typed from 'typed.js';
import { Meta } from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/seo.service';

// import { Parallax } from 'parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  private seoTags:any=[
    {title:'Ojas Enterprise'},
    {keywords:'Digital marketing, Sale Online, Seo, Android App, ios App, Boost Sales, Advertising, Marketing, Website Traffic, Blockchain Development'},
    {description:'60-80% boost your sales with our strategy. We help business from local to organized business to gain more sales & brand awareness by promoting them on social media in a suitable budget for them.'},
  ]
  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 4
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  text:any;



  constructor(private router: Router,private seo:SeoService) {
      this.seo.updateMeta(this.seoTags);
  }

  ngOnInit(): void {
    const options = {
      strings: ["Digitalize ^4000 ", "Enhance ^3000"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    }

    new Typed(".typing-element", options);


    const options2 = {
      strings: ["Dreams ^4000", "Business ^1000"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
      startDelay: 3000
    }

    new Typed(".typing-elements", options2);
  }


  goto(path: string): void {
    this.router.navigateByUrl(path);
  }


}
