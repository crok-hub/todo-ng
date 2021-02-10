import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  _nom: string = "Eve";

  _users = [
    { name: "Jean", age: 19 },
    { name: "Dany", age: 21 },
    { name: "Arry", age: 10 },
    { name: "Sana", age: 14 },
    { name: "Adam", age: 99 }
  ]

  img = "https://specials-images.forbesimg.com/imageserve/5f285681289af0e7316b841b/960x0.jpg?fit=scale"

  message:string = "";
  nombre:number = 3.143751863896;
  pourcent:number = 0.25;
  date:any = Date.now();

  constructor() {
  }

  hello = (param?: string) => {
    param ?
      alert("" + param)
      : alert("Clock !!");
  }

  ngOnInit(): void {
  }

}
