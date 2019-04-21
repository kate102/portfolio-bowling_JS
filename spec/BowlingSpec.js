describe("The Bowling Score Card Challenge", function(){
    
    // Gutter Game
    it("Gutter Game: if no pins are dropped then the score should be 0", function() {
        game = new Bowling();
        var counter;
        for (counter = 0; counter < 10; counter++){
            game.enterScore(0);
            game.enterScore(0);
        }
        expect(game.showScore()).toEqual(0);
    });

    // One Frame
    it("One Frame: if one frame is taken then the score should be the total of the number of pins dropped", function(){
        frame = new Frame();
        frame.enterScore(2);
        frame.enterScore(3);
        expect(frame.calcTotalScore()).toEqual(5);
    })
});