//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  // 加载组件事件
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})