import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  showValidationErrors: boolean
  constructor(
    private taskService: TaskService,
    private router: Router,
    private NotificationService: NotificationService
    ) { }
  ngOnInit(): void {
  }
  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert("Task needs to be min 3 characters")
    const task = new Task(form.value.title, form.value.content)
    this.taskService.addTask(task)
    this.router.navigateByUrl("/todo")
    this.NotificationService.show('Created Note')
   }

}