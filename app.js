// LinkedList with TDD learned from https://www.youtube.com/watch?v=gJjPWA8wpQg
// To use the actual test file run "npm test"
const LinkedList = require("./LinkedList");

// const ll = new LinkedList();
// ll.insertAtHead(10);
// ll.insertAtHead(20);
// console.log(11);

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.print();
console.log(ll.getByIndex(0).value);
// ll.removeAtIndex(2);
// ll.print();
