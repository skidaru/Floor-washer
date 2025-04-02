import { Button } from "./button";

export class ButtonManager {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public createButton(buttonData: any, buttonArray: Button[]): void {
        for (const key in buttonData) {
            if (buttonData[key]?.button) {
                const element = buttonData[key];

                const newButton = new Button(
                    this.scene,
                    element.x,
                    element.y,
                    element.texture,
                    element.frame,
                    element.func,
                    element.depth
                );

                buttonArray.push(newButton);
            }
        }
    }
}