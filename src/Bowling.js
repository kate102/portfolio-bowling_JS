function Bowling() {
    this._currentFrame = [];
    this._frames = [];
}

Bowling.prototype.enterScore = function(score) {
    if ( this._currentFrame.length == 0 ){
        this._currentFrame[0] = score}
    else {
        this._currentFrame[1] = score;
        this.addCurrentFrameToGame();
    }
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
    _frameScore = this.getFrameScore(index)
    if (_frameScore == 10 ){
        _frameScore += this.addSpareScore(index)
    }
    return _frameScore;
}

Bowling.prototype.getFrameScore = function(index) {
    if (this._frames[index].length == 2 ){
        _frameScore = this._frames[index][0] + this._frames[index][1];   
    }
    else {
        _frameScore = this._frames[index][0];   
    }
    return _frameScore;
}

Bowling.prototype.addSpareScore = function(index){
    return this._frames[index+1][0]
}
