import { Component, OnInit } from "@angular/core";
import { ITodo } from "./interfaces/itodo";
import { ActivatedRoute, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  todoToggle=0;
  title = "Todos";
  ngOnInit() {}
}
