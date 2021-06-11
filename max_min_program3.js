function maximum(a, b, c)
    {
        return Math.max(Math.max(a, b), c);
    }
function minimum(a, b, c)
    {
        return Math.min(Math.min(a, b), c);
    }
function smallestDiffTriplet(arr1, arr2, arr3, n)
    {
        arr1.sort(function(a, b){return a - b});
        arr2.sort(function(a, b){return a - b});
        arr3.sort(function(a, b){return a - b});
        let min_no = 0, max_no = 0, mid_no = 0;
        let i = 0, j = 0, k = 0;
        let diff = 46465884;
        while (i < n && j < n && k < n)
        {
            let sum = arr1[i] + arr2[j] + arr3[k];
            let max = maximum(arr1[i], arr2[j], arr3[k]);
            let min = minimum(arr1[i], arr2[j], arr3[k]);
            if (min == arr1[i])
                i++;
            else if (min == arr2[j])
                j++;
            else
                k++;
            if (diff > (max - min))
            {
                diff = max - min;
                max_no = max;
                mid_no = sum - (max + min);
                min_no = min;
            }
        }
        console.log(max_no + ", " + mid_no + ", " + min_no);
    }
     
let arr1 = [5, 2, 8];
let arr2 = [10, 7, 12];
let arr3 = [9, 14, 6];
let n = arr1.length;
smallestDiffTriplet(arr1, arr2, arr3, n);