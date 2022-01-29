import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import Typed from 'typed.js';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private meta:Meta) {
    this.meta.addTags([
      { name: 'keywords', content: 'development, digital marketing, IOT, Mobile app, , ios app' },
      { name: 'description', content: 'TOjas enterprise is modelized with a vision to provide a software development, web application development, digital marketing, IOT and Mobile app Development company with experienced IT consultants who can offer valuable business solution. We help you and your business connect with customers, integrate with vendors and employees to work to their fullest potential.' },
      { name: 'author', content: 'Ojas Enterprise' },
    ]);
  }

  ngOnInit() {
    const options = {
      strings: ["Digital Marketing Agency","Technology Planner", "Pile of Tech Stack","Time Saving Agency","Social Media Geek"],
      typeSpeed: 200,
      backSpeed: 200,
      loop: true,

    }

    new Typed(".typing-element3", options);
  }
  ngAfterViewInit(): void {

  }

}
