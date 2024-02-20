/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

class Group {
  constructor() {
    this.memebers = [];
  }

  has(element) {
    for (const value of this.memebers) {
      if (element === value) return true;
    }
    return false;
  }
  add(element) {
    if (!this.has(element)) this.memebers.push(element);
  }
  delete(element) {
    if (this.has(element)) this.memebers.splice(this.memebers.indexOf(element), 1);
  }
  static from(arr) {
    let g = new Group();
    for (const element of arr) {
      g.add(element);
    }
    return g;
  }
}


// Tests:
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

