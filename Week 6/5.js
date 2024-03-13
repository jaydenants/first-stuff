function getNaturalSum(){

    let sumnum = prompt("enter a number","5");

    let n = Number(sumnum)

    let result=0
    for(let i=1; i<=n;i++){
        result+=i
    }
    console.log(result)
}