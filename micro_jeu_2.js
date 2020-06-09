class Scene2 extends Phaser.Scene {
    constructor() {
        super("micro_jeu_2");
	}

	preload(){
	this.load.image('fond','assets/background2.png');
	this.load.image('panier','assets/panier.png');
	this.load.image('bol','assets/bol.png');
	this.load.image('timebar','assets/timebar.png');
	this.load.image('platforms','assets/platforms.png');



	}

	create(){
	this.add.image(400,300,'fond');

	//sol//
	this.platforms = this.physics.add.staticGroup();
	this.platforms.create(400, 500, 'platforms');

	//cursors//
	this.cursors = this.input.keyboard.createCursorKeys();

	//anims perso//
	this.paniette = this.physics.add.image(200,420 ,'panier');
	this.paniette.direction = 'right';
	this.paniette.setBounce(0.02);
	this.paniette.setCollideWorldBounds(true);
	this.paniette.setVisible(true);

	//score//
	this.score = 10;
	this.scoreText = this.add.text(16,150 , 'score: 10', { fontSize: '32px', fill: '#FFF' });

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
	this.dropBol = this.groupBol.create(Phaser.Math.Between(50,800),-50 ,'bol');
	}

	this.physics.add.collider(this.paniette, this.groupBol, collectBol, null, this);
	this.physics.add.collider(this.platforms, this.groupBol, solBol, null, this);

	function collectBol(paniette, bol) {
	bol.destroy(true);
	this.score -= 1;
    this.scoreText.setText('Score: ' + this.score);
    console.log("bchvh");
    }

    function solBol(platforms, bol) {
	bol.destroy(true);
	this.scene.start('micro_jeu_3');
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
        this.scene.start('micro_jeu_3');
        }

        //caisse//
	if (caisse.y <= 150) {
		this.tweens.add({
			targets: caisse,
			y:600,
		    ease: 'Linear',
		    duration: 4000,
		});
		//batt.anims.play('fly', true);
	}

	if (caisse.y >= 300) {
		this.tweens.add({
			targets: caisse,
			y:10,
			duration: 1000,
		});
	}


	}

}