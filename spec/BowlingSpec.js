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
});