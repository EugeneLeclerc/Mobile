import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CachingService } from './caching.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public connected = true;

  private baseUrl = 'https://devfest-nantes-2018-api.cleverapps.io/';

  constructor(
    private httpClient: HttpClient,
    private cachingService: CachingService
  ) {
  }

  public getSessions(): Observable<any> {

    return this.httpClient.get(this.baseUrl + 'sessions')
      .pipe(
        map((data) => {
          const sessionMap = new Map<string, any>();

          Object.entries(data)
            .forEach(((entry) => {
              sessionMap.set(entry[0], entry[1]);
            }));

          return sessionMap;
        })
      );
  }

}
