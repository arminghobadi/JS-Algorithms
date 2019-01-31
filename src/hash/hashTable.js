class HashTable {

  constructor(hashTableSize = 10){
    this.buckets = Array(hashTableSize).fill(null).map(() => new Array());
    this.keys = {}
  }

  hash(key){
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    )
    return hash % this.buckets.length
  }

  set(key, value){
    const hashKey = this.hash(key)
    this.keys[key] = hashKey
    this.buckets[hashKey].push({key, value})
    return {key, value}
  }

  delete(key){
    let deletedKey = null
    const hashKey = this.hash(key)
    this.buckets[hashKey].forEach( (item, index) => {
      if (item.key === key){
        deletedKey = this.buckets[hashKey][index]
        this.buckets[hashKey].splice(index, 1)
      }
    })
    if (deletedKey) delete this.keys[deletedKey]
    return deletedKey
  }

  get(key){
    const hashKey = this.hash(key)
    let res = null
    this.buckets[hashKey].forEach( item => {
      if (item.key === key){
        res = item
      }
    })
    return res
  }

  getKeys(){
    return Object.keys(this.keys)
  }
}

module.exports = HashTable