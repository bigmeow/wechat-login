// pages/login/login.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 光标是否聚焦在密码框
    isFocusPasswordInput: false,
    // 是否允许提交登陆
    isAllowSubmit: false,
    // 是否正在提交中
    isSubmitLoading: false,
    // 用户名密码
    username: '',
    password: ''
  },
  bindfocusOnPasswordInput (event) {
    this.setData({
      isFocusPasswordInput: true
    });
  },
  bindblurOnPasswordInput (event) {
    this.setData({
      isFocusPasswordInput: false
    });
  },
  bindinput(event) {
    this.setData({
      [event.target.dataset.key]: event.detail.value
    });
    this.setData({
      isAllowSubmit: this.data.username.length === 11 && this.data.password.length > 0
    });
  },
  bindsubmit (event) {
    //console.log(event.detail);
    wx.showLoading({
      title: '请稍等...'
    });
    util.ajax({
      url: 'https://baidu.com'
    }).then(res => {
      wx.showToast({
        title: '登陆成功',
        success: () => {
          wx.redirectTo({
            url: '../index/index'
          });
        }
      });
    }).catch(error => {
      wx.showToast({
        title: '用户名密码错误',
        duration: 2000,
        icon: 'none'
      });
    })
    
  }
})