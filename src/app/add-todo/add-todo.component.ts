import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoes = [];
  currentTodo: string;
  constructor() { }

  ngOnInit() {
  }

  handleTodo(event) {
    console.log(event.target.value);
    this.currentTodo = event.target.value;
  }
  addTodo(e) {
    if (e.value === '') {
      alert('Add a todo');
    } else {
      this.todoes.push(this.currentTodo);
      e.value = '';
    }
  }
  deleteTodo(e) {
    let currentTodo = e.path[2].children[0].innerText;
    let index = this.todoes.indexOf(currentTodo);
    this.todoes.splice(index, 1);
  }
}
