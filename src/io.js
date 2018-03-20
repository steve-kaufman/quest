var io = {
    key : null,
    keyUp : null,
    
    detectKey : function(keyCode){
        if(this.key == keyCode) return true;
        else return false;
    }
};
document.addEventListener('keydown', function(e){if(e.keyCode == io.keyUp) io.keyUp = null;io.key = e.keyCode});
document.addEventListener('keyup', function(e){if(e.keyCode == io.key) io.key = null; io.keyUp = e.keyCode;});