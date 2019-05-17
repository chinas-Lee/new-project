/*
* 检验规则方法
*/
// 验证手机号
const _checkPhone = (val) => {
  try {
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (typeof val !== 'number' && typeof val !== 'string') {
      return false
    }
    if (!reg.test(val)) {
      return false
    } else {
      return true
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
// 验证邮箱
const _checkEmail = (val) => {
  try {
    let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (typeof val !== 'string') {
      return false
    }
    if (!reg.test(val)) {
      return false
    } else {
      return true
    }
  } catch (err) {
    console.log(err)
    return 'error'
  }
}
// 判断是否为空对象
const _isNullObj = (obj) => {
  try {
    for (let item in obj) {
      return false
    }
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}
// 判断是否为空 ''/null/undefined
const _isNull = (val) => {
  try {
    if (val === '' || val === null || val === undefined) {
      return true
    }
    return false
  } catch (err) {
    console.log(err)
    return false
  }
}
// 验证输入值是否全由数字组成
const _checkAllNumber = function (value) {
  try {
    value = +value
    let res = /^[0-9]{1,20}$/
    if (res.exec(value)) {
      return true
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export {
  _checkPhone,
  _checkEmail,
  _isNullObj,
  _isNull,
  _checkAllNumber
}
