import { Component, OnInit, ViewChild } from "@angular/core";
import { ITodo } from "../interfaces/itodo";
import { TodoService } from "../services/todo.service";
import { MatTableModule, MatTableDataSource } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatSort } from "@angular/material/sort";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-todo-table",
  templateUrl: "./todo-table.component.html",
  styleUrls: ["./todo-table.component.css"]
})
export class TodoTableComponent implements OnInit {
  displayedColumns: string[] = ["title", "description", "status", "createdAt"];
  dataSource: MatTableDataSource<ITodo>; //
  @ViewChild(MatSort, { static: true }) sort: MatSort; //
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.todoService.todos);
    this.dataSource.sort = this.sort; //
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
