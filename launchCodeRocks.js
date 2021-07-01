let number = 7;

let divisibleArray = [2,3,5,7];

function divisible(num){
  return number % num;
}

let newArray = divisibleArray.map(divisible);

// function launchOutput(arr){
//   if (arr[0] === 0 && (arr[1] !== 0 &&arr[2] !== 0 && arr[3] !== 0)){
//     return "Launch!"
//   }

//   if (arr[1] === 0 && (arr[0] !== 0 && arr[2] !== 0 && arr[3] !== 0)){
//     return "Code!"
//   }

//   if (arr[2] === 0 && (arr[0] !== 0 &&arr[1] !== 0 && arr[3] !== 0)){
//     return "Rocks!"
//   }  

//   if ((arr[0] === 0 && arr[1] === 0) && (arr[2] !== 0 && arr[3] !== 0)){
//     return "LaunchCode!"
//   }

//   if ((arr[1] === 0 && arr[2] === 0) && (arr[0] !== 0 && arr[3] !== 0)){
//     return "Code Rocks!"
//   }

//   if ((arr[0] === 0 && arr[2] === 0) && (arr[1] !== 0 && arr[3] !== 0)){
//     return "Launch Rocks! (CRASH!!!!)"
//   }  

//     if (arr[0] === 0 && arr[1] === 0 && arr[2] === 0){
//     return "LaunchCode Rocks!"
//   } 

// return "Rutabagas! That doesn't work."

// }
//console.log(launchOutput(newArray))

let divNumberObject = {};

for (i=0; i < newArray.length; i++) {
  divNumberObject[divisibleArray[i]] = newArray[i]
}

function launchOutput(obj){
  let out = "";
  if (obj["2"] === 0){
    out += "Launch";
  }  

  if (obj["3"] === 0){
  out += "Code";  
  }
  
  if (obj["5"] === 0){
  out += " Rocks";  
  }

  if (out === ""){
  return "Rutabagas! That doesn't work."
  } else if (out === "Launch Rocks"){
    return out + "! (CRASH!!!!)"
  } else {
    return out.trim() +"!"
  }
}
//console.log(divNumberObject)
//console.log(newLaunchOutput(divNumberObject))

module.exports = launchOutput;