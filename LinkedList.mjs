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
        if(this.nodes === null)  this.prepend(value)
        else {
            let currentNode = this.nodes;
            while(currentNode.next !== null) currentNode = currentNode.next;
            const node = new Node();
            node.value = value;
            currentNode.next = node;
        }
        this.size++;
    }
    head() {
        return this.nodes.value;
    }
    tail() {
        let currentNode = this.nodes;
        while(currentNode.next !== null) currentNode = currentNode.next;
        return currentNode.value;
    }
}