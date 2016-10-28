import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todo';
@Injectable()
export class TodoService{
	getTodos(): Promise<Todo[]>{
		return Promise.resolve(TODOS);
	}
	getTodo(id: number): Promise<Todo>{
		return this.getTodos()
		.then(todos => todos.find(todo => todo.id === id))
	}
}