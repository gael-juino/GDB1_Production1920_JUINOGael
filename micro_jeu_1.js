class Scene1 extends Phaser.Scene {
    constructor() {
        super("micro_jeu_1");
	}

	preload(){
	this.load.image('perso','assets/perso.png');
	this.load.image('background','assets/background.png');
	this.load.image('platforms','assets/platforms.png');
	
	}

	create(){

	this.add.image(400,300,'background');
	
	this.platforms=this.physics.add.staticImage(400,570, 'platforms');
	this.platforms.setVisible(false);
	this.cursors = this.input.keyboard.createCursorKeys();

	 // Perso 

			this.player = this.physics.add.image(200,515,'perso');
			this.player.direction = 'right';
			this.player.setBounce(0.02);
			this.player.setCollideWorldBounds(true);
			this.physics.add.collider(this.player,this.platforms,);
			this.physics.add.overlap(this.player,this.changeS);
			this.player.setVisible(true);




		// anims perso

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





	}

	update(){

	// Deplacement vaisseau 

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

	}
}