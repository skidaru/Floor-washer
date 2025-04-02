import { textDataRU } from "../data/textData";
import { imageDataRU } from "../data/imageData";
import { buttonDataRU } from "../data/ButtonData";

import { TextManager } from "../GUI/textManager";
import { ImageManager } from "../GUI/imageManager";
import { ButtonManager } from "../GUI/buttonManager";

import { Text } from "../GUI/text";
import { Image } from "../GUI/image";
import { Button } from "../GUI/button";

export class mainScene extends Phaser.Scene{
  private textManager: TextManager | undefined;
  private imageManager: ImageManager | undefined;
  private buttonManager: ButtonManager | undefined;

  private texts: Record<string, Text> = {};
  private images: Record<string, Image> = {};
  private buttons: Record<string, Button> = {};
  
  constructor(){
    super('mainScene')
  }

  create(){
        this.textManager = new TextManager(this);
        this.buttonManager = new ButtonManager(this);
        this.imageManager = new ImageManager(this);
  
        this.textManager.createText(
          textDataRU.menu, this.texts);

        this.imageManager.createImage(
          imageDataRU.menu, this.images);
        
        this.buttonManager.createButton(
          buttonDataRU.menu, this.buttons);

        console.log(this.buttons);
          
        
  }  
}

  