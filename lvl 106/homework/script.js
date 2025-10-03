function sort(initialArray, sortingArray) {
    let sortedArray = new Array(initialArray.length);
    
    for (let i = 0; i < sortingArray.length; i++) {
      let index = sortingArray[i];
      sortedArray[index] = initialArray[i];
    }
    
    return sortedArray;
  }