export default function sortedUnion (...rest) {
  const result = []

  rest.forEach(items => {
    items.forEach(element => {
      const found = result.find(e => e === element)
      if (!found) {
        result.push(element)
      }
    })
  })

  return result
}
