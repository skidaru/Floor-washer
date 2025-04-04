
interface ButtonDataStructure {
    screens: Record<string, ButtonData>;
}

interface ButtonData {
    items: Record<string, ButtonItem>;
}

interface ButtonItem {
    x: number,
    y: number,
    texture: string,
    frame?: string,
    depth: number,
    visible: boolean,
}

export const buttonData : ButtonDataStructure = {
    screens:{
        menu: {
            items:{
                playButton: {
                    x: 502,
                    y: 300,
                    texture: 'menu',
                    frame: 'play-button.png',
                    depth: 1,
                    visible: true,
                },
                settingsButton: {
                    x: 502,
                    y: 423,
                    texture: 'menu',
                    frame: 'settings-button.png',
                    depth: 1,
                    visible: true,
                },
                linkButton: {
                    x: 764,
                    y: 423,
                    texture: 'menu',
                    frame: 'tg-button.png',
                    depth: 1,
                    visible: true,
                },
                leaderboardButton: {
                    x: 633,
                    y: 423,
                    texture: 'menu',
                    frame: 'leadb-button.png',
                    depth: 1,
                    visible: true,
                },
            }
        },
        menuSettings: {
            items:{
                button1: {
                    x: 533,
                    y: 286,
                    texture: 'menu',
                    frame: 'settings-button-button.png',
                    depth: 3,
                    visible: false,
                },
                button2: {
                    x: 533,
                    y: 374,
                    texture: 'menu',
                    frame: 'settings-button-button.png',
                    depth: 3,
                    visible: false,
                },
                button3: {
                    x: 533,
                    y: 462,
                    texture: 'menu',
                    frame: 'settings-button-button.png',
                    depth: 3,
                    visible: false,
                },
                button4: {
                    x: 533,
                    y: 550,
                    texture: 'menu',
                    frame: 'settings-button-button.png',
                    depth: 3,
                    visible: false,
                },
            }
        },
    }
}