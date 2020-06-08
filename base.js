var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 00},
            debug: true

        }
    },

    scene: [Scene1]

};

var game = new Phaser.Game(config);