function minimumRecolors(blocks: string, k: number): number {
    let right = 0;
    let min = 0;
    let currentMin = 0;
    while(right < blocks.length) {
        if(right < k) {
            if(blocks[right] === 'W'){
                currentMin++;
                min = currentMin;
            }

        } else {
            if(blocks[right -k] === 'W')
                currentMin--;
            if(blocks[right] === 'W')
                currentMin++;
        }   
        if(currentMin < min){
            min = currentMin;
        }
        right++;
    }

    return min;
};


console.log(minimumRecolors("WBBWWBBWBW",7));