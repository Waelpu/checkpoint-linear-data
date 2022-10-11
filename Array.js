const set1 = [3,1,7,9];
const set2 = [2,4,1,9,3];
const set = set1.concat(set2)
var SUM_COMMUN=0;
var SUM_DISTINCT=0;


for(let i=0;i<set.length;i++){
    var found = false;
    for(let j =0;j<set.length;j++){
        if(set[i]== set[j] && i!=j){
            found = true
             SUM_COMMUN += set[i]
        }
    }
    if(found == false){
     SUM_DISTINCT += set[i]
    }
}

console.log("comm",SUM_COMMUN)
console.log("distinct",SUM_DISTINCT)