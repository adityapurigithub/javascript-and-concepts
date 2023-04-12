// Shallow Copy
let nums = [1, 2, 3, 4];
let shallowCopy = nums;
shallowCopy[2] = 10;

console.log(nums); // [1, 2, 10, 4]

// Deep Copy
let nums2 = [1, 2, 3, 4];
let deepCopy = [...nums2];
deepCopy[2] = 10;

console.log(nums2); // [1, 2, 3, 4]

// shift() vs pop()
nums2.shift();  //left shift or remove first
console.log(nums2);

nums2.pop()  //remove last element...