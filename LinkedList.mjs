import Node from "./Node.mjs";
export default class {
    #nodes = null;
    size = 0;

    prepend(value) {
        const node = new Node();
        node.value = value;
        node.nextNode = this.#nodes;
        this.#nodes = node;
        this.size++;
    }
    append(value) {
        if(this.#nodes === null) this.prepend(value);
        let currentNode = this.#nodes;
        while(currentNode.nextNode !== null) currentNode = currentNode.nextNode;
        const node = new Node();
        node.value = value;
        currentNode.nextNode = node;
        this.size++;
    }
    head() {
        return this.#nodes.value;
    }
    tail() {
        let currentNode = this.#nodes;
        while(currentNode.nextNode !== null) currentNode = currentNode.nextNode;
        return currentNode.value;
    }
    at(index) {
        let currentNode = this.#nodes;
        for (let i = 0; i < index; i++) currentNode = currentNode.nextNode;
        return currentNode.value;
    }
    pop() {
        let currentNode = this.#nodes;
        while(currentNode.nextNode.nextNode !== null) currentNode = currentNode.nextNode;
        currentNode.nextNode = null;
        this.size--;
    }
    contains(value) {
        let currentNode = this.#nodes;
        for (let i = 0; i < this.size; i++) {
            if (currentNode.value === value) return true;
            else if (currentNode.nextNode === null) return false;
            currentNode = currentNode.nextNode;
        }
    }
    find(value) {
        let currentNode = this.#nodes;
        for (let i = 0; i < this.size; i++) {
            if (currentNode.value === value) return i;
            else if (currentNode.nextNode === null) return null;
            currentNode = currentNode.nextNode;
        }
    }
    toString() {
        let currentNode = this.#nodes;
        let string = "";
        for (let i = 0; i < this.size; i++) {
            if (currentNode.nextNode !== null) {
                string = string + ` ( ${currentNode.value} ) ->`;
                currentNode = currentNode.nextNode;
            } else {
                string = string + ` ( ${currentNode.value} ) -> null`;
                return string;
            }
        }
    }
    insertAt(value, index) {
        let currentNode = this.#nodes;
        for (let i = 0; i < index; i++) {
            if (i === (index - 1)) {
                const node = new Node();
                node.value = value;
                node.nextNode = currentNode.nextNode;
                currentNode.nextNode = node;
                this.size++;
            }
            else currentNode = currentNode.nextNode;
        }
    }
    removeAt(index) {
        let currentNode = this.#nodes;
        for (let i = 0; i < index; i++) {
            if (i === (index - 1)) currentNode.nextNode = currentNode.nextNode.nextNode;
            else currentNode = currentNode.nextNode;
        }
        this.size--;
    }
}