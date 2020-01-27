import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { CreateTodoComponent } from "./create-todo/create-todo.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationModalComponent } from "./confirmation-modal/confirmation-modal.component";
import { RouterModule, Routes } from "@angular/router";
import { BoardComponent } from "./board/board.component";
import { TodoEditComponent } from "./todo-edit/todo-edit.component";
import { TodoTableComponent } from './todo-table/todo-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material';


const routes = [];
const appRoutes = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    CreateTodoComponent,
    ConfirmationModalComponent,
    BoardComponent,
    TodoEditComponent,
    TodoTableComponent
  ],

  imports: [
    BrowserModule, 
    appRoutes, 
    FormsModule, 
    NgbModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ],

  entryComponents: [
    ConfirmationModalComponent, 
    TodoEditComponent
  ]

})

export class AppModule {}
