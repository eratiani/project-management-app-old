import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './body/body.component';
import { AuthenticationModule } from "./authentication/authentication.module";
import { EntryPageComponent } from './entry-page/entry-page.component';
import { TodoComponent } from './todo/todo.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule }   from '@angular/forms';
import { TaskCardComponent } from './task-card/task-card.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from "@angular/forms";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    EntryPageComponent,
    TodoComponent,
    AddTaskComponent,
    TaskCardComponent,
    EditTaskComponent,
    UserMenuComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  AuthenticationModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
