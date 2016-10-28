import { Component, OnInit } from '@angular/core';

import { Hero } from './heroComponent/hero';
import { HeroService } from './heroComponent/hero.service';
import { Todo } from './todoComponent/todo';
import { TodoService } from './todoComponent/todo.service'

import { Router } from '@angular/router'

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	styleUrls: [ 'dashboard.component.css' ],
	templateUrl:  'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
	heroes: Hero[] = [];
	todos: Todo [] = [];
	selectedHero: Hero;

 	constructor(
    	private router: Router,
    	private todoService: TodoService,
    	private heroService: HeroService
    	) { }

	ngOnInit(): void {
		this.todoService.getTodos()
		.then(todos => this.todos = todos.sort((a,b)=>{if(a.rank > b.rank){return-1}if(a.rank < b.rank){ return 1}return 0}).slice(0,4))
		this.heroService.getHeroes()
		.then(heroes => this.heroes = heroes.slice(1, 5))
	}

	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
	gotoTodo(todo: Todo): void {
		let link = ['/todo', todo.id]
		this.router.navigate(link);
	}
}