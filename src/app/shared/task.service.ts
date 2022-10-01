import { Injectable } from '@angular/core';
import { Task } from "./task.model";
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = []
  constructor() { 
    this.loadState()
  }
  getTasks() {
    return this.tasks
  }

  getTask(id: string) {
    return this.tasks.find(n=> n.id === id)
  }
  addTask(task: Task) {
    this.tasks.push(task)
    this.saveState()
  }

  updateTask(id: string, updatedField: Partial<Task>) {
    const task = this.getTask(id);
    Object.assign(task, updatedField)
    this.saveState()
  }

  deleteTask(id:string) {
    const taskIndex = this.tasks.findIndex(n => n.id === id);
    if (taskIndex == -1) {
      return
    }
    this.tasks.splice(taskIndex, 1);
    this.saveState()
  }
  saveState() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }
  loadState() {
    try {
      const tasksInStorage = JSON.parse(localStorage.getItem("tasks"))
      if(!tasksInStorage) return
      this.tasks= tasksInStorage
    } catch (error) {
      console.log("There was error retrieving the tasks from local storage",error);
      
    }
 
  }
}
