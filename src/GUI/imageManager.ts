import { Image } from "./image";

export class ImageManager {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public createImage(imageData: any, imageMap: Record<string, Image>): void {
        for (const key in imageData) {
            const element = imageData[key];

            const newImage = new Image(
                this.scene,
                element.x,
                element.y,
                element.texture,
                element.frame,
                element.depth,
                element.visible
            );

            imageMap[key] = newImage;
        }
    }
}