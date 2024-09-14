const Recipe = {
    title: 'Omelette',
    servings: 2,
    ingredients: ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper'],
};


 for (let i in Recipe){
   if(i=="title"){
       console.log("Meal name:"+Recipe[i]);
   }
   else if(i=="servings"){
    console.log("Serves:"+Recipe[i]);
   }
   else if (i == 'ingredients') { 
    console.log("Ingredients:" + Recipe[i].join(' '));
    
}
}
