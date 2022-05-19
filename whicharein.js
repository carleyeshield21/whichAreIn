// This is the link to this JavaScript challenge
// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(array1,array2){
    arr = []

    for(i=0; i<=array1.length-1; i++){
        for(j=0; j<=array2.length-1; j++){
            if(array2[j].includes(array1[i])){
            arr.push(array1[i])
            }
        }
    }
    // Here we use the ...new Set function to omit the duplicates in the array arr
    uniqueChars = [...new Set(arr)]
    console.log(uniqueChars)
}
inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])
console.log('=====')
inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"])