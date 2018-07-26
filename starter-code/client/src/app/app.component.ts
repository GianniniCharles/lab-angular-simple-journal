import { Component } from '@angular/core';
import {JournalService} from './services/journal.service'
import { getComponentViewDefinitionFactory } from '../../node_modules/@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  journals: any;
  constructor(private localJournals: JournalService) {}

ngOnInit() {}


  getEntry() {
    this.localJournals.getEntry()
    .subscribe((entries)=> this.journals = entries);
  }




}
