// Code your solution in this file!

function distanceFromHqInBlocks(val) {
    // Returns the number of blocks given a value
    return val >= 42 ? val - 42 : 42 - val;
  }
  
  function distanceFromHqInFeet(val) {
    // Returns the number of feet from the HQ
    return distanceFromHqInBlocks(val) * 264;
  }
  
  function distanceTravelledInFeet(startPoint, endPoint) {
    // Returns the number of feet traveled
    return Math.abs(startPoint - endPoint) * 264;
  }
  
  function calculatesFarePrice(startPoint, endPoint) {
    // Returns the fare for the customer
    let traveledFeet = distanceTravelledInFeet(startPoint, endPoint);
    let fare = 0;
  
    if (traveledFeet < 400) {
      fare = 0;
    } else if (traveledFeet >= 400 && traveledFeet < 2000) {
      fare = (traveledFeet - 400) * 0.02;
    } else if (traveledFeet >= 2000 && traveledFeet < 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
    
    return fare;
  }
  