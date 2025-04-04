interface ImageDataStructure {
    screens: Record<string, ImageData>;
}

interface ImageData {
    items: Record<string, ImageItem>;
}

interface ImageItem {
    x: number,
    y: number,
    texture: string,
    frame?: string,
    depth: number,
    visible: boolean,
}

export const imageData: ImageDataStructure = {
    screens: {
        menu: {
            items: {
                background: {
                    x: 0,
                    y: 0,
                    texture: 'loadingScreen',
                    depth: 0,
                    visible: true
                },
                graphic1: {
                    x: 0,
                    y: 0,
                    texture: 'menuGraphic1',
                    depth: 1,
                    visible: true
                }
            }
        },
        menuSettings: {
            items: {
                background: {
                    x: 0,
                    y: 0,
                    texture: 'loadingScreen',
                    depth: 0,
                    visible: true
                },
            }
        }
    }
};