const HashTable = require('./hashTable')

const Table = new HashTable()

console.log(Table.set('armin', 'reza'))
console.log(Table.buckets)
console.log(Table.keys)
console.log(Table.delete('armin'))
console.log(Table.buckets)
console.log(Table.keys)