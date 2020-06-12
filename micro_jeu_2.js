class Scene2 extends Phaser.Scene {
    constructor() {
        super("micro_jeu_2");
	}
	init(data){
    this.argent = data.argent;
    this.niveau = data.niveau;
    this.lvl = data.lvl;

  	}

	preload(){
	



	}

	

	create(){
	//dif//
	this.diff = (250*this.niveau);


	this.add.image(400,300,'fond');

	//sol//
	this.platforms = this.physics.add.staticGroup();
	this.platforms.create(400, 490, 'platforms');
	this.platforms.setVisible(false);

	//cursors//
	this.cursors = this.input.keyboard.createCursorKeys();

	//perso//
	this.paniette = this.physics.add.image(200,460 ,'panier');
	this.paniette.direction = 'right';
	this.paniette.setBounce(0.02);
	this.paniette.setCollideWorldBounds(true);
	this.paniette.setVisible(true);


	//timerbar//
	let gameOptions = { initialTime: 650 }
            this.timeLeft = gameOptions.initialTime;
            let timebar = this.add.sprite(0, 0, "timebar").setOrigin(0,0);

            this.energyMask = this.add.sprite(timebar.x, timebar.y, "timebar").setOrigin(0,0);

            this.energyMask.visible = false;
     
            timebar.mask = new Phaser.Display.Masks.BitmapMask(this, this.energyMask);

            this.gameTimer = this.time.addEvent({
                delay: 10,
                callback: function() {
                    this.timeLeft --;
                    let stepWidth = this.energyMask.displayWidth / gameOptions.initialTime;
                    this.energyMask.x -= stepWidth;
                },
                callbackScope: this,
                loop: true
            });
            this.gameTimer.paused = false;


	this.groupBol = this.physics.add.group();



	//spawn des objets//
	this.timer = this.time.addEvent({
    delay: 1000,
    callback: dropBol,
    //args: [],
    callbackScope: this,
    loop: true
	});

	
	function dropBol(){
	this.dropBol = this.groupBol.create(Phaser.Math.Between(50,800),-50 ,'bol').setGravityY(this.diff);
	}

	this.physics.add.collider(this.paniette, this.groupBol, collectBol, null, this);
	this.physics.add.collider(this.platforms, this.groupBol, solBol, null, this);

	function collectBol(paniette, bol) {
	bol.destroy(true);
    }

    function solBol(platforms, bol) {
	bol.destroy(true);
	this.scene.start('gameOver', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
    }
    

}
	update(){
		// Deplacement du perso// 

		if (this.cursors.left.isDown){
        this.paniette.setVelocityX(-800);
        }
        else if (this.cursors.right.isDown){
        this.paniette.setVelocityX(800);

        }
        else{
        this.paniette.setVelocityX(0);
        }
        if(this.timeLeft == 0){
        this.scene.start('transition_3', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
        }

    


	}

}