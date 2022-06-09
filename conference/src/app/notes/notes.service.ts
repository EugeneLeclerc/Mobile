import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CachingService } from "../services/caching.service";
import { CameraService } from "../services/camera.service";

@Injectable({
    providedIn: 'root'
})
export class NotesService {

    public notes$ = new BehaviorSubject('');

    constructor(
        @Inject(CachingService) private cachingService: CachingService,
        @Inject(CameraService) private cameraService: CameraService
    ) {
    }

    public async takePicture(sessionId: string) {
        const image = await this.cameraService.takePicture();

        return this.cachingService.getCache(sessionId)
            .then((data) => {
                data = data ?? {};
                data.images = data?.images ? data?.images.concat(image) : [image];
                this.cachingService.setCache(sessionId, data);
            });

    }

    public async getFromGallery(){
        const img = await this.cameraService.chooseFromGallery();


    }

    public async getImages(sessionId: string) {
        const data = await this.cachingService.getCache(sessionId) ?? {};

        console.log(data?.images);


        return data?.images ?? [];
    }

    public saveNotes(sessionId: string, newNotes: string) {
        return this.cachingService.getCache(sessionId)
            .then((data) => {
                const obj = data ?? {};
                obj.notes = newNotes;
                this.cachingService.setCache(sessionId, obj);
            });
    }

    public async getNotes(sessionId: string) {
        const data = await this.cachingService.getCache(sessionId) ?? {};

        return data?.notes ?? '';
    }

}