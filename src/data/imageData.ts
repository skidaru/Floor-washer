interface ImageDataStructure {
    menu: ImageData,
}

interface ImageData {
    background: ImageItem,
    graphic1: ImageItem
}

interface ImageItem {
    x: number,
    y: number,
    texture: string,
    frame: any,
    depth: number,
}

export const imageDataRU : ImageDataStructure = {
    menu: {
        background: {
            x: 0,
            y: 0,
            texture: 'loadingScreen',
            frame: undefined,
            depth: 0
        },
        graphic1 : {
            x: 0,
            y: 0,
            texture: 'menuGraphic1',
            frame: undefined,
            depth: 1
        },
    }
}