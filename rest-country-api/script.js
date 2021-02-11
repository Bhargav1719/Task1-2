
var request= new XMLHttpRequest();


request.open('GET',"https://restcountries.eu/rest/v2/all");


request.send();


request.onload = function (){
    var data = JSON.parse(this.response);
    
    
    //country names
    for(i=0;i<data.length;i++){
    console.log(data[i].name)
    }


    //population

    totalPopulation=0
 for(i=0;i<data.length;i++){
     totalPopulation+=(data[i].population);
   
    }
    console.log("Total Population:",totalPopulation)

}

