var Stack = function () {
  this.storage = new Map();
  this.count = 0;

  this.push = (value) => {
    this.storage.set(this.count, value);
    this.count++;
  };
  this.pop = () => {
    if (this.count === 0) return undefined;

    this.count--;
    var result = this.storage.get(this.count);
    this.storage.delete(this.count);
    return result;
  };

  this.size = () => {
    return this.count;
  };
  this.peek = () => {
    return this.storage.get(this.count - 1);
  };
};

var stack = new Stack();

// Test pushing elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // Expected output: 3
console.log(stack.peek()); // Expected output: 30

// Test popping elements from the stack
console.log(stack.pop()); // Expected output: 30
console.log(stack.pop()); // Expected output: 20
console.log(stack.size()); // Expected output: 1
console.log(stack.peek()); // Expected output: 10

// Test popping all elements and handling an empty stack
console.log(stack.pop()); // Expected output: 10
console.log(stack.pop()); // Expected output: undefined
console.log(stack.size()); // Expected output: 0
console.log(stack.peek()); // Expected output: undefined

// Test pushing elements after clearing the stack
stack.push(40);
console.log(stack.size()); // Expected output: 1
console.log(stack.peek()); // Expected output: 40
