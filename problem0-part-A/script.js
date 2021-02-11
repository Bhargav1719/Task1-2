var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
cat.name="fluffyy"

   cat.weight=20
   cat.height="5.6'"
  cat.catFriends[0].furcolor="RED"
  
  cat.catFriends[0].activities.push("abc","cde")
   console.log(cat);
   console.log(cat.activities);
   
   console.log(function(){array=[];
    for(i in cat.catFriends){
        array.push(cat.catFriends[i].name)
    } 
    return array
}())
console.log(function(){sum=cat.activities.length;
    for(i in cat.catFriends){
      sum=sum+cat.catFriends[i].activities.length
     
    } 
    return sum
}())
console.log(cat.catFriends[0].furcolor)


