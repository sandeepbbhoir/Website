import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  fullYear!:number;
  constructor(private router:Router) {
    this.fullYear=new Date().getFullYear();
  }

  ngOnInit(): void {
  }
  goto(path: string): void {
    this.router.navigateByUrl(path);
  }
}
