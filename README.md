# Seuss Queue

Efficient memory based queue.

```javascript
const seuss = require('seuss-queue')
const queue = seuss()
queue.enqueue({ item: 1 })
queue.enqueue({ item: 2 })
console.log(queue.peek()) // item: 1
queue.dequeue()
console.log(queue.peek()) // item: 2
console.log(queue.length()) // 1
console.log(queue.all()) // [{ item : 2 }]
queue.compact() // optionally save space
```
