function isLeapYear(){
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
}