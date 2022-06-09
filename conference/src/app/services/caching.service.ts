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

  public setCache(key: string, body: any) {
    this.storage.set(key, body);
  }

  public getCache(key: string) {
    return this.storage.get(key);
  }

  public cacheRequest(key: string, body: any) {
    this.storage.set(key, body);
  }

  public getCachedRequest(key: string) {
    return this.storage.get(key);
  }

  public async cacheImage(sessionId: string, base64: string) {
    const imgList = await this.storage.get(sessionId);
  }

  public async cacheNotes(sessionId: string, body: string) {
    const noteList = await this.storage.get(sessionId);
  }
}
