class map extends Phaser.Scene {
    constructor() {
        super("map");
	}
	init(data){
    	this.argent = data.argent;
    	this.niveau = data.niveau;
    	this.lvl = data.lvl;

  	}

	preload(){
		
	}

	create(){
		this.lvl=0;
		this.add.image(400, 200, 'map');

		this.bouton1 = this.add.image(410, 140, 'niveau1').setInteractive();
		this.bouton1.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
	    })

	    this.bouton3 = this.add.image(580, 450, 'retour').setInteractive();
		this.bouton3.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel2, [], this);
	    })

	    this.bouton2 = this.add.image(395, 200, 'niveau2').setInteractive().setVisible(false);
			this.bouton2.on('pointerdown',() => {
			this.niveau++;
		    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
	    })

			if(this.lvl >= 1){
			this.bouton2.setVisible(true);
	    }

	    function changeLevel(){
	    this.scene.start('transition_3', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
	    }

	    function changeLevel2(){
	    this.scene.start('ecran_titre', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
	    }
	}

	update(){
		
	}
}