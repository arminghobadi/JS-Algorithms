function mergeSort(array) {

  if (array.length === 2){
    return [Math.min(array[0], array[1]),Math.max(array[0],array[1])]
  }

  if (array.length < 2){
    return array
  }

  const middleIndex = Math.floor(array.length / 2)
  const sortedLeft = mergeSort(array.slice(0,middleIndex))
  const sortedRight = mergeSort(array.slice(middleIndex))

  return putTogether(sortedLeft, sortedRight)
}

function putTogether(left, right) {
  var res = []

  while( left.length !== 0 && right.length !== 0 ){
    if (left[0] < right[0]){
    res.push(left[0])
    left.shift()
    }
    else {
      res.push(right[0])
      right.shift()
    }
  }
  
  res.push(...left)
  res.push(...right)

  return res
}