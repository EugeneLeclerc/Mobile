import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.page.html',
  styleUrls: ['./session-list.page.scss'],
})
export class SessionListPage implements OnInit {

  public sessionList$: Observable<any[]>;

  constructor(
    @Inject(SessionService) private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sessionList$ = this.sessionService.getSessions();
  }

  public onDetail(id: string): void{
    this.router.navigate(['/session-detail', id]);
    console.log(id);
  }

}
