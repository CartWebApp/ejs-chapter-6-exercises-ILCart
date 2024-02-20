/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)
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

class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.group = group
  }
  next() {
    if (this.group.memebers.length > this.i) {
      this.i++
      return { value: this.group.memebers[this.i - 1], done: false }
    }
    return { done: true };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this)
}

// Tests:
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c