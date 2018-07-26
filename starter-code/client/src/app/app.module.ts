// This is where the routes magic happens

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JournalService } from './services/journal.service';
import { JournalEntriesComponent } from './journal-entries/journal-entries.component';
import {RouterModule, Routes, Route} from "@angular/router";
import { AboutPageComponent } from './about-page/about-page.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component'


const routes: Routes = [
  {path: '', component: JournalEntriesComponent},
  {path: 'about', component: AboutPageComponent}, //Convention is not to put a slash.
  {path: 'entries/:id', component: EntryDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    JournalEntriesComponent,
    AboutPageComponent,
    EntryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // DONT FORGET TO IMPORT THIS FOR ROUTING.
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
