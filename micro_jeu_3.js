class Scene3 extends Phaser.Scene {
    constructor() {
    	super("micro_jeu_3");
	}

	init(data){
    this.argent = data.argent;
    this.niveau = data.niveau;
    this.lvl = data.lvl;

  	}

	preload(){
	


	}
	create(){
	//diff//
	this.diff = (2000*this.niveau);

	//saut//
	this.saut = 2;
	this.nsaut = 1;

	//fond//
	this.add.image(360,265, 'fond2');

	//cursors//
	this.cursors = this.input.keyboard.createCursorKeys();

	//sol//
	this.sol = this.physics.add.staticGroup();
	this.sol.create(400, 528, 'sol');
	this.sol.setVisible(false);

	//anims perso//
	this.samurai = this.physics.add.sprite(200,420 ,'samurai');
	this.samurai.direction = 'right';
	this.samurai.setBounce(0.02);
	this.samurai.body.setGravityY(200);
	this.samurai.setCollideWorldBounds(true);
	this.physics.add.collider(this.samurai, this.sol);
	this.samurai.setVisible(true);


			this.anims.create({
			    key: 'left',
			    frames: this.anims.generateFrameNumbers('samurai', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			this.anims.create({
			    key: 'turn',
			    frames: [ { key: 'samurai', frame: 1 } ],
			    frameRate: 20
			});

			this.anims.create({
			    key: 'right',
			    frames: this.anims.generateFrameNumbers('samurai', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			this.anims.create({
			    key: 'up',
			    frames: this.anims.generateFrameNumbers('samurai', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			this.anims.create({
			    key: 'down',
			    frames: this.anims.generateFrameNumbers('samurai', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			

	//caisse//
	this.caisse = this.physics.add.image(1050,400,'caisse');
	this.caisse.direction = 'right';
	this.physics.add.collider(this.caisse, this.sol);
	this.physics.add.collider(this.samurai, this.caisse, hitcaisse, null, this);

	//caisse2//
	this.caisse2 = this.physics.add.image(1500,400,'caisse2');
	this.caisse2.direction = 'right';
	this.physics.add.collider(this.caisse2, this.sol);
	this.physics.add.collider(this.samurai, this.caisse2, hitcaisse2, null, this);


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

        //function//
        function hitcaisse(samurai, caisse){
		this.scene.start('gameOver', {choix: this.argent, niveau: this.niveau, lvl: this.lvl});
		}

		function hitcaisse2(samurai, caisse2){
		this.scene.start('gameOver', {choix: this.argent, niveau: this.niveau, lvl: this.lvl});
		}

	}

	

	update(){
		// Deplacement du perso// 
		if(this.timeLeft == 0){
        	this.samurai.play('left', false);
        }

        else {
        	this.samurai.play('left', true);
        }
		       
        
		if(this.cursors.up.isDown && this.samurai.body.touching.down){
		this.saut = 2;
		}

		if ((this.nSaut==1) && this.saut>0 && this.cursors.up.isDown){
		this.saut --;
		this.nSaut=0;

		if (this.saut == 1) {
		this.samurai.setVelocityY(-280);

		if (this.samurai.body.velocity.y<0) {

			}
		}

		if (this.saut == 0) {
		this.samurai.setVelocityY(-280);
		if (this.samurai.body.velocity.y<0) {
		}}
		}

		if (this.cursors.up.isUp) {
		this.nSaut=1;
		}

        //caisse//
        if (this.caisse.x >= 1050) {
			this.tweens.add({
				targets: this.caisse,
				x:10,
				ease: 'Linear',
				duration: 5000-this.diff,
				repeat: -1
			});
		}

		//caisse2//
        if (this.caisse2.x >= 1500) {
			this.tweens.add({
				targets: this.caisse2,
				x:10,
				ease: 'Linear',
				duration: 5200-this.diff,
				repeat: -1
			});
		}

		if(this.timeLeft == 0){
        	

        	if (this.lvl == 0) {
			this.argent+= 100;
			this.lvl++;
			this.scene.start('map', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
			console.log(this.argent);
        	}

        	else if (this.lvl == 1) {
			this.argent+=200
			this.scene.start('map', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
			console.log(this.argent);
        	}
        }
	}
}