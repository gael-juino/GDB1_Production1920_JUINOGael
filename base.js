var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 100},
            debug: false

        }
    },

    scene: [ load, ecran_titre, map, transition_1, Scene1, transition_2, Scene2, transition_3, Scene3, gameOver]

};

var game = new Phaser.Game(config);