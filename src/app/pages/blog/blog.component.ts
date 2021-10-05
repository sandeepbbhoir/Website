import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goto(path: string):void {
    this.router.navigateByUrl(path);
}
}
