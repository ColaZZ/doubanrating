// pages/movie/movie.js
var API_URL = "https://api.douban.com/v2/movie/subject/"

Page({
  data:{

  },
  onLoad:function(params){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url: API_URL + params.id,
      data: {},
      header: {
        'Content-Type':'json'
      },
      success:function(res){
        //console.log(res.data)
        that.setData({
          movie:res.data
        })
      }
    })
  }
})