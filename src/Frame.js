function Frame() {
 _score1 = -1;
 _score2 = -1;
}

Frame.prototype.enterScore = function(score){
   if (_score1 <0 ){
        _score1 = score;
   } else {
        _score2 = score;
   }
}

Frame.prototype.calcTotalScore = function(){
    return _score1 + _score2;
}