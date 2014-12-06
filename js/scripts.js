var STEPS = [];
var Player = {
    initialize: function(symbol){  // Гулец павінен ведаць, ці з’яўляецца ягоным знакам X або O
        this.symbol = symbol;
    }
};
var Space = {
    initialize: function(x, y){
        this.xCoordinate = x;
        this.yCoordinate = y;
    },
    create: function(x, y){   // Прастора павінна ведаць яе каардынаты і быць у стане быць пазначанай гульцом
        var newSpace = Object.create(Space);
        newSpace.initialize(x, y);
        newSpace.markedBy = "";
        return newSpace;
    },
    markBy: function(player){
        this.markedBy = player;
    }
};
var Board = {
    cells: [],
    winCombinations:[[[1,1],[1,2],[1,3]], [[2,1],[2,2],[2,3]], [[3,1],[3,2],[3,3]],[[1,1],[2,1],[3,1]],
                    [[1,2],[2,2],[3,2]], [[1,3],[2,3],[3,3]],[[1,1],[2,2],[3,3]], [[3,1],[2,2],[1,3]]],
    create: function(){    // Дошка павінна стварыць 9 “прастораў” з адпаведнымі каардынатамі
    var board = Object.create(Board);
        for(var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                var space = Space.create(i, j);
                board.cells.push(space);
            }
        }return board;
    },
    ifThreeCellsMarked: function(player){   // Ці знаходзяцца побач тры “прасторы” адзначаныя тым жа гульцом
        //var yes = false;
        //var count = 0;
        //
        //Board.winCombinations.forEach(function(element){
        //    element.forEach(function(el){
        //        count = 0;
        //        Board.cells.forEach(function(space){
        //            if(space == el)
        //                count++;
        //            if(count == 3)
        //                yes == true;
        //        })
        //    })
        //})
    },
    find: function(x, y){  // Дошка павінна мець магчымасць вярнуць прастору па каардынатам
        var foundCell = 0;
        for(var i = 0; i < Board.cells.length; i++){
            if(Board.cells[i].xCoordinate == x && Board.cells[i].yCoordinate == y){
                foundCell = Board.cells[x, y];
            }
        }
        return foundCell;
    }
};

var Game = {
    players: [],
    create: function(){     // Гульня павінна стварыць 2 гульцоў і дошку
        var game = Object.create(Game);
        var player1 = Object.create(Player);
        player1.initialize('X');
        var player2 = Object.create(Player);
        player2.initialize('O');
        Game.players.push(player1);
        Game.players.push(player2);
        var board = Board.create();
        return game;
    },
    nextStep: function(activePlayer){ // умець пераходзіць да наступнага кроку i ведаць, які гулец робіць яго
        if(activePlayer != Game.players[0]) return activePlayer = Game.players[0];
        if(activePlayer != Game.players[1]) return activePlayer = Game.players[1];
    }
    //theEnd: function(player){  // Мець магчымасьць сказаць ці скончана гульня.
    //    if(){
    //
    //    }
    //};
};