function stuff(status){
    switch(status){
        case 'processing':console.log("processing");break;
        case 'paid':console.log("paid");break;
        case 'new':console.log("new");break;
        default: console.log('fourth');
    }
}

stuff('processing')
stuff('paid')
stuff('new') 