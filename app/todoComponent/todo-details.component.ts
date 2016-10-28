import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'

import { Todo } from './todo'
import { TodoService } from './todo.service'

@Component({
	moduleId: module.id,
	selector: 'todo-detail',
	styleUrls: ['todo-detail.css'],
	templateUrl: 'todo-detail.html',

})
export class TodoDetailComponent implements OnInit {
	@Input() todo:Todo;
	constructor(
		private todoService: TodoService,
		private route: ActivatedRoute,
		private location: Location
	){}
	goBack(): void {
		this.location.back()
	}
	ngOnInit(): void {
		this.route.params.forEach((params:Params)=>{
			let id = +params['id'];
			this.todoService.getTodo(id)
			.then(todo => this.todo = todo)
		})
	}
}