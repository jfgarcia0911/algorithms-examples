
let rows = 5;
let cols = 5;

// for (let i = 1; i <= rows; i++){
//     for (let j = 1; j <= i; j++){
//         document.write("*")
//     }
//     document.write("<br>");
// }

// for (let i = rows; i >= 1; i--){
//     for (let j = i; j >= 1; j--){
//         document.write("*")
//     }
//     document.write("<br>");
// }
function createPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let output = '*';
        for (let j = 0; j < rows - i - 1; j++) {
            output += ' '; // Add spaces for left alignment
        }
        // for (let k = 0; k <= i; k++) {
        //     output += '* '; // Add stars for the pyramid
        // }
        console.log(output);
    }
}

// You can change the number of rows here
const numberOfRows = 5;
createPyramid(numberOfRows);
