import { Image } from "./image";

export class Button extends Image{
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: string,
        frame?: string,
        depth: number = 0,
        visible: boolean = false,
    ){
        super(scene, x, y, texture, frame, depth, visible)

        this.setInteractive({ useHandCursor: true })

        this.on('pointerdown', () => {
            this.setScale(0.97);
        });
      
        this.on('pointerup', () => {
            this.setScale(1);
        });

        this.on('pointerout', () => {
            this.setScale(1);
        });

        scene.add.existing(this);
          
    }
}


