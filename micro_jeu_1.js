class Scene1 extends Phaser.Scene {
    constructor() {
        super("micro_jeu_1");
	}

	preload(){
	this.load.image('perso','assets/perso.png');
	this.load.image('neko','assets/neko.png')
	this.load.image('background','assets/background.png');
	this.load.image('platforms','assets/platforms.png');

	this.load.image('timebar','assets/timebar.png');
	
	}

	create(){

	this.add.image(400,300,'background');

	this.platforms = this.physics.add.staticGroup();
	this.platforms.create(400, 520, 'platforms');

	//platforms//
		this.platforms1 = this.physics.add.staticImage(400, -100, 'platforms');
		this.platforms2 = this.physics.add.staticImage(400, -100, 'platforms');
		this.platforms3 = this.physics.add.staticImage(400, -100, 'platforms');
		this.platforms4 = this.physics.add.staticImage(400, -100, 'platforms');

		//objet//
			//neko1//
			this.neko1 = this.physics.add.group();
			this.neko1.create(10, -190, 'neko');
			this.neko1.create(90, -190, 'neko');
			this.neko1.create(170, -190, 'neko');
			this.neko1.create(230, -190, 'neko');
			this.neko1.create(310, -190, 'neko');
			this.neko1.create(390, -190, 'neko');
			this.neko1.create(470, -190, 'neko');
			this.neko1.create(750, -190, 'neko');
			//neko2//
			this.neko2 = this.physics.add.group();
			this.neko2.create(240, -190, 'neko');
			this.neko2.create(320, -190, 'neko');
			this.neko2.create(400, -190, 'neko');
			this.neko2.create(480, -190, 'neko');
			this.neko2.create(560, -190, 'neko');
			this.neko2.create(640, -190, 'neko');
			this.neko2.create(720, -190, 'neko');
			this.neko2.create(800, -190, 'neko');
			//neko3//
			this.neko3 = this.physics.add.group();
			this.neko3.create(10, -190, 'neko');
			this.neko3.create(90, -190, 'neko');
			this.neko3.create(170, -190, 'neko');
			this.neko3.create(250, -190, 'neko');
			this.neko3.create(530, -190, 'neko');
			this.neko3.create(610, -190, 'neko');
			this.neko3.create(690, -190, 'neko');
			this.neko3.create(760, -190, 'neko');
			//neko4//
			this.neko4 = this.physics.add.group();
			this.neko4.create(780, -190, 'neko');
			this.neko4.create(700, -190, 'neko');
			this.neko4.create(620, -190, 'neko');
			this.neko4.create(540, -190, 'neko');
			this.neko4.create(460, -190, 'neko');
			this.neko4.create(380, -190, 'neko');
			this.neko4.create(300, -190, 'neko');
			this.neko4.create(0, -190, 'neko');


			this.physics.add.collider(this.neko1,this.platforms1);
			this.physics.add.collider(this.neko2,this.platforms2);
			this.physics.add.collider(this.neko3,this.platforms3);
			this.physics.add.collider(this.neko4,this.platforms4);
	//Timer
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
	
	

	//cursors//
	this.cursors = this.input.keyboard.createCursorKeys();


	 // Perso//

			this.player = this.physics.add.image(200,420 ,'perso');
			this.player.direction = 'right';
			this.player.setBounce(0.02);
			this.player.setCollideWorldBounds(true);
			this.physics.add.collider(this.player,this.platforms);
			this.physics.add.collider(this.player,this.neko1, hitNeko1, null, this);
			this.physics.add.collider(this.player,this.neko2, hitNeko2, null, this);
			this.physics.add.collider(this.player,this.neko3, hitNeko3, null, this);
			this.physics.add.collider(this.player,this.neko4, hitNeko4, null, this);
			this.physics.add.overlap(this.player,this.changeS);
			this.player.setVisible(true);

		// anims perso//

			this.anims.create({
			    key: 'left',
			    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			this.anims.create({
			    key: 'turn',
			    frames: [ { key: 'perso', frame: 1 } ],
			    frameRate: 20
			});

			this.anims.create({
			    key: 'right',
			    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			this.anims.create({
			    key: 'up',
			    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			this.anims.create({
			    key: 'down',
			    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});
		//hitNeko//
		function hitNeko1(player,neko1){
		this.scene.start('micro_jeu_2');

		}
		function hitNeko2(player,neko2){
		this.scene.start('micro_jeu_2');

		}
		function hitNeko3(player,neko3){
		this.scene.start('micro_jeu_2');

		}
		function hitNeko4(player,neko4){
		this.scene.start('micro_jeu_2');

		}
	}

	update(){

	// Deplacement du perso// 

		if (this.cursors.left.isDown){
           this.player.setVelocityX(-800);
           this.player.setFlipX(true);

           //this.player.anims.play('left', true);

           //this.player.direction = 'left';
        }
        else if (this.cursors.right.isDown){
            this.player.setVelocityX(800);
            this.player.setFlipX(true);

            //this.player.anims.play('right', true);
            //this.player.direction = 'right';
        }
        else{
            this.player.setVelocityX(0);
            this.player.setFlipX(true);

            //this.player.anims.play('turn');
        }
        //timer//
        if(this.timeLeft == 550){
        this.platforms1.destroy(true);
        }
        if(this.timeLeft == 450){
        this.platforms2.destroy(true);
        }
        if(this.timeLeft == 350){
        this. platforms3.destroy(true);
        }
        if(this.timeLeft == 250){
        this. platforms4.destroy(true);
        }
        if(this.timeLeft == 0){
        this.scene.start('micro_jeu_2');
        }
        
	}
}