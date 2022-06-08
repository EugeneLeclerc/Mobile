/* eslint-disable max-len */
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.page.html',
  styleUrls: ['./session-detail.page.scss'],
})
export class SessionDetailPage implements OnInit {

  public session: any;
  public speakerList: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(SessionService) private sessionService: SessionService,
  ) { }

  ngOnInit() {

    const sessionId = this.route.snapshot.paramMap.get('id');

    if (sessionId) {
      this.sessionService.getSessionById(sessionId)
        .then(data => {
          this.session = data;
          console.log(this.session);
        });
    }

  }

  public openNotes(id: string): void {
    this.router.navigate(['/notes', id]);
  }

}
