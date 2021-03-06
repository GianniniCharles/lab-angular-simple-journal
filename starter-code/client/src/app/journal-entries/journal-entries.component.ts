import { Component, OnInit } from '@angular/core';
import {JournalService} from '../services/journal.service'

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})
export class JournalEntriesComponent implements OnInit {

  entries:Array<any>;

  theNewEntry: any = {};

  constructor(private theService:JournalService) { }

addNew(){
this.theService.addNewEntry(this.theNewEntry)
.subscribe((responseThingy)=>{
  console.log('Yeah! you did it!')
  this.theNewEntry = {}
  this.getEntries();
})
}


getEntries(){
  this.theService.getEntries()
  .subscribe((res)=>{
    this.entries = res.reverse();
  })
}


  ngOnInit() {
    this.getEntries();
  }

}
