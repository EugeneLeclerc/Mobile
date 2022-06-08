import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CachingService } from './caching.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public connected = true;

  private baseUrl = 'https://devfest-nantes-2018-api.cleverapps.io/';
  private sessionUrl = `${this.baseUrl}sessions`;
  private speakerUrl = `${this.baseUrl}speakers`;

  constructor(
    private httpClient: HttpClient,
    private cachingService: CachingService
  ) {

    this.initSessions();
  }

  public getSessions(): any {
    return this.cachingService.getCachedRequest(this.sessionUrl);
  }

  public async getSessionById(id: string): Promise<any> {
    const sessions = await this.cachingService.getCachedRequest(this.sessionUrl);

    return sessions[id];
  }

  private initSessions() {

    forkJoin([
      this.httpClient.get(this.sessionUrl),
      this.httpClient.get(this.speakerUrl)
    ])
      .pipe(map(([sessions, speakers]) => {

        const sessionList = Object.entries(sessions)
          .map((session) => session[1]);

        sessionList.map((session) => {
          const speakerList = [];
          session.speakers?.forEach(speakerId => {
            speakerList.push(speakers[speakerId]);
          });

          session.speakers = speakerList;

        });

        return sessions;
      }))
      .subscribe((data) => {
        this.cachingService.cacheRequest(this.sessionUrl, data);
      });

  }

}
