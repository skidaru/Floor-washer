import { textDataRU } from "../data/textData";
import { imageData } from "../data/imageData";
import { buttonData } from "../data/ButtonData";

import { TextManager } from "../GUI/textManager";
import { ImageManager } from "../GUI/imageManager";
import { ButtonManager } from "../GUI/buttonManager";

import { Text } from "../GUI/text";
import { Image } from "../GUI/image";
import { Button } from "../GUI/button";

export class mainScene extends Phaser.Scene{
    private textManager: TextManager;
    private imageManager: ImageManager;
    private buttonManager: ButtonManager;

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

	this.textManager.createText(
		textDataRU.menu, this.texts);

	this.imageManager.createImage(
		imageData.screens.menu.items, this.images);
		
	
	this.buttonManager.createButton(
		buttonData.screens.menu.items, this.buttons);

	console.log(this.images);
          
        
  }  
}

  