function Canvas(width, height, left, top){
    //check for canvasAnchor
    if(!document.getElementById('canvases')){
        var canvasdiv = document.createElement('div');
        canvasdiv.id = "canvases";
        canvasdiv.style.position = 'absolute';
        document.body.insertBefore(canvasdiv, document.body.firstChild || null);
    }
    
    //instantiation
    var element = document.createElement('canvas');
    //dimensions
    element.width = Math.round(width || window.innerWidth);
    element.height = Math.round(height || window.innerHeight);
    
    //insert into document before element->id 'canvasAnchor'
    document.getElementById('canvases').insertBefore(
        element, 
        document.getElementById('canvasAnchor')
    );
    
    //style
    element.style.position = 'absolute';
//    element.style.border = '2px solid white';
    
    //position
    element.left = left || 0;
    element.top = top || 0;
    
    //set ctx property to two dimensional context (graphics capability)
    element.ctx = element.getContext('2d');
    
    //custom rendering funcitons
    element.ctx.clear = function(){
        element.ctx.clearRect(0, 0, element.width, element.height);
    };
    element.ctx.fill = function(){
        element.ctx.fillRect(0, 0, element.width, element.height);
    }
    
    //returns canvas element rather than Canvas blank object
    return element;
}
var canvas = {
    loadImages : function(strgObj){
        var imageKeys = Object.keys(assets.images);
        for(var i = 0; i < imageKeys.length; i++){
            strgObj[imageKeys[i]] = {};
            var subKeys = Object.keys(assets.images[imageKeys[i]]);
            for(var j = 0; j < subKeys.length; j++){
                if(Array.isArray(assets.atlas[imageKeys[i]][subKeys[j]])){
                    strgObj[imageKeys[i]][subKeys[j]] = [];
                    var imgObjs = Object.keys(assets.atlas[imageKeys[i]][subKeys[j]]);
                    console.log(imgObjs + ' is an Array!');
                    for(var k = 0; k < imgObjs.length; k++){
                        strgObj[imageKeys[i]][subKeys[j]].push(document.createElement('canvas'));
                        strgObj[imageKeys[i]][subKeys[j]][k].width = assets.atlas[imageKeys[i]][subKeys[j]][k].width;
                        strgObj[imageKeys[i]][subKeys[j]][k].height = assets.atlas[imageKeys[i]][subKeys[j]][k].height;
                        strgObj[imageKeys[i]][subKeys[j]][k].getContext('2d').drawImage(
                            assets.images[imageKeys[i]][subKeys[j]],
                            assets.atlas[imageKeys[i]][subKeys[j]][k].x,
                            assets.atlas[imageKeys[i]][subKeys[j]][k].y,
                            assets.atlas[imageKeys[i]][subKeys[j]][k].width,
                            assets.atlas[imageKeys[i]][subKeys[j]][k].height,
                            0, 0,
                            assets.atlas[imageKeys[i]][subKeys[j]][k].width,
                            assets.atlas[imageKeys[i]][subKeys[j]][k].height
                        );
                    }
                }
                else{
                    strgObj[imageKeys[i]][subKeys[j]] = document.createElement('canvas');
                    strgObj[imageKeys[i]][subKeys[j]].width = assets.atlas[imageKeys[i]][subKeys[j]].width;
                    strgObj[imageKeys[i]][subKeys[j]].height = assets.atlas[imageKeys[i]][subKeys[j]].height;
                    strgObj[imageKeys[i]][subKeys[j]].getContext('2d').drawImage(
                        assets.images[imageKeys[i]][subKeys[j]],
                        assets.atlas[imageKeys[i]][subKeys[j]].x,
                        assets.atlas[imageKeys[i]][subKeys[j]].y,
                        assets.atlas[imageKeys[i]][subKeys[j]].width,
                        assets.atlas[imageKeys[i]][subKeys[j]].height,
                        0, 0,
                        assets.atlas[imageKeys[i]][subKeys[j]].width,
                        assets.atlas[imageKeys[i]][subKeys[j]].height);
                }
            }
        }
    }
};