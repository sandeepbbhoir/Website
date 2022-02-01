import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarFixed:boolean=false;
  expandNav:boolean=false;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }
  goto(path: string):void {
    this.router.navigateByUrl(path);
   
}
  @HostListener('window:scroll',['$event']) onscroll(){
  ((window.scrollY>100)? this.navbarFixed=true:this.navbarFixed=false);
  }
  navMenu(){
    this.expandNav=!this.expandNav;
  }

}
