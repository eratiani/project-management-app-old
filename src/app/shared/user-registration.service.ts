import { Injectable } from '@angular/core';
import { User } from "./user.model";
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  users: User[] = []
  constructor() {
    this.loadState()
   }
  
  getUsers() {
    return this.users
  }

  getUser(id: string) {
    return this.users.find(n=> n.id === id)
  }

  addUser(user: User) {
    this.users.push(user)
    this.saveState()
  }

  updateUser(id: string, updatedField: Partial<User>) {
    const user = this.getUser(id);
    Object.assign(user, updatedField)
    this.saveState()
  }

  deleteUser(id:string) {
    const userIndex = this.users.findIndex(n => n.id === id);
    if (userIndex == -1) {
      return
    }
    this.users.splice(userIndex, 1);
    this.saveState()
  }
  saveState() {
    localStorage.setItem("registeredUsers", JSON.stringify(this.users))
  }
  loadState() {
    try {
      const usersInStorage = JSON.parse(localStorage.getItem("registeredUsers"))
      if(!usersInStorage) return
      this.users= usersInStorage
    } catch (error) {
      console.log("There was error retrieving the tasks from local storage",error);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { 
  }
}
