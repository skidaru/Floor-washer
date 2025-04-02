import { Text } from "./text";

export class TextManager {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public createText(textData: any, TextMap: Record<string, Text> ): void {
        for (const key in textData) {
            if (textData[key]?.text) {
                const element = textData[key];

                const newText = new Text(
                    this.scene,
                    element.x,
                    element.y,
                    element.text,
                    'RedOctoberRough',
                    element.fontSize,
                    element.color || '#ffffff',
                    element.depth,
                    element.visible || false
                );

                TextMap[key] = newText;
            }
        }
    }
}