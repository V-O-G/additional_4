module.exports = function multiply(first, second) {
first = first.split('').reverse();
second = second.split('').reverse();
res = [];
res1 = [];
var remnant = 0;
var remnant2 = 0;
var zeros='0,';
var zeros2=',0';
var result = [];
var result2 = [];

  for(j=0;j<second.length;){
    for (i=0;i<first.length;){
    res[i]=(second[j]*first[i]+remnant)%10;
    remnant=Math.floor(((second[j]*first[i])+remnant)/10);
    i++;
    }
  res2=res.toString();
    if(remnant>0){
    rem = remnant.toString();
    res2=res2+','+rem;
    }
  res1[j]=res2;
  j++;
  remnant=0;
  }

  for (i = 1; i<res1.length; i++) {
    res1[i]=zeros+res1[i];
    zeros+='0,';
  }

 biggest = res1[res1.length-1].length;
  for (i=0;i<res1.length;i++){
    if (res1[i].length<biggest){
    do{res1[i]=res1[i]+zeros2}
    while(res1[i].length<biggest)
    }
    }

  var n=0;
  for(i=0;i<biggest;i+=2){
    var sum = 0;
    for(var x=0; x<res1.length; x++){
      sum += Number(res1[x][i]);

    }
    result[n]=sum;
    n++;
    }
for (i=0; i<result.length;i++){
    result2[i]=(result[i]+remnant2)%10;
    remnant2 = Math.floor((result[i]+remnant2)/10);
}
  return result2.reverse().join('');
}
