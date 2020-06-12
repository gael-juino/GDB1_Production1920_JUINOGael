class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
	}
	init(data){
    this.argent = data.argent;

  	}

	preload(){
		this.load.image('gameOver','assets/gameOver.jpg');
	}

	create(){
		this.bouton1 = this.add.image(400, 250, 'gameOver').setInteractive();
		this.bouton1.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
	    })

	    function changeLevel(){
	    this.scene.start('ecran_titre', {argent: this.argent});
	    }
	}

	update(){

	}
}