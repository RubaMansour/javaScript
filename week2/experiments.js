"use strict";
function runExperiment(sampleSize) {
    const valueCounts = [0, 0, 0, 0, 0, 0];
    for(let i=0;i<sampleSize;i++)
    {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        valueCounts[randomValue - 1]++;
       
    }
   // console.log(valueCounts);
const results = [];
  for(let value of valueCounts){
    const percentage =((value / sampleSize) * 100).toFixed(2);
    // console.log(percentage);
   
    results.push(percentage.toString());
   }
  
   return results;
}



function main() {
    const sampleSizes = [100, 1000, 1000000];
    for(let num of sampleSizes){
     const result=runExperiment(num);
    console.log(result,num)
   

}

  }
  main();