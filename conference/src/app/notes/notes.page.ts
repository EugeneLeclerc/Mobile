import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  public notes = '';

  constructor() { }

  ngOnInit() {
  }

  public onSave(): void{
    console.log(this.notes);
  }

}
