function Stuff(){
    let ster=100;
    let result
    
    for(i=0;i<=ster;i++){
        if(i%(3*5)===0){
            result="FizzBuzz";
        }
        else if(i%3===0){
            result="Fizz";
        }
        else if(i%5===0){
            result="Buzz";
        }else{
            result=i
        }
        console.log(result)
    }
    }