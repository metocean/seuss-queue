// Efficient memory based queue.
// Auto compacts if reduced by half
// Adapted from http://code.stephenmorley.org/javascript/queues/

module.exports = queue => {
  if (!queue) queue = []
  let offset = 0

  const compact = () => {
    queue = queue.slice(offset)
    offset = 0
  }

  return {
    enqueue: item => queue.push(item),
    dequeue: () => {
      if (queue.length == 0) return undefined
      const item = queue[offset]
      offset++
      // compact if half empty
      if (offset * 2 >= queue.length) compact()
      return item
    },
    peek: () => queue.length != 0 ? queue[offset] : undefined,
    length: () => queue.length - offset,
    all: () => {
      compact()
      return queue
    },
    compact: compact
  }
}
