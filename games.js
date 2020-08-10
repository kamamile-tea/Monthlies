//ALEXIS
//Instructions: ___ just got her period and needs some feminine hygeine products! Collect the tampons and avoid the negativity to win. Use the WASD keys to move around. Have fun!

var map = '11111111111111111111111111.'+
            '1               c        1.'+
            '1    c     c       s   c 1.'+
            '1   1     1  c  1  c  1  1.'+
            '1 1     1     1     1    1.'+
            '1                        1.'+
            '1    c     c        s    1.'+
            '1 c  1  s  1  c  1  c  1 1.'+
            '1 1     1     1     1    1.'+
            '1                        1.'+
            '1    c     c    c   s c  1.'+
            '1    1   1  c  1     1   1.'+
            '1 1         1       1    1.'+
            '1                        1.'+
            '1   c        s    c   c  1.'+
            '11111111111111111111111111';      

//Sets up the game
let config = {
	type: Phaser.AUTO,
    width: 1300,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        }
    },
    scene: {
    	preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);


function preload(){
  //Loads all of the images
  this.load.image("player", "assets/player.png");
  this.load.image("platform", "assets/platform.png");
  this.load.image("coins", "assets/tampon.png");
  this.load.image("spikes", "assets/spikes.png");

  //Sets background to pastel purple
  this.cameras.main.setBackgroundColor('#f0daf5');
}

function create(){
  //Displays the player, sets gravity, and changes the camera angle
  this.spawnPlayer = (x,y)=>{
	  this.player = this.physics.add.sprite(200, 500, "player", "sprite_0");
    this.player.body.setGravityY(800);
    this.cameras.main.startFollow(this.player);
    this.player.setBounce(0.2);
    //Sets player's score to 0 and shows it on screen
    this.player.score = 0;
	  this.scoreText = this.add.text(0, 0, "Score: "+this.player.score, {
		  fill:"#000000",
		  fontSize:"20px",
		  fontFamily:"Arial Black"
	  }).setScrollFactor(0).setDepth(200);
  }
  
  //Placed before the platform so the player lands properly on top
  this.spawnPlayer();

  //Sets physics for the rest of the sprites
  this.platform = this.physics.add.staticGroup();
  this.coins = this.physics.add.group();
  this.spikes = this.physics.add.group();


  //Sets collisions between the world and the player (world < map)
  this.player.setCollideWorldBounds(false);


  //Sets the keyboard movements
  this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

  //Goes instead of the previous platform adding code
  let mapArr = map.split('.');
  let drawX = 0;
  let drawY = 0;
  mapArr.forEach(row=>{
	drawX = 0;
	for(let i = 0; i<row.length; i++){
		if(row.charAt(i)==='1'){
			this.platform.create(drawX, drawY, "platform");
		}else if(row.charAt(i)==='2'){
			if(row.charAt(i+1)==='1'){
				this.spawnPlayer(drawX-4, drawY-12);
			}else if(row.charAt(i-1)==='1'){
				this.spawnPlayer(drawX+4, drawY-12);
			}else{
				this.spawnPlayer(drawX, drawY-12);					
			}
		}else if(row.charAt(i)==='c'){
			this.coins.create(drawX, drawY+10, "coins");
      
		}else if(row.charAt(i)==='s'){
        	this.spikes.create(drawX, drawY+10, "spikes"); 
        }
		drawX+=40;
	}
	drawY+=40;
  });
  
  this.physics.add.collider(this.player,this.platform);


  

}



function update(){
  //Moves the sprite based on D, A, and W
  if (this.key_D.isDown){
    this.player.setVelocityX(400);
  }
  else if (this.key_A.isDown){
    this.player.setVelocityX(-400);
  }else{
    this.player.setVelocityX(0);
  }
  if(this.key_W.isDown && this.player.body.touching.down){
	this.player.setVelocityY(-500);
  }
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

  this.collectCoin = (player, coin)=>{
	  player.score+=1;
    this.scoreText.setText("Score: "+ this.player.score);
    coin.destroy();

  };

  //Checks for spikes
  this.physics.add.overlap(this.player, this.spikes, this.die, null, this);

  this.die = ()=>{
	  this.physics.pause();
     let deathText = this.add.text(0, 0, "YOU DIED", {
        color:"#d53636",
        fontFamily:"Arial Black",
        fontSize:"50px"
    }).setScrollFactor(0);Phaser.Display.Align.In.Center(deathText,this.add.zone(650, 250, 1300, 500));
  }

} 

