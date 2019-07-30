/** ===== 工具函数 ===== */


// 判断是否为移动端
function isMobile() {
  return /iPhone|iPad|iPod|Android|webOS|BlackBerry/i.test(navigator.userAgent)
}

// 函数防抖
function debounce(fn, delay = 400) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // 用于获取事件对象和this
      fn.apply(this, args)
    }, delay)
  }
}

// 函数节流
function throttle(fn, delay = 400) {
  let timer = null, flag = false
  return function (...args) {
    if (flag) return
    flag = true
    clearTimeout(timer)
    timer = setTimeout(() => {
      // 用于获取事件对象和this
      fn.apply(this, args)
      flag = false
    }, delay)
  }
}







