import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SanitizerPipe } from '../pipes/sanitizer.pipe';
import { NotesPageRoutingModule } from './notes-routing.module';
import { NotesPage } from './notes.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesPageRoutingModule
  ],
  declarations: [NotesPage, SanitizerPipe]
})
export class NotesPageModule {}
