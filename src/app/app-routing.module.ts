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
    path:'blogs',
    loadChildren: ()=>import('./pages/blogs/blogs.module').then(m =>m.BlogsModule)
  },
  {
    path:'blog',
    loadChildren: ()=>import('./pages/blog/blog.module').then(m =>m.BlogModule)
  },
  {
    path:'contact',
    loadChildren: ()=>import('./pages/contact/contact.module').then(m =>m.ContactModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
