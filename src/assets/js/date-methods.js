/*
* 日期、时间的常用操作方法
*/
// 获取当前日期时间字符串
const _getDate = (tag = 'datetime') => {
  try {
    let flag = tag
    let currentDate = new Date()
    let res = ''
    switch (flag) {
      case 'time':
        res = (currentDate.getHours().toString().length === 2 ? currentDate.getHours() : '0' + currentDate.getHours()) + ':' + (currentDate.getMinutes().toString().length === 2 ? currentDate.getMinutes() : '0' + currentDate.getMinutes()) + ':' + (currentDate.getSeconds().toString().length === 2 ? currentDate.getSeconds() : '0' + currentDate.getSeconds())
        break
      case 'date':
        res = currentDate.getFullYear() + '-' + ((currentDate.getMonth() + 1).toString().length === 2 ? (currentDate.getMonth() + 1) : '0' + (currentDate.getMonth() + 1)) + '-' + (currentDate.getDate().toString().length === 2 ? currentDate.getDate() : '0' + currentDate.getDate())
        break
      default:
        res = currentDate.getFullYear() + '-' + ((currentDate.getMonth() + 1).toString().length === 2 ? (currentDate.getMonth() + 1) : '0' + (currentDate.getMonth() + 1)) + '-' + (currentDate.getDate().toString().length === 2 ? currentDate.getDate() : '0' + currentDate.getDate()) + ' ' + (currentDate.getHours().toString().length === 2 ? currentDate.getHours() : '0' + currentDate.getHours()) + ':' + (currentDate.getMinutes().toString().length === 2 ? currentDate.getMinutes() : '0' + currentDate.getMinutes()) + ':' + (currentDate.getSeconds().toString().length === 2 ? currentDate.getSeconds() : '0' + currentDate.getSeconds())
    }
    return res || false
  } catch (err) {
    console.log(err)
    return false
  }
}
// 获取当前时间戳
const _getTimeStamp = () => {
  try {
    return +new Date() || false
  } catch (err) {
    console.log(err)
    return false
  }
}
// 将时间戳转化为日期时间格式
const _timeStampToDateTime = (value, tag = 'dateTime') => {
  try {
    if (!value) {
      return false
    }
    let tagVal = tag
    let timeStamp = new Date(parseInt(value))
    let year = timeStamp.getFullYear()
    let month = ((timeStamp.getMonth() + 1).toString().length === 2 ? (timeStamp.getMonth() + 1) : '0' + (timeStamp.getMonth() + 1))
    let day = (timeStamp.getDate().toString().length === 2 ? timeStamp.getDate() : '0' + timeStamp.getDate())
    let hours = (timeStamp.getHours().toString().length === 2 ? timeStamp.getHours() : '0' + timeStamp.getHours())
    let minutes = (timeStamp.getMinutes().toString().length === 2 ? timeStamp.getMinutes() : '0' + timeStamp.getMinutes())
    let seconds = (timeStamp.getSeconds().toString().length === 2 ? timeStamp.getSeconds() : '0' + timeStamp.getSeconds())
    let res
    switch (tagVal) {
      case 'date':
        res = year + '-' + month + '-' + day
        break
      case 'time':
        res = hours + ':' + minutes + ':' + seconds
        break
      default:
        res = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    }
    return res || false
  } catch (err) {
    console.log(err)
    return false
  }
}
// 将日期时间格式转化为时间戳
const _dateTimeToTimeStamp = (value) => {
  try {
    if (!value) {
      return false
    }
    let dateTime = new Date(value)
    let res = Date.parse(dateTime)
    return res || false
  } catch (err) {
    console.log(err)
    return false
  }
}
// 将2016-01-02T16:00:00.000Z时间格式转化为时间日期格式
const _UTCTimeToDateTime = (val, flag = 'time') => {
  try {
    if (!val) {
      return false
    }
    if (val.indexOf('T') !== -1 && val.indexOf('Z') !== -1) {
      val = val.replace(/T/, ' ')
      val = flag === 'date' ? val.substring(0, 10) : val.substring(0, 19)
    }
    return val || ''
  } catch (err) {
    console.log(err)
    return false
  }
}
// 将new Date时间转化为时间格式
const _dateToDate = (value, tag = 'dateTime') => {
  try {
    if (!value) {
      return false
    }
    let tagVal = tag
    let timeStamp = value
    let year = timeStamp.getFullYear()
    let month = ((timeStamp.getMonth() + 1).toString().length === 2 ? (timeStamp.getMonth() + 1) : '0' + (timeStamp.getMonth() + 1))
    let day = (timeStamp.getDate().toString().length === 2 ? timeStamp.getDate() : '0' + timeStamp.getDate())
    let hours = (timeStamp.getHours().toString().length === 2 ? timeStamp.getHours() : '0' + timeStamp.getHours())
    let minutes = (timeStamp.getMinutes().toString().length === 2 ? timeStamp.getMinutes() : '0' + timeStamp.getMinutes())
    let seconds = (timeStamp.getSeconds().toString().length === 2 ? timeStamp.getSeconds() : '0' + timeStamp.getSeconds())
    let res
    switch (tagVal) {
      case 'date':
        res = year + '-' + month + '-' + day
        break
      case 'time':
        res = hours + ':' + minutes + ':' + seconds
        break
      default:
        res = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    }
    return res || false
  } catch (err) {
    console.log(err)
    return false
  }
}
/*
* 格式化生日
* binding - 输入生日对象
* length - 长度
*/
const _formatBirth = (val, length = 8) => {
  let resData = {
    value: val.target.value,
    rawValue: val.target.rawValue
  }
  try {
    let year = new Date().getFullYear()
    let rawValue = val.target.rawValue
    let eventYear = rawValue.length === length ? +rawValue.substring(4) : 0
    let eventDay = rawValue.length > 1 ? rawValue.substring(0, 2) : ''
    let eventMonth = rawValue.length > 3 ? rawValue.substring(2, 4) : ''
    if (eventYear > year) {
      resData = {
        value: eventDay + '/' + eventMonth,
        rawValue: eventDay + eventMonth
      }
    }
    return resData
  } catch (e) {
    console.log(e)
    return resData
  }
}
/*
* 获取年龄
* val - 值
*/
const _getBirthAge = (val) => {
  let eventYear = val.value.year || ''
  let resData = {
    html: '-'
  }
  if (eventYear.length !== 8) {
    return resData
  }
  let birthYear = +eventYear.substring(4)
  let year = new Date().getFullYear()
  let age = year - birthYear + 1
  age > 0 ? resData.html = age : resData.html = '-'
  return resData
}

export {
  _getDate,
  _getTimeStamp,
  _timeStampToDateTime,
  _dateTimeToTimeStamp,
  _UTCTimeToDateTime,
  _dateToDate,
  _formatBirth,
  _getBirthAge
}
