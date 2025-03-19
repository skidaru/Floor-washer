export class preload extends Phaser.Scene{

    constructor() {
        super('preload');
    }


    preload(){
        const font = new FontFace('MyCustomFont', 'url(/fonts/MyCustomFont.woff2)');
        font.load().then(() => {
            document.fonts.add(font);
            // Запуск игры или других действий после загрузки шрифта
        });

    }

    create(){
        window.bridge.initialize()
        .then(() => {
            window.bridge.platform.sendMessage("game_ready")
            this.scene.start('mainScene')
        })
        .catch((error: string) => {
            console.log(error);
            
        })
        
    }
}