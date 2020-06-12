class load extends Phaser.Scene {
    constructor() {
        super("loading");
	}

	init(data) {
    	this.argent = data.argent;
    	this.niveau = data.niveau;
    	this.lvl = data.lvl;

  	}

	preload(){
		this.load.image('ecran_titre','assets/ecran_titre.png');
		this.load.image('start','assets/start.png');

		this.load.image('map','assets/map.png');
		this.load.image('niveau1','assets/niveau1.png');
		this.load.image('niveau2','assets/niveau2.png');
		this.load.image('retour','assets/retour.png');

		this.load.image('parchemin','assets/parchemin.png');

		this.load.spritesheet('perso','assets/perso.png', {frameWidth: 97.5, frameHeight: 99});
		this.load.image('neko','assets/neko.png')
		this.load.image('background','assets/background.png');
		this.load.image('platforms','assets/platforms.png');

		this.load.image('parchemin2','assets/parchemin2.png');
		this.load.image('timebar','assets/timebar.png');
		this.load.image('fond','assets/background2.png');
		this.load.image('panier','assets/panier.png');
		this.load.image('bol','assets/bol.png');
		this.load.image('timebar','assets/timebar.png');
		this.load.image('platforms','assets/platforms.png');

		this.load.image('parchemin3','assets/parchemin3.png');

		this.load.image('fond2','assets/sanctuaire.png');
		this.load.image('timebar','assets/timebar.png');
		this.load.image('caisse','assets/caisse.png');
		this.load.image('caisse2','assets/caisse2.png');
		this.load.image('sol','assets/sol.png');
		this.load.spritesheet('samurai','assets/perso.png', {frameWidth: 97.5, frameHeight: 99});

		this.load.image('gameOver','assets/gameOver.png');
		this.load.image('map_bouton','assets/map_bouton.png');
		this.load.image('ecran_titre_bouton','assets/ecran_titre_bouton.png');
	}

	create(){
		this.argent=0;
		this.niveau=0;
	}

	update(){
		this.scene.start('ecran_titre', {argent: this.argent, niveau: this.niveau, lvl: this.lvl});
	}
}