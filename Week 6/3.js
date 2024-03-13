function factorial(){

    let factoprnum = prompt("enter a number","5");

    let num = Number(factoprnum)
    console.log(num)
    if(num === 0){
        console.log(num)

        return 1
    }else{
        console.log('sup')
    }
    let result=1 
    for(let i = 1; i<= num; i++){
        console.log(result)
        result *= i;

    }
    console.log(result)
}