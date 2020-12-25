function isOneEditString( stringOne, stringTwo ){
    if( stringOne === stringTwo ){
        return false
    }
    
    if(
        stringTwo.length > stringOne.length + 1 ||
        stringTwo.length < stringOne.length - 1
    ){
        return false
    }

    let comunCharQuantity = 0

    for ( const char of stringTwo ){
        if (stringOne.indexOf(char) !== -1) {
            comunCharQuantity++
        }
    }
    return(
        comunCharQuantity <= stringOne.length + 1 &&
        comunCharQuantity >= stringOne.length -1
    )
} 

console.log(isOneEditString("banana", "bankna"))