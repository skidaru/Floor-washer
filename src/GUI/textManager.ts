import { Text } from "./text";

export class TextManager {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public createText(textData: any, textArray: Text[] ): void {
        for (const key in textData) {
            if (textData[key]?.text) {
                const element = textData[key];

                // Создаём новый текст на сцене с нужными параметрами
                const newText = new Text(
                    this.scene,
                    element.x,
                    element.y,
                    element.text,
                    'RedOctoberRough', // Задаётся шрифт (можно изменить)
                    element.fontSize,
                    element.color || '#ffffff',
                    element.depth,
                    element.visible || false // Цвет текста по умолчанию
                );

                // Добавляем созданный текст в массив textArray
                textArray.push(newText);
            }
        }
    }
}