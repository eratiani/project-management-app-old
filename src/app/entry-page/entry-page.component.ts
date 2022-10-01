import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from "../shared/user-registration.service";
import { User } from "../shared/user.model";
@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {
  users: User[]
  constructor(private userRegistrationService: UserRegistrationService) { }
  ngOnInit(): void {
    this.users = this.userRegistrationService.getUsers()
  }

}
