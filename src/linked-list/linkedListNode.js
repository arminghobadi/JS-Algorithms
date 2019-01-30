class LinkedListNode {

  constructor(value, next = null){
    this.value = value
    this.next = next
  }

  doubly(prev = null){
    this.prev = prev
  }

}

module.exports = LinkedListNode