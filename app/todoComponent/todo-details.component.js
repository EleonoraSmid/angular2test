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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var todo_1 = require('./todo');
var todo_service_1 = require('./todo.service');
var TodoDetailComponent = (function () {
    function TodoDetailComponent(todoService, route, location) {
        this.todoService = todoService;
        this.route = route;
        this.location = location;
    }
    TodoDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TodoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.todoService.getTodo(id)
                .then(function (todo) { return _this.todo = todo; });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_1.Todo)
    ], TodoDetailComponent.prototype, "todo", void 0);
    TodoDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-detail',
            styleUrls: ['todo-detail.css'],
            templateUrl: 'todo-detail.html',
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, router_1.ActivatedRoute, common_1.Location])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());
exports.TodoDetailComponent = TodoDetailComponent;
//# sourceMappingURL=todo-details.component.js.map