import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// // Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './heroComponent/hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroComponent/heroes.component';
import { HeroService } from './heroComponent/hero.service';
import { TodoListComponent } from './todoComponent/todo-list.component';
import { TodoService } from './todoComponent/todo.service';
import { TodoDetailComponent } from './todoComponent/todo-details.component'

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
  	AppRoutingModule,
  	HttpModule
 ],
  declarations: [ 
  	AppComponent,
  	HeroDetailComponent,
  	HeroesComponent,
    TodoListComponent,
    TodoDetailComponent,
  	DashboardComponent
  ],
  providers: [
  	HeroService,
    TodoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
