class Node { 
    constructor (value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(node){
        const node = new Node(node)
        if(this.length === 0){
            this.head = node
            this.tail = this.head
        }else{
            this.tail.next = node
            this.tail = node
        }
    }
    reverse(){
        let prev = null
        let curr = this.head
        let next = this.head.next
        while(curr){
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}