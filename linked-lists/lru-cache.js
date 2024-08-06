// 146. LRU Cache

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
 
// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

// Time: O(1) For Get() Method, O(1) For Put() Method
// Space: O(N)For Both Get() And Put() Methods, N Represents The Capacity Of The Lrucache

var Node = function(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key));
        this.insert(this.cache.get(key));

        return this.cache.get(key).val;
    }

    return -1;
};

// remove node from linked list
LRUCache.prototype.remove = function(node) {
    const nextNode = node.next;
    const prevNode = node.prev;

    nextNode.prev = prevNode;
    prevNode.next = nextNode;
}

// insert node at the head of the linked list
// Our defintion of most recently used will be tied to inserting at the head
LRUCache.prototype.insert = function(node) {
    const tempNode = this.head.next;
    node.next = tempNode;
    tempNode.prev = node;
    this.head.next = node;
    node.prev = this.head;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key));
    }

    // add it to hash map
    this.cache.set(key, new Node(key, value));
    // add it to linked list
    // Our defintion of most recently used will be tied to inserting at the head
    this.insert(this.cache.get(key));

    if (this.cache.size > this.capacity) {
        // our eviction or definition of least used will be the tail node
        const lru = this.tail.prev;
        // remove node from linkedlist
        this.remove(lru);
        // remove node from hash map
        this.cache.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */