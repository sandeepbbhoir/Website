import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private meta:Meta) {
    this.meta.addTags([
      { name: 'keywords', content: 'Digital marketing agency, Digital marketing, Digital marketing company, app devlopers' },
      { name: 'description', content: 'This is an article about Angular Meta service' },
      { name: 'author', content: 'Ojas Enterprise' },
    ]);
  }

  ngOnInit(): void {
  }

}
