import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks = [
    {id:1, title:"Tâche courante", content:"Valide et dé-valide des tâche en cliquant sur une ligne", checked:true, highPriority:false},
    {id:2, title:"Supprime moi", content:"Sérieux fini au moins celle-ci...", checked:false, highPriority:false},
    {id:3, title:"Haute priorité !", content:"!!! C'est la merde !!!", checked:false, highPriority:true}
  ]

  private lastID:number = this.tasks.length;

  title:string = "";
  task:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  check = (id:number) => {
    let t = this.tasks.filter(task => task.id == id)[0];
    t.checked = !t.checked;
  }
  prioritize = (id:number) => {
    let t = this.tasks.filter(task => task.id == id)[0];
    t.highPriority = !t.highPriority;
  }

  add = () => {
    if (this.title != "" && this.task != "") {
      this.lastID++;
      this.tasks[this.tasks.length] = {id:this.lastID, title:this.title, content:this.task, checked:false, highPriority:false}
    } else {
      alert("Saisiez un titre et un contenu !");
    }
  }

  remove = (id:number) => {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}
