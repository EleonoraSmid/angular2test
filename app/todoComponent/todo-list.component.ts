import { Component, OnInit } from '@angular/core';

import { Todo } from './todo'
import { TodoService } from './todo.service'

import { Router } from '@angular/router'

@Component({
	moduleId: module.id,
	selector: 'my-todo-list',
	templateUrl: 'todo-list.html',
	styleUrls: ['todo-list.css'],
	providers: [TodoService]
})

export class TodoListComponent implements OnInit {
	todos: Todo[];
	selectTodo: Todo;
	constructor (
		private router: Router,
		private todoService: TodoService
	){}
	gotoTodo(): void{
		this.router.navigate(['/todo', this.selectTodo.id])
	}
	selectedTodo(todo:Todo): void {
		this.selectTodo = todo
	}
	getTodos(): void {
		this.todoService.getTodos().then(todos => this.todos = todos)
	}
	ngOnInit(): void{
		this.getTodos();
	}
}
