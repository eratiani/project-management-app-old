import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import { TodoComponent } from './todo/todo.component';
import { AddTaskComponent } from "./add-task/add-task.component";
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EditUserComponent } from './edit-user/edit-user.component';
const routes: Routes = [
  {path: "", redirectTo: "Home", pathMatch: "full"},
{path: "Home", component:EntryPageComponent},
{path: "Home/register", component: RegisterComponent},
{path: "Home/logIn", component: LoginComponent},
{path: "todo", component: TodoComponent},
{path: "todo/add", component: AddTaskComponent},
{path: "todo/:id", component: EditTaskComponent},
{path: "Home/:id", component: EditUserComponent},
{path: "**", component: PagNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
