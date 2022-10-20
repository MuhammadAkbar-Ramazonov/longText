
var elText = prompt("Istalgan matn kirgazing!");

console.log(elText.split(" "))

elText = elText.split(" ")
var result = elText[elText.length - 1];
for (let index = elText.length - 1; index > 0; index--) {
  var step = index - 1

  if(result.length < elText[step].length){
    result = elText[step];
  }

}

console.log(result);

