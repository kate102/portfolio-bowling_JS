function Bowling() {
    this._currentFrame = [];
    this._frames = [];
    this._const_strike = 10;
}

Bowling.prototype.enterScore = function(score) {
    if ( score == 10){
        this.enterStrikeFrame();
    } else 
    if ( this._currentFrame.length == 0 ){
        this._currentFrame[0] = score}
    else {
        this._currentFrame[1] = score;
        this.addCurrentFrameToGame();
    }
}

Bowling.prototype.enterStrikeFrame = function(){
    this._currentFrame[0] = this._const_strike;
    this._currentFrame[1] = 0;
    this.addCurrentFrameToGame();
}

Bowling.prototype.addCurrentFrameToGame = function() {
    if (this._currentFrame.length == 1){
        this._currentFrame[1] = 0;
    }
    if (this._currentFrame.length != 0) {
        this._frames.push(this._currentFrame);
        this._currentFrame = [];
    }
}

Bowling.prototype.calcTotalScore = function() {
    var _totalScore = 0;
    this.addCurrentFrameToGame();
    var _frames_so_far = this._frames.length;
    for(var count = 0; count < _frames_so_far; count += 1){
        _totalScore += this.calcFrameScore(count)
    }
    return _totalScore;
}

Bowling.prototype.calcFrameScore = function(index){
    this._frameScore = this.getFrameScore(index)
    if (this._frameScore == this._const_strike ){
        if (this._frames[index][0] == this._const_strike ){      
            this._frameScore += this.addStrikeScore(index)
        } else {
            this._frameScore += this.addSpareScore(index)
        }
    }
    return this._frameScore;
}

Bowling.prototype.getFrameScore = function(index) {
    if (this._frames[index].length == 2 ){
        this._frameScore = this._frames[index][0] + this._frames[index][1];   
    }
    else {
        this._frameScore = this._frames[index][0];   
    }
    return this._frameScore;
}

Bowling.prototype.addSpareScore = function(index){
    return this._frames[index+1][0]
}

Bowling.prototype.addStrikeScore = function(index){
    var _strikeScore = 0;
    if (index < 9 ) {
        _strikeScore = this._frames[index+1][0]
        if ( _strikeScore != this._const_strike ){
            _strikeScore += this._frames[index+1][1]
        }
        else {
            _strikeScore += this._frames[index+2][0]
        }
    }
    return _strikeScore;
}
