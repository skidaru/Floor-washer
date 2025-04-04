export class preload extends Phaser.Scene{

    constructor() {
        super('preload');
    }


    preload(){
        this.load.image(
            'loadingScreen',
            'assets/menu-background.jpg'
        );
        this.load.image(
            'menuGraphic1',
            'assets/menu-background-figure.png'
        );
        this.load.atlas(
            'menu',
            'assets/menu-atlas.png',
            'assets/menu-atlas.json');
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