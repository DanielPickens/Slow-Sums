function getTotalTime(arr) {
arr.sort();    //NLogN time
    let sum = 0;
    for(let i = arr.length-1; i>0; i--){
        let curSum = arr[i]+arr[i-1];
        sum+= curSum;
        arr[i-1] = curSum;
    }
    
    
    return sum;
    
  }

