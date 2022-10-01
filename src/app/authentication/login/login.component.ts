import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { User } from 'src/app/shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users: any = JSON.parse(localStorage.getItem("registeredUsers"));


 
  lang:any;
  logInForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    ) {
    this.logInForm = formBuilder.group({
      nickNameInput: ["", [Validators.required]],
      passwordInput: ["", [Validators.minLength(8), Validators.required]]
    })
   }
  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") || "en";
  }
  postData() {
    if(this.users.length === 0)  {
      return alert("register new account")
    } else {
      this.users.find((el:User, index:number, array: User)=> { 
        if(el.nickNameInput === this.logInForm.value.nickNameInput) {
          if(el.passwordInput === this.logInForm.value.passwordInput) {
            localStorage.setItem("currUserId", el.id);
            localStorage.setItem("currUserNik", el.nickNameInput);
            localStorage.setItem("currUserPass", el.passwordInput);
            this.router.navigateByUrl("/todo");
          }  else {
            alert("wrong username or password")
          }
        } else {
          alert("wrong username or password")
        }
      })
    }
  }
  changeLang(lang:any) {
    localStorage.setItem("lang", lang.value);
    window.location.reload();
  }
}