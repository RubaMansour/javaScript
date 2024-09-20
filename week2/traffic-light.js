"use strict";

function getCurrentState(trafficLight) {
    return trafficLight.possibleStates[trafficLight.stateIndex];
  
}
function getNextStateIndex(trafficLight) {
   const currentState= getCurrentState(trafficLight);
   return (currentState==="green"? 1:
           currentState==="orange"? 2: 
           0);

  }
  function waitSync(secs) {
    const start = Date.now();
    while (Date.now() - start < secs * 1000) {
      // nothing do to here
    }
  }
  function main() {
    const trafficLight = {
      possibleStates: ["green", "orange", "red"],
      stateIndex: 0,
    };
  
    for (let cycle = 0; cycle < 6; cycle++) {
      const currentState = getCurrentState(trafficLight);
      console.log(cycle, "The traffic light is now", currentState);
  
      waitSync(1); // Wait a second before going to the next state
      trafficLight.stateIndex = getNextStateIndex(trafficLight);
    }
  }
  
  main();