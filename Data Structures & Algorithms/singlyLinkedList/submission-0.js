
class ListNode {
    constructor(val, nextNode = null){
        this.val = val;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let count = 0;
        let curr = this.head.next;
        while(curr){
            if(count === index){
                return curr.val
            }
                count++;
                curr = curr.next;
            }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new ListNode(val);
        node.next = this.head.next;
        this.head.next = node;
        if(!node.next){
            this.tail = node;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i = 0;
        let curr = this.head;
        while(i < index && curr){
            i++;
            curr = curr.next;
        }

        if(curr && curr.next){
            if(curr.next === this.tail){
                this.tail = curr;
            }
            curr.next = curr.next.next
            return true;
        }
        return false; 
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let curr = this.head.next;
        const res = [];

        while(curr){
            res.push(curr.val);
            curr = curr.next
        }

        return res;
    }
}
