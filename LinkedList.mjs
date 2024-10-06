import Node from "./Node.mjs";
export default class {
    nodes = null;

    prepend(value) {
        const node = new Node();
        node.value = value;
        node.nextNode = this.nodes;
        this.nodes = node;
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
    }
}