export class Text extends Phaser.GameObjects.Text {
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        text: string,
        fontFamily: string = 'RedOctoberRough',
        fontSize: number = 16,
        color: string = '#ffffff',
        depth: number = 0,
        visible: boolean = false
    ) {
        super(scene, x, y, text, {
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: color,
        });

        this.setOrigin(0, 0);
        
        const currentCenterX = this.x +
        this.displayWidth * (0.5 - this.originX);
      
        const currentCenterY = this.y +
        this.displayHeight * (0.5 - this.originY);

        this.setPosition(currentCenterX,
            currentCenterY);
      
        this.setOrigin(0.5, 0.5);

        this.setDepth(depth);

        this.visible = visible;

        scene.add.existing(this);
    }
    public setTextFont(fontFamily: string, fontSize: number): void {
        this.setStyle({
            fontFamily: fontFamily,
            fontSize: fontSize + 'px',
        });
    }

    public setTextColor(color: string): void {
        this.setStyle({
            color: color,
        });
    }

    public setTextPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    
}