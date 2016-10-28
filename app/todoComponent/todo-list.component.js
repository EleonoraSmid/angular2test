"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require('./todo.service');
var router_1 = require('@angular/router');
var TodoListComponent = (function () {
    function TodoListComponent(router, todoService) {
        this.router = router;
        this.todoService = todoService;
    }
    TodoListComponent.prototype.gotoTodo = function () {
        this.router.navigate(['/todo', this.selectTodo.id]);
    };
    TodoListComponent.prototype.selectedTodo = function (todo) {
        this.selectTodo = todo;
    };
    TodoListComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos().then(function (todos) { return _this.todos = todos; });
    };
    TodoListComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-todo-list',
            templateUrl: 'todo-list.html',
            styleUrls: ['todo-list.css'],
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, todo_service_1.TodoService])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map