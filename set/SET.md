# Set Data Structure

## Overview

A **Set** is a data structure that stores unique elements. Unlike arrays, sets do not allow duplicate values, and the order of elements is not guaranteed. Sets are useful for scenarios such as:

- Removing duplicate values.
- Performing set operations like union, intersection, and difference.
- Checking for subsets in mathematical or programming contexts.

---

## How the `Set` Works

### Key Operations

1. **Add**:

   - Adds an element to the set if it is not already present.

2. **Remove**:

   - Removes a specific element from the set.

3. **Values**:

   - Returns an array of all elements in the set.

4. **Size**:

   - Returns the number of elements in the set.

5. **Union**:

   - Combines two sets and returns a new set with all unique elements.

6. **Intersection**:

   - Returns a new set containing elements present in both sets.

7. **Difference**:

   - Returns a new set containing elements present in one set but not in the other.

8. **Subset**:
   - Checks if one set is a subset of another.

---

## Implementation Overview

This repository contains a custom implementation of the `Set` data structure in JavaScript. The `Set` class includes the methods described above to perform various operations on sets.

---

## Usage Example

Here&apos;s how you can use the `Set` implementation:

```javascript
// Create two sets
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
```
