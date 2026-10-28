console.log("external file");

// option 2 to handle event
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}


// option 3: get element by id on click
const btnMakeBlue = document.getElementById("btn-make-blue");
      // console.log(btnMakeBlue);

      btnMakeBlue.onclick = function makeBlue() {
        document.body.style.backgroundColor = "blue";
      };