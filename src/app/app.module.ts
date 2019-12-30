import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { AngularContentComponent } from './angular-content/angular-content.component';
import { NodeContentComponent } from './node-content/node-content.component';

const routes: Route = [
  {path:'', redirectTo:'/course', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  { path: 'course', component: CourseComponent },
  { path: 'course/:name', component: ChapterListComponent },
  { path: 'course/angular/:id', component: AngularContentComponent },
  { path: 'course/node/:id', component: NodeContentComponent }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, CourseComponent, HomeComponent, ChapterListComponent, AngularContentComponent, NodeContentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
