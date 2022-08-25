import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { ToolbarComponent } from './interfaces/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
// import { TabComponent } from './interfaces/tab/tab.component';
// import { HeaderComponent } from './interface/header/header.component';
// import { NavComponent } from './interface/nav/nav.component';
import { HomeComponent } from './interface/home/home.component';
import { AboutmeComponent } from './interface/aboutme/aboutme.component';
import { ProjectsComponent } from './interface/projects/projects.component';
import { BlogComponent } from './interface/blog/blog.component';
import { RndComponent } from './interface/rnd/rnd.component';
// import { TypingAnimationDirective } from 'angular-typing-animation'

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    HomeComponent,
    AboutmeComponent,
    ProjectsComponent,
    BlogComponent,
    RndComponent,
    // TypingAnimationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
