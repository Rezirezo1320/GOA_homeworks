function Value(arrayObjects) {
  for (let i = 0; i < arrayObjects.length; i++) {
    const obj = arrayObjects[i];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const result = key + ': ' + obj[key]; 
        console.log(result); 
      }
    }
  }
}
