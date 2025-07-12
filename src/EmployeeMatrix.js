/* Write your code below */
const Matrix = require("./Matrix");

class EmployeeMatrix extends Matrix {
  constructor(numRows, numColumns) {
    super(numRows, numColumns);
  }
  //Ex3
  loadData(salaryData) {
    this.matrix = salaryData.map((employee) => {
      return [
        employee._id,
        employee.name,
        employee.department,
        employee.salary,
      ];
    });
  }
  //Ex4
  getEmployees(department) {
    let arr = [];
    for (let i = 0; i < this.matrix.length; i++) {
      if (this.matrix[i][2] === department) {
        arr.push(this.matrix[i][1]);
      }
    }
    return arr;
  }
  //Ex5
  getTotalSalary(department) {
    const toReturn = this.matrix.reduce((sum, e) => {
      if (e[2] === department) {
        return sum + e[3];
      } else {
        return sum;
      }
    }, 0);
    return toReturn;
  }
  //Ex6
  findRichest() {
    let max = ["", 0];
    for (let i = 0; i < this.matrix.length; i++) {
      if (this.matrix[i][3] > max[1]) {
        max[0] = this.matrix[i][1];
        max[1] = this.matrix[i][3];
      }
    }
    return max[0];
  }
}

//Ex7
class TicTacToe extends Matrix {
  constructor(numRows, numColumns) {
    super(numRows, numColumns);
  }
  loadBoard() {
    this.matrix = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
  }
  //Ex8
  play(rowNum, columnNum, player) {
    let mark = this.matrix[columnNum][rowNum];
    if (mark === ".") {
      if (player === 1) {
        this.alter(rowNum, columnNum, "x");
        if (
          this.matrix[(rowNum + 1) % 3][columnNum] === "x" &&
          this.matrix[(rowNum - 1) % 3][columnNum] === "x"
        ) {
          console.log("Congratulations player 1");
        }
      } else {
        this.alter(rowNum, columnNum, "o");
        if (
          this.matrix[(rowNum + 1) % 3][columnNum] === "o" &&
          this.matrix[(rowNum - 1) % 3][columnNum] === "o"
        ) {
          console.log("Congratulations player 2");
        }
      }
    } else {
      console.log("Already occupied");
    }
  }
  checkWinning;
}
//You can paste the code from the lesson below to test your solution

let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
];

let m = new EmployeeMatrix();

m.loadData(data);
m.print();
/*prints
e10021  Gillian Finance 2000
e10725  Tibor   Design  1200
e10041  Anisha  Finance 2300
e10411  Jakub   Design  1600
e11995  Mar     Design  1300
e10732  Nisha   Design  1200*/
console.log(m.getEmployees("Finance")); //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")); //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
console.log(m.getTotalSalary("Finance")); //prints 4300
console.log(m.getTotalSalary("Design")); //prints 5300
console.log(m.findRichest()); //prints Anisha
let board = new TicTacToe();
board.loadBoard();
board.print();
/*prints
.       .       .
.       .       .
.       .       .*/

// board.play(2, 2, 1);
// board.play(0, 0, 2);
board.print();
/*prints 
    o       .       .
    .       .       .
    .       .       x*/
board.play(2, 2, 1);
board.play(0, 0, 2);
board.play(0, 2, 1);
board.play(1, 0, 2);
board.play(1, 2, 1); //prints Congratulations Player 1

board.print();
//prints
/*o       .       x
o       .       x
.       .       x*/
/* Do not remove the exports below */
module.exports = EmployeeMatrix;
