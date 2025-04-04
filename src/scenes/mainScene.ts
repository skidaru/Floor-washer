import { textDataRU } from "../data/textData";
import { imageData } from "../data/imageData";
import { buttonData } from "../data/ButtonData";

import { TextManager } from "../GUI/textManager";
import { ImageManager } from "../GUI/imageManager";
import { ButtonManager } from "../GUI/buttonManager";

import { Text } from "../GUI/text";
import { Image } from "../GUI/image";
import { Button } from "../GUI/button";

import { MenuSettings } from "../GUI/menu/settings";

export class mainScene extends Phaser.Scene{
    private textManager: TextManager;
    private imageManager: ImageManager;
    private buttonManager: ButtonManager;
	private menuSettings: MenuSettings;

    private texts: Record<string, Text> = {};
    private images: Record<string, Image> = {};
    private buttons: Record<string, Button> = {};
    
    constructor(){
        super('mainScene')
    }

    create(){
		this.textManager = new TextManager(this);
		this.imageManager = new ImageManager(this);
		this.buttonManager = new ButtonManager(this);

		this.menuSettings = new MenuSettings(this);

		this.textManager.createText(
			textDataRU.screens.menu.items, this.texts);

		this.imageManager.createImage(
			imageData.screens.menu.items, this.images);
			
		this.buttonManager.createButton(
			buttonData.screens.menu.items, this.buttons);

		this.buttons.settingsButton.on('pointerup', (pointer :Phaser.Input.Pointer) => {{
				this.OpenMenu();
			}
	    })
		
		this.menuSettings.initSettings();

		this.menuSettings.onClose(() => {
			this.showMainMenu();
		});

		
 	}

	private OpenMenu(){
		this.buttons.playButton.visible = false;

		this.buttons.settingsButton.visible = false;

		this.buttons.linkButton.visible = false;

		this.buttons.leaderboardButton.visible = false;

		this.texts.logo.visible = false;

		this.menuSettings.openSettings();
  	}

	  private showMainMenu(){
		this.buttons.playButton.visible = true;

		this.buttons.settingsButton.visible = true;

		this.buttons.linkButton.visible = true;

		this.buttons.leaderboardButton.visible = true;

		this.texts.logo.visible = true;
	}
}

  