export class Image extends Phaser.GameObjects.Sprite{
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: string,
        frame: string | number | undefined,
        depth: number = 0,
        visible: boolean = false,
        
    ){
        super(scene, x, y, texture, frame)

        this.setOrigin(0, 0);

        const currentCenterX = this.x +
        this.displayWidth * (0.5 - this.originX);
      
        const currentCenterY = this.y +
        this.displayHeight * (0.5 - this.originY);

        this.setPosition(currentCenterX,
            currentCenterY);
      
        this.setOrigin(0.5, 0.5);
        
        this.setDepth(depth)

        scene.add.existing(this);
    }
}