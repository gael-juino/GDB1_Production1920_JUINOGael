class Scene3 extends Phaser.Scene {
    constructor() {
        super("micro_jeu_3");
	}

	preload(){
	this.load.image('fond2','assets/sanctuaire.png');
	this.load.image('timebar','assets/timebar.png');
	this.load.image('caisse','assets/caisse.png');
	this.load.image('caisse2','assets/caisse2.png');
	this.load.image('platforms','assets/platforms.png');
	this.load.image('samurai','assets/samurai.png');


	}
	create(){

	//saut//
	this.saut = 2;
	this.nsaut = 1;
	//fond//
	this.add.image(360,265, 'fond2');

	//cursors//
	this.cursors = this.input.keyboard.createCursorKeys();

	//platforms//
	this.platforms = this.physics.add.staticGroup();
	this.platforms.create(400, 528, 'platforms');
	this.platforms.setVisible(false);

	//anims perso//
	this.samurai = this.physics.add.image(200,420 ,'samurai');
	this.samurai.direction = 'right';
	this.samurai.setBounce(0.02);
	this.samurai.body.setGravityY(10);
	this.samurai.setCollideWorldBounds(true);
	this.physics.add.collider(this.samurai, this.platforms);
	this.samurai.setVisible(true);

	//caisse//
	this.caisse = this.physics.add.image(800,400,'caisse');
	this.caisse.direction = 'right';
	this.caisse.setCollideWorldBounds(true);
	this.physics.add.collider(this.caisse, this.platforms);
	this.physics.add.overlap(this.samurai, this.caisse);

	//caisse2//
	this.caisse2 = this.physics.add.image(800,400,'caisse2');
	this.caisse2.direction = 'right';
	this.caisse2.setCollideWorldBounds(true);
	this.physics.add.collider(this.caisse2, this.platforms);
	this.physics.add.overlap(this.samurai, this.caisse);


	//timebar//
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

            this.cursors = this.input.keyboard.createCursorKeys();
	}


	update(){
		// Deplacement du perso// 

		if(this.cursors.up.isDown && this.samurai.body.touching.down){
		this.saut = 2;
		}

		if ((this.nSaut==1) && this.saut>0 && this.cursors.up.isDown){
		this.saut --;
		this.nSaut=0;

		if (this.saut == 1) {
		this.samurai.setVelocityY(-250);

		if (this.samurai.body.velocity.y<0) {

			}
		}

		if (this.saut == 0) {
		this.samurai.setVelocityY(-250);
		if (this.samurai.body.velocity.y<0) {
		}}
		}

		if (this.cursors.up.isUp) {
		this.nSaut=1;
		}

        //caisse//
        if (this.caisse.x >= 800) {
			this.tweens.add({
				targets: this.caisse,
				x:10,
				ease: 'Linear',
				duration: 4000,
				repeat: -1
			});
		}

		//caisse2//
        if (this.caisse2.x >= 1000) {
			this.tweens.add({
				targets: this.caisse2,
				x:10,
				ease: 'Linear',
				duration: 4000,
				repeat: -1
			});
		}



		

	}
}