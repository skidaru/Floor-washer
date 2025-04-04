import { textDataRU } from "../../data/textData";
import { imageData } from "../../data/imageData";
import { buttonData } from "../../data/ButtonData";

import { TextManager } from "../textManager";
import { ImageManager } from "../imageManager";
import { ButtonManager } from "../buttonManager";

import { Text } from "../text";
import { Image } from "../image";
import { Button } from "../button";

export class MenuSettings {
    private scene: Phaser.Scene;
    private onCloseCallback?: () => void;

    constructor(scene: Phaser.Scene) {
        this.scene = scene
    }

    private textManager: TextManager;
    private imageManager: ImageManager;
    private buttonManager: ButtonManager;

    private texts: Record<string, Text> = {};
    private images: Record<string, Image> = {};
    private buttons: Record<string, Button> = {};

    public onClose(callback: () => void) {
        this.onCloseCallback = callback;
    }

    public initSettings() {
        this.textManager = new TextManager(this.scene);
        this.imageManager = new ImageManager(this.scene);
        this.buttonManager = new ButtonManager(this.scene);

        this.textManager.createText(
            textDataRU.screens.menuSettings.items, this.texts);

        this.imageManager.createImage(
            imageData.screens.menuSettings.items, this.images);
            
        this.buttonManager.createButton(
            buttonData.screens.menuSettings.items, this.buttons);

        this.buttons.button4.on('pointerup', (pointer :Phaser.Input.Pointer) => {{
                this.closeSettings();
              }

        })
    };

    public openSettings() {
        this.showAllElements();
    };

    public closeSettings() {
        this.hideAllElements();

        if (this.onCloseCallback) {
            this.onCloseCallback();
        }
    }

    private showAllElements() {
        Object.values(this.texts).forEach((text) => {
            text.visible = true;
        });
    
        Object.values(this.images).forEach((image) => {
            image.visible = true;
        });
    
        Object.values(this.buttons).forEach((button) => {
            button.visible = true;
        });
    }

    private hideAllElements() {
        Object.values(this.texts).forEach((text) => {
            text.visible = false;
        });
    
        Object.values(this.images).forEach((image) => {
            image.visible = false;
        });
    
        Object.values(this.buttons).forEach((button) => {
            button.visible = false;
        });
    }

    
}