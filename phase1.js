



// Configure the game
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'container_game',
    fullscreenTarget: 'container_game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Create the game
var game = new Phaser.Game(config);


// Define the "scene"...
function preload ()
{
    // backgrounds
    this.load.image('field_calm', 'assets/backgrounds/field_calm.jpg');
    this.load.image('field_blazed', 'assets/backgrounds/field_blazed.jpg');

    // unicorn
    //*/
}

function create ()
{
    this.add.image(400, 300, 'field_calm');
    //this.add.image(0, 0, 'unicorn', 0);
}

function update ()
{
}
