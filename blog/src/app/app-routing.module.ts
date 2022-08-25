import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HeaderComponent } from './interface/header/header.component';
import { HomeComponent } from './interface/home/home.component';
import { AboutmeComponent } from './interface/aboutme/aboutme.component';
import { ProjectsComponent } from './interface/projects/projects.component';
import { BlogComponent } from './interface/blog/blog.component';
import { RndComponent } from './interface/rnd/rnd.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component:  BlogComponent },
  { path: 'rnd', component:  RndComponent  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
