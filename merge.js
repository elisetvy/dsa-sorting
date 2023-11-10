function merge(arr1, arr2) {
  const out = [];

  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length){
    //compare arr1 at p1 and arr2 at p2
    //whichever is smaller, add to the the output and increase its pointer

    if (arr1[p1] < arr2[p2]){
      out.push(arr1[p1]);
      p1++;
    } else {
      out.push(arr2[p2]);
      p2++;
    }
  }

  const remainder = (p1 === arr1.length ? arr2.slice(p2) : arr1.slice(p1));
  console.log("remainder:", remainder, "p1", p1, "p2", p2);
  out.push(...remainder);

  return out;
}

function mergeSort(arr) {
  // Break arr into halves until length 0 or 1
  // Merge with other sorted pairs

  if (arr.length <= 1) return arr;

  const arr1 = arr.slice(0, Math.floor(arr.length/2));
  const arr2 = arr.slice(Math.floor(arr.length/2));

  return merge(mergeSort(arr1), mergeSort(arr2));
}

module.exports = { merge, mergeSort};
