level1.player = {
    x : 10,
    y : 10,
    width : 56,
    swordWidth : 40,
    totalWidth : this.width + this.swordWidth,
    height : 128,
    
    drawX : null,
    drawY : null,
    
    speed : 5,
    jumpStrength : 15,
    
    state : 'rest',
    direction : 'right',
    jump : true,
    
    frame : 0,
    framerates : {
        rest : 12,
        walk : 20
    },
    
    keys : {
        37 : 'left',
        38 : 'jump',
        39 : 'right',
        40 : 'down',
    },
    
    options : {
        restitution : 0,
        friction : 0
    },
    velocity : Matter.Vector.create(0, 0),
    
    update : function(){
        let beginState = this.state;
        if(this.keys[io.keyUp] == this.direction) this.state = 'rest';
        if(this.keys[io.key] == 'right' || this.keys[io.key] == 'left'){
            this.direction = this.keys[io.key];
            this.state = 'walk';
        }
        if(beginState != this.state) this.frame = 0;
        
        if(this.keys[io.key] == 'jump' && !this.jump){
            this.jump = true;
            Matter.Body.setVelocity(this.physical, Matter.Vector.create(this.physical.velocity.x, -this.jumpStrength));
        }
        
        if((this.physical.velocity.y > -0.2 && this.physical.velocity.y < 0.2) || this.physical.position.y < 100) this.jump = false;
        else this.jump = true;
        
        if(this.direction == 'right') this.speed = Math.abs(this.speed);
        if(this.direction == 'left') this.speed = -Math.abs(this.speed);
        
        if(this.state == 'walk') this.velocity = Matter.Vector.create(this.speed, this.physical.velocity.y);
        else this.velocity = Matter.Vector.create(0, this.physical.velocity.y);
        
        Matter.Body.setVelocity(this.physical, this.velocity);
        Matter.Body.setAngle(this.physical, 0);
    },
    
    render : function(canvasCtx){
        canvasCtx.clear();
        if(this.direction == 'right'){
            this.drawX = this.physical.vertices[0].x;
        }
        if(this.direction == 'left'){
            this.drawX = this.physical.vertices[0].x - this.swordWidth;
        }
        this.drawY = this.physical.position.y - this.height / 2;
        canvasCtx.drawImage(images.chef[this.state + this.direction][this.frame], this.drawX, this.drawY);
        this.frame = (this.frame + 1) % images.chef[this.state + this.direction].length;
        
        if(window.scrollX < this.physical.position.x - window.innerWidth / 3 * 2) window.scrollTo(this.physical.position.x - window.innerWidth / 3 * 2, 0);
        if(window.scrollX > this.physical.position.x - window.innerWidth / 4) window.scrollTo(this.physical.position.x - window.innerWidth / 4, 0);
        
        setTimeout(function(){level1.player.render(canvasCtx)}, 1000 / this.framerates[this.state]);
    },
    
    init : function(canvasCtx){
        this.physical = Matter.Bodies.rectangle(this.x + this.width / 2, this.y + this.height / 2, this.width, this.height);
        Matter.World.add(level1.world, this.physical);
        updater = window.setInterval(function(){level1.player.update()}, 20);
        this.render(canvasCtx);
    }
};