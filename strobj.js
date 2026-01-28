// input a.b.c.d.e
// output {a:{:b:{C:{d:e}}}}

const inputString = 'a.b.c.d.e';



function unpack(str){
  const strArray=str.split(".");
  return str.split(".").reduceRight(function(acc,next){
    return {[next]:acc}
  },{})

}

const output = unpack(inputString);

console.log(output);
