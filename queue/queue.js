var Queue = function () {
  this.collection = new Array();

  this.print = () => {
    console.log(this.collection);
  };

  this.enqueue = (element) => {
    this.collection.push(element);
  };

  this.dequeue = () => {
    return this.collection.shift();
  };

  this.front = () => {
    return this.collection[0];
  };

  this.size = () => {
    return this.collection.length;
  };

  this.isEmpty = () => {
    return this.collection.length === 0;
  };
};

// Create a new Queue instance
var queue = new Queue();

// Add elements to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size()); // Expected output: 3
console.log(queue.front()); // Expected output: 10

// Remove elements from the queue
console.log(queue.dequeue()); // Expected output: 10
console.log(queue.dequeue()); // Expected output: 20
console.log(queue.size()); // Expected output: 1
console.log(queue.front()); // Expected output: 30

// Check if the queue is empty
console.log(queue.isEmpty()); // Expected output: false
queue.dequeue();
console.log(queue.isEmpty()); // Expected output: true

// Print the queue's current state
queue.enqueue(40);
queue.print(); // Expected output: [40]
