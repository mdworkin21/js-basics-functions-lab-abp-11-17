// Code your solution in this file!
function distanceFromHqInBlocks(address){
  if(address > 42){
    return address - 42
  }else{
    return 42-address
  }
}

function distanceFromHqInFeet(n){
   return distanceFromHqInBlocks(n) * 264

}

function distanceTravelledInFeet(start, end){
  if (end > start){
    let distance = (end - start) * 264
    return distance;
} else {
  let distance = (start - end) * 264
  return distance;
  }
}




function calculatesFarePrice(start, destination){
  function distanceTravelledInFeet(start, end){
    if (end > start){
      let distance = (end - start) * 264
      return distance;
  } else {
    let distance = (start - end) * 264
    return distance;
    }
  }

  switch(distance){

    case 'free sample':
        if(distance < 400){
          return  0
        }

    case 'two cents':
      if (distance > 400 && distance < 2000){
        return distance * .02
      }

    case 'flat rate':
      if (distance > 2000 && distance < 2500){
        return 25
      }

    case 'nope':
      if (distance > 2500){
        return "cannot travel that far"
      }
    } return distance
  }
