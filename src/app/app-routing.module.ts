import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: ()=>import('./pages/home/home.module').then(m =>m.HomeModule)
  },
  {
    path:'about',
    loadChildren: ()=>import('./pages/about/about.module').then(m =>m.AboutModule)
  },
  {
    path:'services',
    loadChildren: ()=>import('./pages/services/services.module').then(m =>m.ServicesModule)
  },
  {
    path:'service',
    loadChildren: ()=>import('./pages/service/service.module').then(m =>m.ServiceModule)
  },
  {
    path:'portfolio',
    loadChildren: ()=>import('./pages/portfolio/portfolio.module').then(m =>m.PortfolioModule)
  },
  {
    path:'blogs',
    loadChildren: ()=>import('./pages/blogs/blogs.module').then(m =>m.BlogsModule)
  },
  {
    path:'blog',
    loadChildren: ()=>import('./pages/blog/blog.module').then(m =>m.BlogModule)
  },
  {
    path:'customize',
    loadChildren: ()=>import('./pages/customize/customize.module').then(m =>m.CustomizeModule)
  },
  {
    path:'contact',
    loadChildren: ()=>import('./pages/contact/contact.module').then(m =>m.ContactModule)
  },
  {
    path:'privacy',
    loadChildren: ()=>import('./pages/privacy-policy/privacy-policy.module').then(m =>m.PrivacyPolicyModule)
  },
  {
    path:'term',
    loadChildren: ()=>import('./pages/terms/terms.module').then(m =>m.TermsModule)
  },
  {
    path:'faq',
    loadChildren: ()=>import('./pages/faq/faq.module').then(m =>m.FaqModule)
  },
  {
    path:'career',
    loadChildren: ()=>import('./pages/career/career.module').then(m =>m.CareerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
