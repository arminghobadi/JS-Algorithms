const quickSort = (elements) => {
  if ( elements.length === 2){
    if ( elements[0] > elements[1] ) return [elements[1],elements[0]]
  }
 if (elements.length < 2) return elements
  // randomly choose a pivot
  const pivot = elements[Math.floor(Math.random() * (elements.length-1) )]
  // put smaller numbers in lower bound and bigger numbers in upper bound
  const bounds = elements.reduce( ({lb = [], ub = []}, elem) => {
    if ( elem < pivot ) lb.push(elem)
    if ( elem >= pivot ) ub.push(elem)
    return { lb, ub }
  })
  return quickSort(bounds.lb).concat(pivot).concat(quickSort(bounds.ub))
}