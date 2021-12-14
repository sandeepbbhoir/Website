import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { BreadcrumbComponent } from 'src/app/component/breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    ContactComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
  ]
})
export class ContactModule { }
