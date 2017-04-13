import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
    .gte-5 {
      background-color: blue;
      color: white;
    }
  `]
})
export class AppComponent {
  displayDetails = false;
  list = [];

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.list.push(new Date());
  }

}
