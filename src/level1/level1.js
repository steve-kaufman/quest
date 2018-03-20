var level1 = {
    init : function(){
        level = 1;
        
        var myCanvas = {
            width: 4096,
            height: 612
        };

        var canvases = {
            background : new Canvas(myCanvas.width, myCanvas.height),
            static : new Canvas(myCanvas.width, myCanvas.height),
            player : new Canvas(myCanvas.width, myCanvas.height)
        };
        
        this.engine = Matter.Engine.create();
        this.world = this.engine.world;
        Matter.Engine.run(this.engine);
            this.world.gravity.y = 2.5;

        this.player.init(canvases.player.ctx);
        
        this.platform = Matter.Bodies.rectangle(myCanvas.width / 2, window.innerHeight * 0.9, myCanvas.width, window.innerHeight * 0.2, {isStatic : true});
        Matter.World.add(this.world, this.platform);
        
        var wallwidth = 30;
        var wallheight = window.innerHeight;
        this.leftWall = Matter.Bodies.rectangle(this.platform.vertices[0].x - wallwidth / 2, window.innerHeight / 2, wallwidth, wallheight, {isStatic : true});
        this.rightWall = Matter.Bodies.rectangle(this.platform.vertices[1].x + wallwidth / 2, window.innerHeight / 2, wallwidth, wallheight, {isStatic : true});
        
        Matter.World.add(this.world, [this.leftWall, this.rightWall]);
        
        console.log(images.platform.top.width);
        
        var platformTiles = {
            x : this.platform.vertices[0].x,
            y : this.platform.vertices[0].y,
            width : Math.round(this.platform.vertices[1].x / images.platform.top.width),
            height : 3
        };

        canvases.background.ctx.fillStyle = '#99aaff';
        canvases.background.ctx.fill();
        
        //draw ground
        for(var i = 0; i < platformTiles.width * platformTiles.height; i++){
            var img = images.platform.middle;
            console.log('drawring');
            if(Math.floor(i / platformTiles.width) == 0){img = images.platform.top;}
            canvases.static.ctx.drawImage(img,
                platformTiles.x + (i % platformTiles.width) * img.width,
                platformTiles.y + Math.floor(i / platformTiles.width) * img.height);
        }
    }
}