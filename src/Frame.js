function Frame() {
    this._score1 = 0;
    this._score2 = 0;
    this._status = 'FIRST'
}

Frame.prototype.enterScore = function(score){
   if (this._status == 'FIRST' ){
       this._score1 = score;
       this._status = 'SECOND'
   } else {
        this._score2 = score;
        this._status = 'FINISHED'
   }
}

Frame.prototype.calcTotalScore = function(){
    console.log(this)
    return this._score1 + this._score2;
}

Frame.prototype.getStatus = function(){
    return this._status;
}

Frame.prototype.calcTotalSpikeScore = function(){
    console.log(this)
    return 2*this._score1 + this._score2;
}