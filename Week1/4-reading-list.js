let books=[{
    title: "The Author’s Shadow",
    author :"Evelyn Blake",
    alreadyRead :true,
},

{
    title: "Ink and Imagination",
    author :"Thomas Whitaker",
    alreadyRead :false,
},

{
    title: "The Pen’s Legacy",
    author :"Isabella Hart",
    alreadyRead :true,
},

]
for(var i=0;i<books.length;i++){
    console.log(books[i].title+" by "+books[i].author);
    if(books[i].alreadyRead){
        console.log("You already read "+ books[i].title)
    }
    else{
        console.log("You still need to read "+ books[i].title)
    }
   
}