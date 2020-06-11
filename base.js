var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: true

        }
    },

    scene: [Scene1,Scene2,Scene3]

};

var game = new Phaser.Game(config);