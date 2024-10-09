import Node from "./Node.mjs";
export default class {
    nodes = null;
    size = 0;

    prepend(value) {
        const node = new Node();
        node.value = value;
        node.nextNode = this.nodes;
        this.nodes = node;
        this.size++;
    }
    append(value) {
        if(this.nodes === null) this.prepend(value);
        else {
            let currentNode = this.nodes;
            while(currentNode.next !== null) currentNode = currentNode.nextNode;
            const node = new Node();
            node.value = value;
            currentNode.nextNode = node;
        }
        this.size++;
    }

    head() {
        return this.nodes.value;
    }
    tail() {
        let currentNode = this.nodes;
        while(currentNode.nextNode !== null) currentNode = currentNode.nextNode;
        return currentNode.value;
    }

    at(index) {
        let currentNode = this.nodes;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }
    pop() {
        let currentNode = this.nodes;
        for (let i = 1; i < this.size; i++) {
            if (i !== (this.size - 1)) currentNode = currentNode.nextNode;
            else currentNode.nextNode = null;
        }
    }

    contains(value) {
        let currentNode = this.nodes;
        while(currentNode.nextNode !== null) {
            if (currentNode.value === value) return true;
            else currentNode = currentNode.nextNode;
        }
        return false;
    }
    find(value) {
        let currentNode = this.nodes;
        for (let i = 1; i < this.size; i++) {
            if (currentNode.value === value) return i;
            else currentNode = currentNode.nextNode;
        }
        return null;
    }
    
    toString() {
        let currentNode = this.nodes;
        let string = "";
        for (let i = 1; i < this.size; i++) {
            if (currentNode.nextNode) {
                string = string + ` (${currentNode.value}) ->`;
                currentNode = currentNode.nextNode;
            } else {
                string = string + ` (${currentNode.value}) -> null`;
            }
        }
        return string;
    }
    insertAt(value, index) {
        let currentNode = this.nodes;
        for (let i = 1; i <= index; i++) {
            if (i === index) {
                const node = new Node();
                node.value = value;
                node.nextNode = currentNode.nextNode;
                currentNode.nextNode = node;
            } else currentNode = currentNode.nextNode;
        }
        return string;
    }
    removeAt(index) {
        let currentNode = this.nodes;
        for (let i = 1; i <= index; i++) {
            if (i === index) currentNode.nextNode = currentNode.nextNode.nexnode;
            else currentNode = currentNode.nextNode;
        }
        return string;
    }
}