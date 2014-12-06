describe("Player", function() {
    describe("initialize", function() {
        it("is initialized with a symbol", function() {
            var testPlayer = Object.create(Player);
            testPlayer.initialize("X");
            testPlayer.symbol.should.equal("X");
        });
    });
});

describe("Space", function() {
    describe("initialize", function() {
        it("is initialized with an x and y coordinate", function() {
            var testSpace = Object.create(Space);
            testSpace.initialize(1, 2);
            testSpace.xCoordinate.should.equal(1);
            testSpace.yCoordinate.should.equal(2);
        });
    });

    describe("create", function() {
        it('is created space or not', function(){
            var testSpace = Space.create(2, 3);
            testSpace.xCoordinate.should.equal(2);
            testSpace.yCoordinate.should.equal(3);
        });
    });

    describe("markBy", function() {
        it("lets a player mark the space", function() {
            var testPlayer = Object.create(Player);
            testPlayer.initialize("X");
            var testSpace = Object.create(Space);
            testSpace.initialize(1, 2);
            testSpace.markBy(testPlayer);
            testSpace.markedBy.should.equal(testPlayer);
        });
    });
});

describe("Board", function() {
    describe("create", function(){
        it("creates 9 spaces when it is initialized", function(){
            var testBoard = Board.create();
            testBoard.cells.length.should.equal(9);
        });
    });

    describe("ifThreeCellsMarked", function(){
        it("return true if three near cells marked", function(){
            var testPlayer = Player.initialize('X');
            var testBoard = Board.create();


            testBoard.ifThreeCellsMarked(testPlayer).should.equal(true);
        });
    });

    describe("find", function(){
        it("return the cell to coordinate", function(){
            var testBoard = Board.create();
            testBoard.find(1, 2).should.equal(testBoard.cells[1, 2]);
        });
    });
});

describe("Game", function(){
    describe("create", function(){
        it("it initializes a game with 2 players and a board", function() {
            var testGame = Game.create();
            testGame.players.length.should.equal(2);
        });
    });
    describe("nextStep", function(){
        it("makes next step", function() {
            var testGame = Game.create();
            testGame.nextStep(Game.players[0]).should.equal(Game.players[1]);
        });
    })
});