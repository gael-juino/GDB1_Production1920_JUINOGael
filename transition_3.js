class transition_3 extends Phaser.Scene {
    constructor() {
        super("transition_3");
	}
	init(data){
    this.argent = data.argent;

  	}

	preload(){
		this.load.image('parchemin3','assets/parchemin3.png');
	}

	create(){
		this.bouton1 = this.add.image(400, 250, 'parchemin3').setInteractive();
		this.bouton1.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
	    })

	    function changeLevel(){
	    this.scene.start('micro_jeu_3');
	    }
	}

	update(){

	}
}