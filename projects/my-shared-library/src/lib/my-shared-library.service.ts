import { Injectable } from '@angular/core';


export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MySharedLibraryService {

  private todos: Todo[] = [];
  private nextId = 1;

  constructor() {}

  // Agregar una nueva tarea
  addTodo(title: string): Todo {
    const newTodo: Todo = { id: this.nextId++, title, completed: false };
    this.todos.push(newTodo);
    return newTodo;
  }

  // Obtener todas las tareas
  getTodos(): Todo[] {
    return this.todos;
  }

  // Marcar una tarea como completada
  toggleComplete(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  // Eliminar una tarea
  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  
  }

}