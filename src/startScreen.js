function startScreen(){    
    var canvases = {
        flyers : new Canvas(window.innerWidth, window.innerHeight),
    };
    document.getElementById('canvases').style.position = 'absolute';
    document.getElementById('canvases').top = 0;
    
    function Flyer(x, y, width, height, speed){
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 100;
        this.height = height || 20;
        this.speed = speed || 5;
    }
    
    var flyers = [
        new Flyer(0, window.innerHeight / 4),
        new Flyer(window.innerWidth / 2, window.innerHeight / 4),
        new Flyer(window.innerWidth / 4, window.innerHeight / 4),
        new Flyer(window.innerWidth / 2, window.innerHeight / 4 * 3),
        new Flyer(0, window.innerHeight / 4 * 3),
        new Flyer(window.innerWidth / 4 * 3, window.innerHeight / 4 * 3)
    ];
    
    level = 0;
    var subtitle = document.getElementById('subtitle');
    var yellow = false;
    var switchColor = setInterval(function(){
        yellow = !yellow;
        if(yellow) subtitle.style.color = 'yellow';
        else subtitle.style.color = 'blue';
    }, 750);
    
    document.addEventListener('keyup', function(e){
        if(e.keyCode == 13 && level == 0){
            dom.removeAll();
            level1.init();
        }
    });
    
    var flyerInterval = window.setInterval(animateFlyers, 20);
    
    canvases.flyers.ctx.fillStyle = 'white';
    
    function animateFlyers(){
        canvases.flyers.ctx.clear();
        for(var i = 0; i < flyers.length; i++){
            flyers[i].x += flyers[i].speed;
            if(flyers[i].x > canvases.flyers.width) flyers[i].x = -flyers[i].width;
            canvases.flyers.ctx.fillRect(flyers[i].x, flyers[i].y, flyers[i].width, flyers[i].height);
        }
    }
}