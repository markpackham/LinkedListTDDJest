// LinkedList with TTD learned from https://www.youtube.com/watch?v=gJjPWA8wpQg
const LinkedList = require("./LinkedList");

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.print();
ll.removeAtIndex(2);
ll.print();
