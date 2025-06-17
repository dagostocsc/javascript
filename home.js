const arr = [1,2,3,4,5]

function myEach(arr, callback)
{
    for(let i = 0; i < arr.length; i++)
    {
        callback(arr[i]);
    }
}

console.log(arr);

//------------------------------------------------------------------------------

const arr1 = [1,2,3,4,5,6,7,8,9,10]

function myMap(arr, callback)
{
    const result = [];
    for(let i=0;i<arr.length;i++)
    {
        result.push(callback(arr[i]));
    }
    return result;
};

console.log(myMap(arr1, (num)=>{return num ** 2}));