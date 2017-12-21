import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title= `Mr/Mrs`;
  firstname: string;
  lastname: string;
  result: string;

  ngOnInit() {
      this.firstname = `FirstName`;
      this.lastname = `LastName`;
  }

  onclick(fname, lname) {
    this.result = this.title + ` ` + fname + ` ` + lname;

  }
}
