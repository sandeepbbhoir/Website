import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private seoTags:any=[
    {title:'Contact Us'},
    {keywords:'Digital marketing agency, Digital marketing, Digital marketing company, app devlopers'},
    {description:'This is an article about Angular Meta service'},
  ]
  constructor(private meta:Meta,private seo:SeoService) {
    this.seo.updateMeta(this.seoTags);
  }

  ngOnInit(): void {

  }

}
