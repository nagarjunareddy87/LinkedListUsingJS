const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data, null, null)
        if (this._head == null && this._tail == null) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index == 0) {
            return this.head();
        }
        else if (index + 1 == this.length) {
            return this.tail();
        }
        else {
            var ptr = this._head.next;
            for (var i = 1; i < this.length; i++) {
                if (index == i) {
                    break;
                }
                else {
                    ptr = ptr.next;
                }
            }
            return ptr.data;
        }
    }

    insertAt(index, data) {
        var newNode = new Node(data, null, null);
        var ptr = this._head;
        if (index == 0) {
            if (this.length == 0) {
                this._head = newNode;
                this._tail = newNode;
            }
            else {
                ptr.prev = newNode;
                newNode.next = ptr;
                this._head = newNode;
            }
        }
        else {
            for (var i = 1; i < this.length; i++) {
                if (index == i) {
                    break;
                }
                else {
                    ptr = ptr.next;
                }
            }
            var temp = ptr.next;
            ptr.next = newNode;
            newNode.prev = ptr;
            newNode.next = temp;
            temp.prev = newNode;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.length = 0;
        if (this._head != null) {
            this._head.data = null;
            this._head.next = null;
        }
        if (this._tail != null) {
            this._tail.data = null;
            this._tail.prev = null;
        }
        return this;
    }

    deleteAt(index) {
        var ptr = this._head;
        if (index == 0) {
            if (this.length == 1) {
                this._head = null;
                this._tail = null;
            }
            else {
                ptr.next.prev = null;
                this._head = ptr.next;
            }
        }
        else {
            for (var i = 1; i < this.length; i++) {
                if (index == i) {
                    break;
                }
                else {
                    ptr = ptr.next;
                }
            }
            var temp = ptr.next;
            ptr.next = temp.next;
            temp.next.prev = ptr;
        }
        this.length--;
        return this;
    }

    reverse() {
        this._tail = this._head;
        for (var i = 0; i < this.length; i++) {
            var temp = this._head.prev;
            this._head.prev = this._head.next;
            this._head.next = temp;
            if (this._head.prev != null) {
                this._head = this._head.prev;
            }
            else
                break;
        }
        return this;
    }

    indexOf(data) {
        var currentNode = this._head;
        var position = 0;
        var flag = false;
        for (var i = 0; i < this.length; i++) {
            if (currentNode.data == data) {
                flag = true;
                break;
            }
            currentNode = currentNode.next;
            position++;
        }
        if (flag == false) {
            return -1;
        }
        return position;
    }
}

module.exports = LinkedList;
