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
                // settingsLanguageButton: ButtonItem,
                // settingsMusicButton: ButtonItem,
                // settingsVolumeButton: ButtonItem,
                // settingsBackButton: ButtonItem,
            }
        }
    }
}