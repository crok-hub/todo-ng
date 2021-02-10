import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks = [
    {id:1, task:"Ajoute/Supprime/Valide des tâches", checked:true},
    {id:2, task:"Sérieux fini au moins celle-ci...", checked:false}
  ]

  private lastID:number = this.tasks.length;

  task:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  check = (id:number) => {
    let t = this.tasks.filter(task => task.id == id)[0];
    t.checked = !t.checked;
  }

  add = () => {
    this.lastID++;
    this.tasks[this.tasks.length] = {id:this.lastID, task:this.task, checked:false}
  }

  remove = (id:number) => {
    const index: number = this.tasks.indexOf(this.tasks.filter(task => task.id == id)[0]);
    if (index !== -1) {
        this.tasks.splice(index, 1);
    } 
  }

}
