import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CareerComponent } from './pages/career/career.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    FaqComponent,
    CareerComponent,




  ],
  imports: [
<<<<<<< HEAD
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
=======
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

>>>>>>> b5de888765d06f72a605a5f8537b4bc01d3d2392
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
