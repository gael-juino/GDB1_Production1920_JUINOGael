class Scene3 extends Phaser.Scene {
    constructor() {
        super("micro_jeu_3");
	}

	preload(){
	this.load.image('fond2','assets/sanctuaire.png');
	this.load.image('timebar','assets/timebar.png');
	this.load.image('caisse','assets/caisse.png');

	}
	create(){
	//fond//
	this.add.image(360,265, 'fond2');

	//cursors//
	this.cursors = this.input.keyboard.createCursorKeys();
	
	//caisse//
	this.caisse = this.physics.add.image(200,420 ,'caisse');
	this.paniette.direction = 'right';
	caisse.setCollideWorldBounds(true);
	caisse.body.setGravityY(-300);
	this.physics.add.collider(caisse, platforms);
	this.physics.add.overlap(player, caisse, hitsam, null, this);


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
        this.scene.start('micro_jeu_3');
        }

	}
}