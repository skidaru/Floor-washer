import { Button } from "./button";

export class ButtonManager {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public createButton(buttonData: any, buttonMap: Record<string, Button>): void {
        for (const key in buttonData) {
                const element = buttonData[key];

                const newButton = new Button(
                    this.scene,
                    element.x,
                    element.y,
                    element.texture,
                    element.frame,
                    element.depth,
                    element.visible,
                );

                buttonMap[key] = newButton;
        }
    }
}

