var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 100},
            debug: true

        }
    },

    scene: [Scene3]

};

var game = new Phaser.Game(config);