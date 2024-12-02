var Set = function () {
  this.items = new Map();

  this.has = (value) => {
    return this.items.has(value);
  };

  this.add = (value) => {
    if (!this.has(value)) {
      this.items.set(value, value);
      return true;
    }
    return false;
  };

  this.remove = (value) => {
    if (this.has(value)) {
      this.items.delete(value);
      return true;
    }
    return false;
  };

  this.size = () => {
    return this.items.size;
  };

  this.union = (otherSet) => {
    const unionSet = new Set();
    this.items.forEach((value) => {
      unionSet.add(value);
    });
    otherSet.items.forEach((value) => {
      unionSet.add(value);
    });
    return unionSet;
  };

  this.intersection = (otherSet) => {
    const intersectionSet = new Set();
    this.items.forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  };

  this.difference = (otherSet) => {
    const differenceSet = new Set();
    this.items.forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  };

  this.subset = (otherSet) => {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let isSubset = true;
      this.items.forEach((value) => {
        if (!otherSet.has(value)) {
          isSubset = false;
        }
      });
      return isSubset;
    }
  };

  this.values = () => {
    return Array.from(this.items.values());
  };
};

// Create two sets
const setA = new Set();
const setB = new Set();

// Add elements to setA
setA.add(1);
setA.add(2);
setA.add(3);
console.log(setA.values()); // Expected output: [1, 2, 3]

// Add elements to setB
setB.add(2);
setB.add(3);
setB.add(4);
console.log(setB.values()); // Expected output: [2, 3, 4]

// Test `remove`
setA.remove(3);
console.log(setA.values()); // Expected output: [1, 2]
console.log(setA.size()); // Expected output: 2

// Test `union`
const unionSet = setA.union(setB);
console.log(unionSet.values()); // Expected output: [1, 2, 3, 4]

// Test `intersection`
const intersectionSet = setA.intersection(setB);
console.log(intersectionSet.values()); // Expected output: [2]

// Test `difference`
const differenceSet = setA.difference(setB);
console.log(differenceSet.values()); // Expected output: [1]

// Test `subset`
console.log(setA.subset(setB)); // Expected output: false
const setC = new Set();
setC.add(2);
console.log(setC.subset(setB)); // Expected output: true
