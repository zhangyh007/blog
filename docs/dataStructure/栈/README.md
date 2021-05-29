### 概述
> 栈是一种遵从后进先出（LIFO）原则的有序集合。
> 新添加或待删除的元素都保存在栈的同一端，称为栈顶，另一端就叫栈底。

### 实现
数组实现

``` js
class Stack {
  constructor() {
    this.items = []
  }
  // 添加 
  push(element) {
    this.items.push(element)
  }
  // 移除新元素
  pop() {
    this.items.pop()
  }
  // 返回栈顶的元素
  peek() {
    return this.items[this.items.length - 1]
  }
  // 栈里是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 清除
  clear() {
    this.items = []
  }
  // 返回栈的元素个数
  size() {
    return this.items.length
  }
}
```

对象实现

``` js
class Stack {
  constructor() {
    this.items = {}
    this.count = 0
  }
  push(element) {
    this.items[count] = element
    this.count++
  }
  pop() {
    if(this.isEmpty()) {
      return undefined
    }
    const stack = this.items[this.count]
    delete this.items[this.count]
    this.count--
    return stack
  }
  peek() {
    return this.count === 0 ? undefined : this.items[this.count]
  }
  clear() {
    this.items = {}
    this.count = 0
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
}
```
