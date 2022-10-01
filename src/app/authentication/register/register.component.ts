import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { UserRegistrationService } from "../../shared/user-registration.service";
import { Router } from '@angular/router';
import { User } from "../../shared/user.model";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  currUser: any
  lang:any;
  registerForm: FormGroup
  constructor(
    private userRegistrationService: UserRegistrationService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { 
    this.registerForm = formBuilder.group({
    nameInput: ["", [Validators.required]],
    nickNameInput: ["", [Validators.required]],
    passwordInput: ["", [Validators.minLength(8), Validators.required]]
  })
}
  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") || "en";
  }
  postData(form: any) {
    if (form.invalid) return alert("Task needs to be min 3 characters")
    const user = new User(form.nameInput, form.nickNameInput, form.passwordInput)
    localStorage.setItem("currUserNik", user.nickNameInput);
    localStorage.setItem("currUserPass", user.passwordInput);
    localStorage.setItem("currUserId", user.id);
    this.userRegistrationService.addUser(user)
    this.router.navigateByUrl("/todo")
  }
  changeLang(lang:any) {
    localStorage.setItem("lang", lang.value);
    window.location.reload();
  }
}