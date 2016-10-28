import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroComponent/heroes.component';
import { HeroDetailComponent } from './heroComponent/hero-detail.component';
import { TodoListComponent } from './todoComponent/todo-list.component';
import { TodoDetailComponent } from './todoComponent/todo-details.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },
	{ path: 'todo/:id', component: TodoDetailComponent },
	{ path: 'heroes', component: HeroesComponent},
	{ path: 'todo', component: TodoListComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}