import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: Task[]
  currUserNick:string
 constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks()
    this.currUserNick = localStorage.getItem("currUserNik") ;
  }
}
