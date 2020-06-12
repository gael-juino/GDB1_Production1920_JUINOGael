class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
	}
	init(data){
    this.argent = data.argent;
    this.niveau = data.niveau;
    this.lvl = data.lvl;
  	}

	preload(){
		
	}

	create(){
		this.add.image(400,250, 'gameOver');

		this.bouton1 = this.add.image(400, 250, 'map_bouton').setInteractive();
		this.bouton1.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
	    })

	    this.bouton2 = this.add.image(400, 350, 'ecran_titre_bouton').setInteractive();
		this.bouton2.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel2, [], this);
	    })

	    function changeLevel(){
	    this.scene.start('map', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
	    }
	    function changeLevel2(){
	    this.scene.start('ecran_titre', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
	    }
	}

	update(){

	}
}