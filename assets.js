var assets = {
    images : {
        chef : {
            walkright : new Image(),
            walkleft : new Image(),
            restright : new Image(),
            restleft : new Image()
        },
        platform : {
            top : new Image(),
            middle : new Image()
        }
    },
    atlas : {
        chef : {
            walkright : [{"name":"0","x":0,"y":0,"width":96,"height":128},{"name":"1","x":97,"y":0,"width":96,"height":128},{"name":"2","x":0,"y":129,"width":96,"height":128},{"name":"3","x":97,"y":129,"width":96,"height":128},{"name":"4","x":194,"y":0,"width":96,"height":128},{"name":"5","x":194,"y":129,"width":96,"height":128},{"name":"6","x":0,"y":258,"width":96,"height":128},{"name":"7","x":97,"y":258,"width":96,"height":128}],
            walkleft : [{"name":"0","x":0,"y":0,"width":96,"height":128},{"name":"1","x":97,"y":0,"width":96,"height":128},{"name":"2","x":0,"y":129,"width":96,"height":128},{"name":"3","x":97,"y":129,"width":96,"height":128},{"name":"4","x":194,"y":0,"width":96,"height":128},{"name":"5","x":194,"y":129,"width":96,"height":128},{"name":"6","x":0,"y":258,"width":96,"height":128},{"name":"7","x":97,"y":258,"width":96,"height":128}],
            restright : [{"name":"0","x":0,"y":0,"width":96,"height":128},{"name":"1","x":97,"y":0,"width":96,"height":128},{"name":"2","x":0,"y":129,"width":96,"height":128},{"name":"3","x":97,"y":129,"width":96,"height":128},{"name":"4","x":194,"y":0,"width":96,"height":128},{"name":"5","x":194,"y":129,"width":96,"height":128},{"name":"6","x":0,"y":258,"width":96,"height":128}],
            restleft : [{"name":"0","x":0,"y":0,"width":96,"height":128},{"name":"1","x":97,"y":0,"width":96,"height":128},{"name":"2","x":0,"y":129,"width":96,"height":128},{"name":"3","x":97,"y":129,"width":96,"height":128},{"name":"4","x":194,"y":0,"width":96,"height":128},{"name":"5","x":194,"y":129,"width":96,"height":128},{"name":"6","x":0,"y":258,"width":96,"height":128}],
            swingright : [{"name":"0","x":0,"y":0,"width":120,"height":128},{"name":"1","x":121,"y":0,"width":120,"height":128},{"name":"2","x":0,"y":129,"width":120,"height":128},{"name":"3","x":121,"y":129,"width":120,"height":128},{"name":"4","x":242,"y":0,"width":120,"height":128},{"name":"5","x":242,"y":129,"width":120,"height":128},{"name":"6","x":0,"y":258,"width":120,"height":128},{"name":"7","x":121,"y":258,"width":120,"height":128},{"name":"8","x":242,"y":258,"width":120,"height":128}],
            swingleft : [{"name":"0","x":0,"y":0,"width":120,"height":128},{"name":"1","x":121,"y":0,"width":120,"height":128},{"name":"2","x":0,"y":129,"width":120,"height":128},{"name":"3","x":121,"y":129,"width":120,"height":128},{"name":"4","x":242,"y":0,"width":120,"height":128},{"name":"5","x":242,"y":129,"width":120,"height":128},{"name":"6","x":0,"y":258,"width":120,"height":128},{"name":"7","x":121,"y":258,"width":120,"height":128},{"name":"8","x":242,"y":258,"width":120,"height":128}]
        },
        platform : {
            top : {x: 0, y : 0, width : 64, height : 64},
            middle : {x : 0, y : 0, width : 64, height : 64}
        }
    },
    init : function(){
        //load image objects
        console.log('image loading');
        var imageKeys = Object.keys(this.images);
        for(var i = 0; i < imageKeys.length; i++){
            var subKeys = Object.keys(this.images[imageKeys[i]]);
            for(var j = 0; j < subKeys.length; j++){
                this.images[imageKeys[i]][subKeys[j]].src = 'images/' + imageKeys[i] + '/' + subKeys[j] + '.png';
                console.log(this.images[imageKeys[i]][subKeys[j]].src);
            }
        }
        console.log('done image loading');
    }
};
assets.init();
console.log(assets.images);