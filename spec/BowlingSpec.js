describe("The Bowling Score Card Challenge", function(){
    
    // Gutter Game
    it("Gutter Game: the score should be 0, if no pins are dropped then ", function() {
        game = new Bowling();
        var counter;
        for (counter = 0; counter < 10; counter++){
            game.enterScore(0);
            game.enterScore(0);
        }
        expect(game.calcTotalScore()).toEqual(0);
    });

    // One Frame
    it("One Frame: the score should be the total of the number of pins dropped, if one frame is taken", function() {
        game = new Frame();
        game.enterScore(2);
        game.enterScore(3);
        expect(game.calcTotalScore()).toEqual(5);
    })

    // Multiple Games
    it("Multiple Games: the score should be the total of the number of pins dropped, if many frames are taken", function() {
        game = new Bowling();
        var counter;
        for (counter = 0; counter < 10; counter++){
            game.enterScore(3);
            game.enterScore(2);
        }
        expect(game.calcTotalScore()).toEqual(50);
    })

    // Spare Game
    it("Spare Game: the score should be 10 plus the next try", function() {
        game = new Bowling();
        game.enterScore(5);
        game.enterScore(5);
        game.enterScore(5);
        expect(game.calcTotalScore()).toEqual(20);
    }) 
    // Strike Game
    it("Strike Game: the score should be 10 plus both the next tries", function() {
        game = new Bowling();
        game.enterScore(10);
        game.enterScore(5);
        game.enterScore(2);
        expect(game.calcTotalScore()).toEqual(24);
    }) 
});