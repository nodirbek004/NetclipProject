import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './pages/works/works.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
 {path:"works",component:WorksComponent},
 {path:"blog",component:BlogComponent},
 {path:"services",component:ServicesComponent},
 {path:"about",component:AboutComponent},
 {path:"reviews",component:ReviewsComponent},
 {path:'contact',component:ContactComponent},
 {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
