function groceryPrice(exp){
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
groceryPrice('Peanut') 