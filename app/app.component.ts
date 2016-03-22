import { Component } from 'angular2/core';

//The @Component() defining our annotation is called a decorator.
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Skeleton Angular2 App!</h1>
  </div>
  `
})

export class AppComponent {
//The component's class declaration holds the data and methods needed to make the template HTML functional.
}
