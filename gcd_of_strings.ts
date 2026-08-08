function gcd(a:number,b:number){
    let modValue = a % b;
    console.log('ModVal', modValue,a,b);
    if(modValue === 0){
        return b;
    }
    return gcd(b,modValue);
}

function gcdOfStrings(str1: string, str2: string): string {

    let result = ``;

    if(str1+str2 === str2+str1){
    let gcdLength = gcd(str1.length , str2.length);
    return str1.slice(0,gcdLength);
    }
    return result;
    
};

// ABABAB ABAB


console.log(gcdOfStrings("ABABAB","ABAB"));