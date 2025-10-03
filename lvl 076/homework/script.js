function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; 
    }
    return sum; 
  }


function getNames(arr) {
    let names = [];
    for (let i = 0; i < arr.length; i++) {
      names.push(arr[i].name); 
    }
    return names; 
  }

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
  
    start: function() {
      console.log("The car has started.");
    },
    
    stop: function() {
      console.log("The car has stopped.");
    },
    
    getCarInfo: function() {
        return this.brand + " " + this.model + ", Year: " + this.year;
      }
};


function findLargestAndSmallestWord(text) {
    const words = text.split(" "); 
    let smallest = words[0];
    let largest = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length < smallest.length) {
        smallest = words[i]; 
      }
      if (words[i].length > largest.length) {
        largest = words[i]; 
      }
    }
  
    return [smallest, largest];
  }
