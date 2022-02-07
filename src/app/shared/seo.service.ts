import { Injectable } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title:Title,private meta:Meta) { }
  updateMeta(val:any){
      this.title.setTitle(val[0].title);
      this.meta.updateTag({name:'keywords',content:val[1].keywords});
      this.meta.updateTag({name:'description',content:val[2].description}),
      this.meta.updateTag({name:'author',content:'Ojas Enterprise'});
  }


}
