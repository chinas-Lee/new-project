/*
 * 字符串常用操作方法
*/
// 去除字符串首尾空格
const _trim = (value = '') => {
  try {
    // String.prototype.trim兼容性写法
    if (String.prototype.trim) {
      return value.trim()
    }
    return value.replace(/(^\s*)|(\s*$)/g, '')
  } catch (err) {
    console.log(err)
    return false
  }
}
// 截取指定字符指定位置的字符
const _getSpecStr = (str, spcStr, location) => {
  try {
    return str.split(spcStr)[location] || ''
  } catch (err) {
    console.log(err)
    return false
  }
}
// 设置将某几位显示为指定字符  str-目标字符串 target-替换指定的字符 start-指定开始替换位置 num-替换多少位
const _setStars = (str, target, start, num) => {
  try {
    let res = str.split('')
    let i = 0
    for (;i < num; i++) {
      res.splice(start + i, 1, target)
    }
    return res.join('') || ''
  } catch (err) {
    console.log(err)
    return false
  }
}
// 将字符串中某个字符替换为指定字符
const _formatStr = (str, frontValArr, backValArr) => {
  try {
    if (str === '' || frontValArr.length <= 0 || backValArr.length <= 0) {
      return str
    }
    frontValArr.forEach((item, index) => {
      str = str.replace(new RegExp(item, 'g'), backValArr[index])
    })
    return str || ''
  } catch (err) {
    console.log(err)
    return false
  }
}
// 指定位置插入指定字符串
const _insertStr = (str = '', indexList = [], insertVal = '') => {
  try {
    if (!str || indexList.length <= 0 || !insertVal) {
      return str
    }
    let newStr = str.substring(0, indexList[0])
    for (let i = 0, len = indexList.length; i < len; i++) {
      i !== indexList.length - 1 ? newStr += insertVal + str.substring(indexList[i], indexList[i] + 2) : newStr += insertVal + str.substring(indexList[i])
    }
    return newStr
  } catch (e) {
    console.log(e)
    return str
  }
}

export {
  _trim,
  _getSpecStr,
  _setStars,
  _formatStr,
  _insertStr
}
