let number = 6;

let divisibleArray = [2,3,5,7];

function divisible(num){
  return number % num;
}

let newArray = divisibleArray.map(divisible);

function launchOutput(arr){
  if (arr[0] === 0 && (arr[1] !== 0 &&arr[2] !== 0 && arr[3] !== 0)){
    return "Launch!"
  }

  if (arr[1] === 0 && (arr[0] !== 0 && arr[2] !== 0 && arr[3] !== 0)){
    return "Code!"
  }

  if (arr[2] === 0 && (arr[0] !== 0 &&arr[1] !== 0 && arr[3] !== 0)){
    return "Rocks!"
  }  

  if ((arr[0] === 0 && arr[1] === 0) && (arr[2] !== 0 && arr[3] !== 0)){
    return "LaunchCode!"
  }

  if ((arr[1] === 0 && arr[2] === 0) && (arr[0] !== 0 && arr[3] !== 0)){
    return "Code Rocks!"
  }

  if ((arr[0] === 0 && arr[2] === 0) && (arr[1] !== 0 && arr[3] !== 0)){
    return "Launch Rocks! (CRASH!!!!)"
  }  

    if (arr[0] === 0 && arr[1] === 0 && arr[2] === 0){
    return "LaunchCode Rocks!"
  } 

return "Rutabagas! That doesn't work."

}
//console.log(launchOutput(newArray))

module.exports = launchOutput;