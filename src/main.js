var images = {};

function imageLoader(){
    var last1 = Object.keys(assets.images)[Object.keys(assets.images).length - 1];
    var last2 = Object.keys(assets.images[last1])[Object.keys(assets.images[last1]).length - 1];
    console.log(last1);
    console.log(last2);
    assets.images[last1][last2].onload = function(){
        canvas.loadImages(images);
    }
}

document.body.onload = startScreen();
    
imageLoader();