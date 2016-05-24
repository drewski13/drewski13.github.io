function moveLeft(xCoord, id) {
    
    var elem = id;
    var pos = parseInt(xCoord);
    var move = setInterval(frame, 5);
    
    
    function frame() {
        if (pos === (parseInt(xCoord)-25)) {
            Appery.storage.xCoord.set(pos);
            clearInterval(move);
            
            
        } else {
            
            pos--;
            elem.style.position = "relative";
            elem.style.left = pos + 'px';
        }
    }
    
    
}