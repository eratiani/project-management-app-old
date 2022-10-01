import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Task
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private notificationService: NotificationService
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get("id")
      this.task = this.taskService.getTask(idParam)
    })
  }
  onFormSubmit(form: NgForm) {
    this.taskService.updateTask(this.task.id, form.value)
    this.router.navigateByUrl("/todo")
    this.notificationService.show('Updated task')
  }
  deleteNote() {
    this.taskService.deleteTask(this.task.id)
    this.router.navigateByUrl("/todo")
    this.notificationService.show('task deleted')
  }
}
