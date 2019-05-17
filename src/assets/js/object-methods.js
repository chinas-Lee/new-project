/*
* 对象的常用操作方法
*/
// 获取数据类型
const _getDataType = (item) => {
  try {
    let res
    switch (Object.prototype.toString.call(item)) {
      case '[object Array]':
        res = 'Array'
        break
      case '[object Object]':
        res = 'Object'
        break
      case '[object String]':
        res = 'String'
        break
      case '[object Number]':
        res = 'Number'
        break
      case '[object Boolean]':
        res = 'Boolean'
        break
      case '[object Undefined]':
        res = 'Undefined'
        break
      case '[object Null]':
        res = 'Null'
        break
      default:
        res = false
    }
    return res || false
  } catch (err) {
    console.log(err)
    return false
  }
}
// 一维数组去重
const _uniqueArray = (arr) => {
  try {
    // Array.from兼容写法
    if (Array.from) {
      return Array.from(new Set(arr))
    } else {
      let arrVal = arr
      let res = []
      let obj = {}
      // Array.prototype.indexOf兼容写法
      if (Array.prototype.indexOf) {
        for (let i = 0, len = arrVal.length; i < len; i++) {
          if (res.indexOf(arrVal[i]) === -1) {
            res.push(arrVal[i])
          }
        }
      } else {
        for (let i = 0, len = arrVal.length; i < len; i++) {
          if (!obj[arrVal[i]]) {
            res.push(arrVal[i])
            obj[arrVal[i]] = true
          }
        }
      }
      return res || false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
// 数组以对象中某个属性去重
const _uniqueArrayAttributes = (arr, attrName) => {
  try {
    if (_getDataType(arr) !== 'Array' || !attrName) {
      return false
    }
    let tagObj = {}
    let resData = []
    arr.forEach((item) => {
      if (!tagObj[item[attrName]]) {
        resData.push(item)
        tagObj[item[attrName]] = true
      }
    })
    return resData
  } catch (error) {
    console.log(error)
    return false
  }
}
// 数组排序函数
const _sortArr = (valueOne, valueTwo) => {
  if (valueOne < valueTwo) {
    return -1
  } else if (valueOne > valueTwo) {
    return 1
  } else {
    return 0
  }
}
// 数组排序
const _sortArray = (arrVal) => {
  try {
    if (_getDataType(arrVal) !== 'Array') {
      return false
    }
    arrVal.sort(_sortArr)
    return this
  } catch (err) {
    console.log(err)
    return false
  }
}
// 自定义数组排序
const _customSortArray = (arrVal, indexVal) => {
  if (_getDataType(arrVal) !== 'Array') {
    return false
  }
  try {
    arrVal.sort(
      (obj1, obj2) => {
        let val1 = obj1[indexVal]
        let val2 = obj2[indexVal]
        if (val1 < val2) {
          return -1
        } else if (val1 > val2) {
          return 1
        } else {
          return 0
        }
      }
    )
    return this
  } catch (err) {
    console.log(err)
    return false
  }
}
// 去除数组的null、undefined、''数据
const _clearEmptyArray = (arr) => {
  try {
    if (_getDataType(arr) !== 'Array') {
      return false
    }
    let resData = []
    arr.forEach((item) => {
      item !== null && item !== undefined && item !== '' && resData.push(item)
    })
    return resData
  } catch (error) {
    console.log(error)
    return false
  }
}
// 对象的深拷贝
const _deepCopy = (obj) => {
  try {
    let newObject
    if (typeof obj === 'object') {
      if (obj === null) {
        newObject = null
      } else {
        if (obj instanceof Array) {
          newObject = []
          for (let i = 0, len = obj.length; i < len; i++) {
            newObject.push(_deepCopy(obj[ i ]))
          }
        } else {
          newObject = {}
          for (let j in obj) {
            newObject[ j ] = _deepCopy(obj[ j ])
          }
        }
      }
    } else {
      newObject = obj
    }
    return newObject
  } catch (e) {
    console.log(e)
    return false
  }
}

export {
  _getDataType,
  _uniqueArray,
  _uniqueArrayAttributes,
  _sortArray,
  _sortArr,
  _customSortArray,
  _clearEmptyArray,
  _deepCopy
}
