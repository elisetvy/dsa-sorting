function insertionSort(arr) {
  //building a sorted section, and expanding it
  //loop through the array and put each element into the sorted section
  // until you run out of elements

 for (let i = 1; i < arr.length; i++){
  for(j = i; j >= 0; j--){
    if (arr[j] < arr[j - 1]){
      [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
    }
  }
 }

 return arr;
}

/*
 1

  [3, 5, 1, 4]

  OUT: [3]

*/
