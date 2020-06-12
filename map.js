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
	}

	create(){
		this.add.image(400, 200, 'map');


		this.bouton1 = this.add.image(520, 150, 'niveau1').setInteractive();
		this.bouton1.on('pointerdown',() => {
	    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
	    })

	    

	    function changeLevel(){
	    this.scene.start('transition_1');
	    }
	}

	update(){
		if(this.argent == 1){
		    this.bouton2 = this.add.image(480, 200, 'niveau2').setInteractive();
			this.bouton2.on('pointerdown',() => {
		    this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
		    })
	    }
	    
	    function changeLevel(){
	    this.scene.start('transition_1');
	    }
	}
}