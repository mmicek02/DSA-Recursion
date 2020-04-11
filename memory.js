class Memory {
    constructor() {
      this.memory = new Float64Array(1024);
      this.head = 0;
    }
  
    allocate(size) {
      if (this.head + size > this.memory.length) {
        return null;
      }
  
      let start = this.head;
  
      this.head += size;
      return start;
    }
  
    free(ptr) {}
  
    copy(toIdx, fromIdx, size) {
      if (fromIdx === toIdx) {
        return;
      }
  
      if (fromIdx > toIdx) {
        // Iterate forwards
        for (let i = 0; i < size; i++) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      } else {
        // Iterate backwards
        for (let i = size - 1; i >= 0; i--) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      }
    }
  
    get(ptr) {
      return this.memory[ptr];
    }
  
    set(ptr, value) {
      this.memory[ptr] = value;
    }
  }
  
  module.exports = Memory;


  var memory = new Memory()

  class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}
Array.SIZE_RATIO = 3;

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    // Array { length: 6, _capacity: 12, ptr: 3 } adds data to the arry increase length and capacity

    console.log(arr);

    // Removes the last three data points
    arr.pop();
    arr.pop();
    arr.pop();
    
    console.log(arr)
    // Print the 1st item in the array arr
    console.log(arr.get(0))

    // Empty the array and add just 1 item: arr.push("tauhida");
    arr.remove(2);
    arr.remove(1);
    arr.remove(0);

    arr.push("tauhida");

    // Print this 1 item that you just added. What is the result? Can you explain your result?
    console.log(arr.get(0))
    // What is the purpose of the _resize() function in your Array class?

}

console.log(main())

let URLify = (s, n = s.length) => {
    let out = '';
    let chars = 0;

    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c !== ' ') {
            chars++;
        }
    }

    let spaces = n - chars;

    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c == ' ' && spaces > 0) {
            out += '%20';
            spaces--;
        } else if (c !== ' ') {
            out += c;
        }
    }
    while(spaces > 0) {
        out += '%20';
        spaces--;
    }
    return out

};
console.log(URLify('tauhida parveen', 15))