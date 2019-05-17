/*
* 工具函数
*/

/*
  * 防抖
  * fn - 回调函数
  * loadingName - loading名称
  * delay - 延迟时间
*/
const _debounce = (fn, loadingName = 'showLoading', delay = 1000) => {
  let timer = null
  return function () {
    let _this = this
    // 响应loading状态
    !this[loadingName] && (this[loadingName] = true)
    let args = arguments
    timer !== null && clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(_this, args)
    }, delay)
  }
}

// 节流
const _throttle = (fn, interval = 100) => {
  let timer
  let last
  return function () {
    let _this = this
    let args = arguments
    let now = +new Date()
    // 判断是否在interval时间内再次触发
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(_this, args)
      }, interval)
    } else {
      last = now
      fn.apply(_this, args)
    }
  }
}

/*
  * 接收文件流并进行导出
  * fileStream - 文件流
  * fileName - 文件名
  * fileType - 文件类型
*/
const _handleFileStream = (fileStream, fileType, fileName = 'excel.xlsx') => {
  try {
    if (!fileStream || !fileType) {
      return false
    }
    // 配置各大文件类型的文件流
    const FILE_TYPE_TYPE = {
      excel: {type: 'application/vnd.ms-excel'},
      word: {type: 'application/msword;charset=UTF-8'},
      pdf: {type: 'application/pdf;charset=UTF-8'}
    }
    const BLOB = new Blob([fileStream], FILE_TYPE_TYPE[fileType])
    const E_LINK = document.createElement('a')
    E_LINK.download = fileName
    E_LINK.style.display = 'none'
    E_LINK.href = URL.createObjectURL(BLOB)
    document.body.appendChild(E_LINK)
    E_LINK.click()
    // 释放URL 对象
    URL.revokeObjectURL(E_LINK.href)
    document.body.removeChild(E_LINK)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

/*
  * 返回容器的顶部
  * scrollDiv - 容器
  * speedVal - 返回速度
*/
const _goTop = function (scrollDiv, speedVal = 10) {
  try {
    let timer = setInterval(() => {
      let top = scrollDiv.scrollTop
      top -= top * 0.05
      if (top > 0) {
        scrollDiv.scrollTop = top
      } else {
        scrollDiv.scrollTop = 0
        clearInterval(timer)
      }
    }, speedVal)
  } catch (err) {
    console.log(err)
    return false
  }
}


/*
 * 禁止打印
 * key - 单个禁止
 * isAll [true,false] - 是否禁止全部
*/
const _disableConsole = function (key = 'log', isAll = false) {
  try {
    let consoleObject = window.console
    if (!consoleObject) {
      return false
    }
    if (isAll) {
      for (let key in consoleObject) {
        consoleObject[key] = function () {}
      }
      return true
    }
    const consoleKeyList = Object.keys(consoleObject) || []
    if (!consoleKeyList.includes(key)) {
      return false
    }
    consoleObject[key] = function () {}
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

// 获取浏览器URL后参数
const _getQueryParam = function (val) {
  try {
    let reg = new RegExp('(^|&)' + val + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    let res
    r !== null ? res = decodeURI(r[2]) : res = ''
    return res
  } catch (err) {
    console.log(err)
    return false
  }
}

// 判断是否为移动端设备
const _isMobile = function () {
  try {
    if (navigator && navigator.userAgent && (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return true
    }
    return false
  } catch (e) {
    console.log(e)
    return false
  }
}
/*
* 获取头像中背景颜色和文字
* binding - 用户名对象
*/
const _getNameAndBgColor = (val, nameBgColorList = []) => {
  const resData = val.value || {}
  const index = resData.firstName[0] ? +(resData.firstName[0].charCodeAt()) % 5 : 0
  const oneString = resData.firstName[0] ? resData.firstName[0].toUpperCase() : 'A'
  const twoString = resData.surName[0] ? resData.surName[0].toUpperCase() : oneString
  return {
    bgColor: nameBgColorList[index],
    innerHtml: oneString + twoString
  }
}


export {
  _debounce,
  _throttle,
  _handleFileStream,
  _goTop,
  _disableConsole,
  _getQueryParam,
  _isMobile,
  _getNameAndBgColor
}
