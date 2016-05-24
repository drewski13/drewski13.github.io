function moveUp(yCoord, id) {
    
    var elem = id;
    var pos = parseInt(yCoord);
    var move = setInterval(frame, 5);
    
    
    function frame() {
        if (pos === (parseInt(yCoord)-25)) {
            Appery.storage.yCoord.set(pos);
            clearInterval(move);
            
            
        } else {
            
            pos--;
            elem.style.position = "relative";
            elem.style.top = pos + 'px';
        }
    }
    
    
}