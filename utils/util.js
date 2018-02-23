require('../lib/es6-promise.auto.js').polyfill();
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// ajax简易promise封装
const ajax = option => {
  return new Promise((resolve, reject) => {
    option.success = res => {
      resolve(res);
    }
    option.fail = res => {
      reject(res);
    }
    wx.request(option);
  })
}

module.exports = {
  formatTime,
  ajax
}
