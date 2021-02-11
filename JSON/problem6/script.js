var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];




function fromListToObject(arr) {
array=[] 
for(j=0;j<2;j++){

let JSONdata={}
for(i=0;i<arr[j].length;i++){
JSONdata[arr[j][i][0]]=arr[j][i][1]

}

array.push(JSONdata)

}
return array

}






console.log(fromListToObject(array))