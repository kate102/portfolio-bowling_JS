function Frame() {
    this._score1 = -1;
    this._score2 = -1;
}

Frame.prototype.enterScore = function(score){
   if (this._score1 <0 ){
       this._score1 = score;
   } else {
        this._score2 = score;
   }
}

Frame.prototype.calcTotalScore = function(){
    return this._score1 + this._score2;
}