import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  form: FormGroup = new FormGroup({
    todo: new FormControl('', Validators.maxLength(10))
  });
  todoList: Array<string>;
  isOverTodo: Array<boolean>;

  constructor() { }

  ngOnInit(): void {
    this.todoList = ['hello', 'hi', 'me'];
    this.isOverTodo = [false, false, false];
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.todoList.push(this.form.value.todo);
    this.isOverTodo.push(false);
    this.form.reset();
  }

  onMouseEnterLeave(index: number): void {
    this.isOverTodo[index] = !this.isOverTodo[index];
  }

  onDeleteTodo(index: number): void {
    this.todoList.splice(index, 1);
    this.isOverTodo.splice(index, 1);
  }
}
