class Scene2 extends Phaser.Scene {
    constructor() {
        super("micro_jeu_2");
	}

	preload(){
	this.load.image('fond','assets/background2.png');

	}

	create(){
	this.add.image(400,300,'fond');

	}
	update(){


	}

}