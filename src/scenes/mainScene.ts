
import { textDataRU } from "../data/textData";
import { TextManager } from "../GUI/textManager";

export class mainScene extends Phaser.Scene{
  private textManager: TextManager | undefined;
  private texts: Text[] = []; 

  constructor(){
    super('mainScene')
  }

  preload(){

  }

  create(){
        this.textManager = new TextManager(this);

//@ts-ignore
        this.texts = this.textManager.createText(textDataRU.menu);
        this.texts.forEach((text) => {
            console.log(text);
        });
  }  
}

  