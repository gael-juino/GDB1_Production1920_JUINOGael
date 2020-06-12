class ecran_titre extends Phaser.Scene {
    constructor() {
        super("ecran_titre");
	}
	init(data){
    this.argent = data.argent;
    this.niveau = data.niveau;
    this.lvl = data.lvl;

  	}
	preload(){
		
	}

	create(){
		this.lvl= 0;
		this.add.image(400, 250, 'ecran_titre');


		this.bouton1 = this.add.image(500, 250, 'start').setInteractive();
		this.bouton1.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
	    })

	    function changeLevel(){
	    this.scene.start('map', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
	    }
	}

	update(){
	}
}