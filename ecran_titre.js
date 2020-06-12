class ecran_titre extends Phaser.Scene {
    constructor() {
        super("ecran_titre");
	}
	init(data){
    this.argent = data.argent;

  	}
	preload(){
		this.load.image('ecran_titre','assets/ecran_titre.png');
		this.load.image('start','assets/start.png');
	}

	create(){
		this.argent = 0;
		this.add.image(400, 250, 'ecran_titre');


		this.bouton1 = this.add.image(220, 250, 'start').setInteractive();
		this.bouton1.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
	    })

	    function changeLevel(){
	    this.scene.start('map', {argent: this.argent});
	    }
	}

	update(){
	}
}