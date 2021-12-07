
const fs=require('fs');
/*
fs.readFile('file.txt',(err,data) =>{
if(err===null){
    console.log(data.toString());
}else
    console.log(err.message);

}
); */

let d=fs.readFileSync('file.txt')

fs.writeFile('hello',d.toString() + 'good morning',(err)=>{
if(err===null){
    console.log('successfully updated');
}else{
console.log(err.message);
}
});