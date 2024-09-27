import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
 const module_name=mentors.filter((element)=>{
   return element.canTeach.includes(moduleName);
  
 });

 const new_module_name=module_name.map((ele)=>{
  return ele.name;
 
});
return new_module_name;
};

console.log(possibleMentorsForModule("javascript"));
// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
 const random=possibleMentorsForModule(moduleName);
 return random[Math.floor(Math.random()*random.length)];

};
console.log(findMentorForModule("react"));
// You can uncomment out this line to try your function
// console.log(findMentorForModule('javascript'));h