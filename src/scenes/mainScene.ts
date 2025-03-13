// import { button } from "../GUI/button";
import { Button } from "../GUI/button";
import { Image } from "../GUI/image";

export class mainScene extends Phaser.Scene{
  constructor(){
    super('mainScene')
  }
    create() {

      const tesd = this.add.text(
        93, 489,
        'Промывальщик полов на минималках',
        {fontSize: '47px', fill: '#fff',
          align: 'left', fontFamily: 'RedOctoberRough'})
        .setOrigin(0, 0)
        .setDepth(2);
    }  
}

  