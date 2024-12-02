var PriorityQueue = function () {
  this.collection = new Array();

  this.printCollection = () => {
    console.log(this.collection);
  };

  this.enqueue = (element) => {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  };
  this.dequeue = () => {
    let value = this.collection.shift();
    return value[0];
  };
  this.size = () => {
    return this.collection.length;
  };
  this.front = () => {
    return this.collection[0];
  };
  this.isEmpty = () => {
    return this.collection.length === 0;
  };
};

var queue = new PriorityQueue();

// Enqueue tasks with different priorities
queue.enqueue(["Task1", 2]);
queue.enqueue(["Task2", 1]); // Higher priority
queue.enqueue(["Task3", 3]);
queue.enqueue(["Task4", 1]); // Same priority as Task2

queue.printCollection(); // Expected: [["Task2", 1], ["Task4", 1], ["Task1", 2], ["Task3", 3]]

// Dequeue tasks and check the order
console.log(queue.dequeue()); // Expected: "Task2"
console.log(queue.dequeue()); // Expected: "Task4"
console.log(queue.dequeue()); // Expected: "Task1"
console.log(queue.dequeue()); // Expected: "Task3"
console.log(queue.isEmpty()); // Expected: true
