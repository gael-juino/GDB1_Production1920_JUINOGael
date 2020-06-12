class map extends Phaser.Scene {
    constructor() {
        super("map");
	}
	init(data){
    this.argent = data.argent;

  	}

	preload(){
		this.load.image('map','assets/map.png');
		this.load.image('niveau1','assets/niveau1.png');
		this.load.image('niveau2','assets/niveau2.png');
		this.load.image('retour','assets/retour.png');
	}

	create(){
		this.argent++;
		this.add.image(400, 200, 'map');


		this.bouton1 = this.add.image(410, 140, 'niveau1').setInteractive();
		this.bouton1.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
	    })

	    this.bouton3 = this.add.image(580, 450, 'retour').setInteractive();
		this.bouton3.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel2, [], this);
	    })

	    

	    function changeLevel(){
	    this.scene.start('transition_1', {argent: this.argent});
	    }

	    function changeLevel2(){
	    this.scene.start('ecran_titre', {argent: this.argent});
	    }
	}

	update(){
		if(this.argent == 1){
		    this.bouton2 = this.add.image(395, 200, 'niveau2').setInteractive();
			this.bouton2.on('pointerdown',() => {
		    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
		    })
	    }

	    function changeLevel(){
	    this.scene.start('transition_1', {argent: this.argent});
	    }
	}
}