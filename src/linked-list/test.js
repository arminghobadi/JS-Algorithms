const LinkedList = require('./linkedList') 

const myList = new LinkedList()

myList.add('a')
console.log(myList.toString())
myList.add('b')
console.log(myList.toString())
console.log(myList.get('a'))
console.log(myList.remove('a'))
console.log(myList.toString())