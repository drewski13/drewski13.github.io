function moveRight(xCoord, id) {
   
    var elem = id; 
    var pos = parseInt(xCoord);
    var move = setInterval(frame, 5);
    function frame() {
        if (pos === (25 + parseInt(xCoord))) {
            Appery.storage.xCoord.set(pos);
            clearInterval(move);
            
            
        } else {
           
            pos++;
			elem.style.position = "relative";
            elem.style.left = pos + 'px'; 
        }
    }
    
}
 
 