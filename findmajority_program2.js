function Majority(arr,n)
{
    let maxCount = 0;
    let index = -1; 
    for(let i = 0; i < n; i++) 
    {
        let count = 0;
        for(let j = 0; j < n; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
        if (count > maxCount)
        {
            maxCount = count;
            index = i;
        }
    }
    if (maxCount > n / 2)
        console.log(arr[index]);
    else
        console.log("No Majority Element");
}

let arr = [3,3,4,2,4,4,2,4,4];
let n = arr.length;
Majority(arr, n);