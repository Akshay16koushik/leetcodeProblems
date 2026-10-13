function isPalindrome(s: string): boolean {
    s =  s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    // let plainText = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, '');
    let i = 0;
    let j = s.length -1;

  while(i < j) {
        if(s[i] === s[j]) {
            i++;
            j--;
        }else {
              return false;
        }
      
           
    }
  
    
    return true;
};


console.log(isPalindrome('A man, a plan, a canal: Panama'))