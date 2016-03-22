import { Component } from 'angular2/core';

//The @Component() defining our annotation is called a decorator.
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Skeleton Angular2 App!</h1>
    <div *ngFor="#task of tasks" (click)="taskWasSelected(task)">
      <h3>{{ task.description }}</h3>
    </div>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[];
  // Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung-Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
//The component's class declaration holds the data and methods needed to make the template HTML functional.
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask);
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}
