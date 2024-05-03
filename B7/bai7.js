let myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];


console.log(myColor.join(","));


let value= prompt("Mời bạn nhập số :")

let result2=[value[0]];
for(let i=1;i<value.length;i++){
    if(value[i-1]%2==0&&value[i]%2==0){
        result2.push("-",value[i]);
    }else{
        result2.push(value[i])
    }
}
console.log(result2.join(""));

str = 'Keep Calm And Code On';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));