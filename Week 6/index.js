/* console.log('stuff')

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
    } */


    /* function celsiustoFarenheit(){

        let wassgood = prompt("What is the temperature in celsius outside","32");

        let c = Number(wassgood)
    
        F=(c*1.8)+32
        console.log(F)
    }
 */

   /*  function factorial(){

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
    } */


    /* function getNaturalSum(){

        let sumnum = prompt("enter a number","5");

        let n = Number(sumnum)

        let result=0
        for(let i=1; i<=n;i++){
            result+=i
        }
        console.log(result)
    } */


   /*  function groceryPrice(exp){
        switch(exp){
            case 'Cookies': console.log('Cookies cost 100 rupees');break;
            case 'Milk': console.log('Milk cost 60 rupees');break;
            case 'Fruits': console.log('Fruits cost 300 ruppes');break;
            case 'Corn Flakes': console.log('Corn Flakes cost 150 rupees');break;
            default : console.log(exp + 'is not available right now');
        }
    }

    groceryPrice('Cookies')
    groceryPrice('Fruits')
    groceryPrice('Peanut') */


    /* function stuff(status){
    switch(status){
        case 'processing':console.log("processing");break;
        case 'paid':console.log("paid");break;
        case 'new':console.log("new");break;
        default: console.log('fourth');
    }
}

stuff('processing')
stuff('paid')
stuff('new') */


/* function isLeapYear(){
    let d = new Date()
   let ye = d.getFullYear()
   let bi = d.getMonth()
   let da = d.getDate()
   let h = d.getHours()
   let m = d.getMinutes()
   let s = d.getSeconds()
   let ms = d.getMilliseconds()

   const leap = {
    year: 1,
    month:12,
    days:366,
    hours:8784,
    minutes:527040,

   }

   if(leap ){

   }else{

   }

} */



/* function isLeapYear(){
    let d = new Date().getFullYear()

    if( (d % 4 == 0 && d % 100 !== 0) || d % 400 == 0 ){
        console.log(d +" this year is a LEAP YEAR");
    }else{
        console.log(d +" this year is NOT a LEAP YEAR")
    }
    // else if(d.getFullYear()%4){
    //     console.log(d.getFullYear() +" this year is a LEAP YEAR");

    // }else{
    //     console.log(d.getFullYear() +" this year is not a LEAP YEAR");

    // }
} */
   

    
