interface TextDataStructure {
    menu: TextData;
}

interface TextData {
    logo: TextItem;
    playButtonText: TextItem;
    // madeBy?: TextItem; // необязательное поле
}

interface TextItem {
    text: string;
    x: number;
    y: number;
    fontSize: number;
    color: string;
    depth: number;
    visible: boolean;
}


export const textDataRU : TextDataStructure = {
    menu: {
        logo: {
            text: `ПРОМЫВАЛЬЩИК\nПОЛОВ`,
            x: 40,
            y: 47,
            fontSize: 96,
            color: '#fff',
            depth: 2,
            visible: true
        },
        playButtonText: {
            text: `ИГРАТЬ`,
            x: 556,
            y: 328,
            fontSize: 64,
            color: '#000',
            depth: 2,
            visible: true
        },
    }
}