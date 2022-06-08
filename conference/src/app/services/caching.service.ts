import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class CachingService {

  constructor(private storage: Storage) { }

  public async initStorage() {
    await this.storage.create();
  }

  public cacheRequest(key: string, body: any) {
    this.storage.set(key, body);
  }

  public getCachedRequest(key: string) {
    return this.storage.get(key);
  }

}
