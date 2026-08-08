function lengthOfLongestSubstring(s: string): number {

    let left = 0;
    let right = 0;
    let hashMap :Record<string,number> = {};
    hashMap[s[left]] = left;
    let substringLength = 0;

    while(right < s.length) {
       
        console.log('Hahsmap is', hashMap, left, right,substringLength );
        if(right != 0) {
            if(!isNaN(hashMap[s[right]])) {
                const charExistIn = hashMap[s[right]];
                if(charExistIn >= left){
                    left = charExistIn +1;
                     if(substringLength < right - left +1) {
                        substringLength = right - left +1;
                    }
                }

            } else{
                hashMap[s[right]] = right;
            }
        }
        hashMap[s[right]] = right;
         if(substringLength < right - left+ 1) {
                        substringLength = right - left +1;
                    }
        right++;
        
    }
  return   substringLength;
};


console.log(lengthOfLongestSubstring("abcabcbb"))