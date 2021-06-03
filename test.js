let objCount1 = [{name:"sumon", age:26,colour:"green", country:"Bangladesh"},
                {name:"Korim", age:35,colour:"Magenta", country:"Bangladesh"},
                {name:"Ruble", age:27,colour:"yellow", country:"Bangladesh"},
                {name:"Kurban", age:28,colour:"red", country:"Bangladesh"} ]

function countObj(objCounting){
    let count = 0;
    for (var c in objCounting) {
    
        count = count + 1;
    }
    return count
}
const result = countObj(objCount1)               
console.log(result)


              