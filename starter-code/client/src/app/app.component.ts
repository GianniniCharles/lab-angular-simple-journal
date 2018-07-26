import { Component } from '@angular/core';
import { getComponentViewDefinitionFactory } from '../../node_modules/@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  newEntry: any = {}
  journals: any;
  constructor() {}

ngOnInit() {}


 




}
