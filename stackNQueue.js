

// Palindrom 
var letters = [];

var word = 'Lazy';

var reverseWord = '';

for(let i = 0; i < word.length; i++) {
    letters.push(word[i])
}

for (let i = 0; i < word.length; i++) {
    reverseWord += letters.pop()
}

if (reverseWord === word) {
    console.log(word + ' is a palindrom')
} else {
    console.log(word + ' is not a palindrom')
}

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.count = 0;
        this.storage = [];
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek() {
        const node = this.top;
        return node.value;
    }
}

const starTrek = new Stack;

starTrek.push('Kirk');
starTrek.push('Spock');

console.log(starTrek)

starTrek.push('McCoy');
starTrek.push('Scotty');

console.log(starTrek.peek())