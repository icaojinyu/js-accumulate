/** ===== 算法相关 ===== */


// 数组冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// 数组快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let base = arr.splice(Math.floor(arr.length / 2), 1)[0]
  let left = [], right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) left.push(arr[i])
    else right.push(arr[i])
  }
  return quickSort(left).concat(base, quickSort(right))
}