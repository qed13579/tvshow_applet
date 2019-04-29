// pages/youdu/youdu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      hidden:1,
      hidden1: 0
  },
man:function(){
this.setData({
  hidden:1,
  hidden1: 0
})
},
woman: function () {
  this.setData({
    hidden: 0,
    hidden1: 1
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  formSubmit:function(e){
    console.log(e);
    if (e.detail.value.name.length>0){
    wx.navigateTo({
      url: '../story/story?label=' + e.detail.value.label + "&name=" + e.detail.value.name,
    })
    }else{
      wx.showModal({
        title: '😶嘻嘻😶',
        content: '你要输入东西哦...',
        showCancel: false,
        confirmText: "确定",
        success: function () {
          // that.previewImg();
        }
      })
    }

    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})