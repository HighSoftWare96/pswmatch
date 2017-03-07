import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey there!';
  name = 'Giovanni';
  surname = 'Bertoncelli';
  notMatches = false;
  errors = false;

  checkPSW(value1: string, value2: string){
    console.log("Inserted something!");
    if(!value1.match(value2) && this.notMatches == false){
      this.notMatches = true;
      this.errors = true;
    }
    else {
      this.notMatches = false;
      //non ci sono problemi
      this.errors = false;
    }
  }
}
