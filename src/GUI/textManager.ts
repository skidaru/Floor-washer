import { Text } from "./text"; // Импортируем ваш класс Text

export class TextManager {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    // Метод для создания текстов на основе данных
    public createText(data: any): Text[] {
        const texts: Text[] = []; // Массив для хранения созданных текстов

        // Рекурсивно обходим данные и создаем текстовые объекты
        const createTextRecursive = (obj: any, parentKey?: string) => {
            for (const key in obj) {
                const currentKey = parentKey ? `${parentKey}.${key}` : key;

                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    // Если это вложенный объект, рекурсивно продолжаем обход
                    createTextRecursive(obj[key], currentKey);
                } else if (currentKey.endsWith('text')) {
                    // Если это текстовый объект, создаем его
                    const textData = this.getTextData(data, currentKey.replace('.text', ''));
                    if (textData) {
                        const { text, x, y, fontSize } = textData;
                        const textObject = new Text(
                            this.scene,
                            x,
                            y,
                            text,
                            'RedOctoberRough', // Шрифт по умолчанию
                            fontSize, // Размер шрифта из данных
                            '#ffffff' // Цвет по умолчанию
                        );
                        texts.push(textObject); // Добавляем текст в массив
                    }
                }
            }
        };

        createTextRecursive(data);
        return texts; // Возвращаем массив созданных текстов
    }

    // Метод для получения данных текста по ключу
    private getTextData(data: any, key: string): { text: string; x: number; y: number; fontSize: number } | undefined {
        const keys = key.split('.'); // Разделяем ключ на части (например, 'menu.logo')
        let currentData = data;

        // Рекурсивно ищем данные по ключу
        for (const k of keys) {
            if (currentData[k] !== undefined) {
                currentData = currentData[k];
            } else {
                return undefined;
        }

        return currentData;
    }
}
}