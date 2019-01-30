const LinkedListNode = require('./linkedListNode')

class LinkedList {

  constructor(){
    this.head = null
    this.tail = null
  }

  add(value){
    const node = new LinkedListNode(value)
    if (!this.head){
      this.head = node
      this.tail = node
    }
    else {
      this.tail.next = node
      this.tail = node
    }
  }

  get(value){
    var currentNode = this.head
    while(currentNode){
      if (currentNode.value === value){
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }

  remove(value){
    var currentNode = this.head
    let deletedNode = null
    if (currentNode.value === value){
      deletedNode = this.head
      this.head = this.head.next
    }
    if (currentNode !== null ){
      while(currentNode.next){
        if (currentNode.next.value === value){
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        }
        currentNode = currentNode.next
      }
    }
    
    return deletedNode
  }

  toString(){
    let res = ''
    let currentNode = this.head
    while(currentNode){
      res += ` ${currentNode.value} `
      currentNode = currentNode.next
    }
    return res
  }
}

module.exports = (LinkedList)