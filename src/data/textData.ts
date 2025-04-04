

interface TextDataStructure {
    screens: Record<string, TextData>;
}

interface TextData {
    items: Record<string, TextItem>;
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
    screens: {    
        menu: {
            items: {
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
        },
        menuSettings: {
            items: {
                settingsBannerText: {
                    text: `настройки`,
                    x: 494,
                    y: 93,
                    fontSize: 64,
                    color: '#000',
                    depth: 4,
                    visible: false
                },
                settingsLanguageButtonText: {
                    text: `язык`,
                    x: 627,
                    y: 298,
                    fontSize: 40,
                    color: '#000',
                    depth: 5,
                    visible: false
                },
                settingsMusicButtonText: {
                    text: `музыка`,
                    x: 598,
                    y: 387,
                    fontSize: 40,
                    color: '#000',
                    depth: 5,
                    visible: false
                },
                settingsSoundButtonText: {
                    text: `звуки`,
                    x: 617,
                    y: 475,
                    fontSize: 40,
                    color: '#000',
                    depth: 5,
                    visible: false
                },
                settingsBackButtonText: {
                    text: `назад`,
                    x: 620,
                    y: 562,
                    fontSize: 40,
                    color: '#000',
                    depth: 5,
                    visible: false
                },
            }
        }
    }
}