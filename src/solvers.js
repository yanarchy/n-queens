/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var solution = [];
  var size = board.get('n');
  var count = 0;

  for(var row = 0; row < size; row++){
    for(var col = 0; col < size; col++){
      board.get(row)[col] = 1;
      count++;
      if(board.hasRowConflictAt(row) || board.hasColConflictAt(col)){
        board.get(row)[col] = 0;
        count--;
      }
    }
  }
  if(count===n){
    for(var i = 0; i<size; i++){
      solution.push(board.get(i));
    }
  }else {
    solution.push([]);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0;
  var board = new Board({n: n});
  var rooks = 0;

  var recurse = function (numOfRooks, boardInstance){
    if (numOfRooks === n){
      solutionCount++;
      return;
    }
    for(var col = 0; col < n; col++){
      boardInstance.get(numOfRooks)[col] = 1;
      if(!boardInstance.hasRowConflictAt(numOfRooks) || !boardInstance.hasColConflictAt(col)){
        recurse(numOfRooks++, boardInstance);
        boardInstance.get(numOfRooks)[col] = 0;
      } else {
        boardInstance.get(numOfRooks)[col] = 0;
      }
    return;
    }
    //recurse(numOfRooks++, boardInstance);
  }
  recurse(rooks, board);




  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solutionCount;
  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);

};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var board = new Board({n: n});
  // var solution = [];
  // var size = board.get('n');
  // var count = 0;

  // for(var row = 0; row < size; row++){
  //   for(var col = 0; col < size; col++){
  //     board.get(row)[col] = 1;
  //     count++;
  //     if(board.hasRowConflictAt(row) || board.hasColConflictAt(col) || board.hasMajorDiagonalConflictAt(col) || board.hasMinorDiagonalConflictAt(col)){
  //       board.get(row)[col] = 0;
  //       count--;
  //     }
  //   }
  // }
  // if(count===n){
  //   for(var i = 0; i<size; i++){
  //     solution.push(board.get(i));
  //   }
  // }else {
  //   solution.push([]);
  // }

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
