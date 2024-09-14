let drinkTray=[];
let drink=['cola','lemonade','water']
for(let i=0;drinkTray.length<5;i++)
{
    
    drinkTray.push(drink[i])
    if(i==drink.length-1)
        i=-1;
}

console.log(`"Hey guys, I brought a ${drink[0]} ,${drink[0]} , ${drink[1]} , ${drink[1]} , ${drink[2]} !"`)
