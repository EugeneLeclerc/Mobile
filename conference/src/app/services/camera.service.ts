import { Injectable } from "@angular/core";
import { Camera, CameraResultType, Photo } from "@capacitor/camera";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { Storage } from "@capacitor/storage";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CameraService {

    private imageDir = 'stored-images';

    constructor(
    ) {
        //this.images$.next()
    }

    public async takePicture() {
        const img = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        });

        return this.readAsBase64(img);
    }

    public async chooseFromGallery() {
        const image = await Camera.pickImages({});

        const imgList = [];

        // image.photos.forEach(element => {
             
        //     imgList.push(this.readAsBase64(element))
        // });

        return ;
    }


    public async readAsBase64(photo: Photo) {
        // Fetch the photo, read as a blob, then convert to base64 format
        const response = await fetch(photo.webPath!);
        const blob = await response.blob();

        return await this.convertBlobToBase64(blob) as string;
    }

    private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);
    });

}