import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SessionService } from '../services/session.service';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  public title = '';

  public notes = '';
  public imageList: [];

  private sessionId: string;

  constructor(
    @Inject(NotesService) private notesService: NotesService,
    @Inject(SessionService) private sessionService: SessionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sessionId = this.route.snapshot.paramMap.get('id');
    this.updateNotes();
    this.updateImgList(); this.updateNotes();
    this.sessionService.getSessionById(this.sessionId)
    .then(data => {
      this.title = data.title;
    });
  }

  public onSave() {
    this.notesService.saveNotes(this.sessionId, this.notes)
      .then(() => this.updateNotes());

  }

  public async onTakePicture() {
    this.notesService.takePicture(this.sessionId)
      .then(() => this.updateImgList());
  }

  public async onChooseFromGallery() {


  }

  private updateNotes() {
    this.notesService.getNotes(this.sessionId)
      .then((notes) => this.notes = notes);
  }

  private updateImgList() {
    this.notesService.getImages(this.sessionId)
      .then((img) => this.imageList = img);
  }
}
