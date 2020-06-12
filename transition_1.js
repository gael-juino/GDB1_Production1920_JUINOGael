class transition_1 extends Phaser.Scene {
    constructor() {
        super("transition_1");
	}
	init(data){
    this.argent = data.argent;
    this.niveau = data.niveau;
    this.lvl = data.lvl;

  	}

	preload(){
		
	}

	create(){
		this.bouton1 = this.add.image(400, 250, 'parchemin').setInteractive();
		this.bouton1.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
	    })

	    function changeLevel(){
	    this.scene.start('micro_jeu_1', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
	    }
	}

	update(){

	}
}