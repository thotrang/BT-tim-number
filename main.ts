let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let i=0;
let arr:number[]=[]
while(i<=10){
    let x=numbers.indexOf(i);
    if(x==-1){
        arr.push(i);
    }
    i++;
}
console.log(arr);


