import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-child-root',
  template: '<p>{{ result }}</p>',
  styleUrls: ['./app.component.css']
})

export class ChildComponent {
    @Input() result: string;

    constructor() {}
}