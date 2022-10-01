import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserRegistrationService } from "../shared/user-registration.service";
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { User } from "../shared/user.model";
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User

  lang:string;
  registerForm: FormGroup
  constructor(
    private route: ActivatedRoute,
    private userRegistrationService: UserRegistrationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
    ) { 
    this.registerForm = formBuilder.group({
    nameInput: ["", [Validators.required]],
    nickNameInput: ["", [Validators.required]],
    passwordInput: ["", [Validators.minLength(8), Validators.required]]
  })
}

  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") || "en";
      const idParam = localStorage.getItem("currUserId") ;
      this.user = this.userRegistrationService.getUser(idParam)
  }
  postData(form: FormGroup) {
    if (form.invalid) return alert("Task needs to be min 3 characters")
    this.userRegistrationService.updateUser(this.user.id, this.registerForm.value)
      localStorage.setItem("currUserId", this.user.id);
      localStorage.setItem("currUserNik", this.user.nickNameInput);
      localStorage.setItem("currUserPass", this.user.passwordInput);
    this.router.navigateByUrl("/todo")
    this.notificationService.show('Updated task')
  }
  changeLang(lang:any) {
    localStorage.setItem("lang", lang.value);
    window.location.reload();
  }
  deleteUser() {
    this.userRegistrationService.deleteUser(this.user.id)
    this.router.navigateByUrl("/Home")
    this.notificationService.show('task deleted')
  }
}