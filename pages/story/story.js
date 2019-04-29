// pages/story/story.js
const app = getApp()

Page({
  onShareAppMessage: function (res) {
    // 来自页面内转发按钮
    console.log(res)
    return {
      title: '2018你的故事有毒',
      path: 'pages/youdu/youdu',
      // imageUrl: '../../image/shareimg.jpg',
      success: function (res) {
        // 转发成功
        console.log("转发成功");
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败");
      }
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    myname: "",
    mylabel: "",
    common: [],
    picture: [],
    picture1: "",
    hidden: "false",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  save: function () {
    var that = this;
    // wx.showToast({
    //   title: '长按图片可以保存哦',
    //   icon: 'none',
    //   duration: 1000
    // })
    wx.showModal({
      title: '😶嘻嘻😶',
      content: '长按图片可以保存哦...',
      showCancel: false,
      confirmText: "确定",
      success: function () {
        that.previewImg();
      }
    })
    // setTimeout(function () {

    //   that.previewImg();
    // }, 1000)


  },

  random: function () {
    var page = getCurrentPages().pop();
    if (page == undefined || page == null) return;
    page.onLoad();

    // console.log(1);
  },
  onLoad: function (options) {
    var that = this;
    // console.log(app.globalData.version)
    wx.showLoading({
      title: '生成中',
    })
    // console.log(options)
   

    that.setData({
      hidden: false
    })
    setTimeout(function () {
      wx.hideLoading({

      })
      that.setData({
        hidden: true
      })
    }, 500)


    if (options) {
      wx.setStorage({
        key: 'name',
        data: [options.name, options.label],
      })
    }

    wx.getStorage({
      key: 'name',
      success: function (res) {
        function a(a) {
          var str1 = a.replace(/\%name/g, res.data[0]);
          var pos_arr = str1.split("，")
          return pos_arr;
        }



        var random = Math.floor(Math.random() * app.globalData.word.length - 1);
        if (res.data[1]==0){
          var str = app.globalData.word[random];
        }
        if (res.data[1] == 1) {
          var str = app.globalData.word[random];
        }
        
        // var str = app.globalData.word[random];


        var str1 = a(str);

        // var str2 = str1.replace("，", '1');
        // that.setData({
        //   myname: res.data,
        //   // mylabel:options.label,
        //   common: str1

        // })

        // console.log(that.data.common)
        // console.log(res.data)
        console.log(str1)


        var ctx1 = wx.createCanvasContext('firstCanvas');
        // ctx1.font = "20px Georgia";
        ctx1.fillStyle = '#ffda44';
        ctx1.fillRect(0, 0, 500, 500);
        ctx1.fillStyle = 'black';

        var pages = wx.getSystemInfoSync().windowWidth    //获取加载的页面
        // var height = ctx1._context.canvas.height;
        // function toolong(a) {
        //   if (ctx1.measureText(a).width > wx.getSystemInfoSync().windowWidth * 0.9){
        //     ctx1.font = "10rpx Arial";
        //   }


        // }

        if (str1.length <= 4) {
          for (var a = 0; a < str1.length; a++) {
            var randomword = Math.round(Math.random() * 8 + 12);
            if (a % 2 != 0) {
              ctx1.font = randomword + "rpx Arial";
              var str = str1[a];
              ctx1.fillText(str, (wx.getSystemInfoSync().windowWidth * 0.9 - ctx1.measureText(str).width) / 2, 80 + a * 30);
            }
            if (a % 2 == 0) {
              var randomword = Math.round(Math.random() * 8 + 14);
              ctx1.font = randomword + "rpx Arial bolder";

              var str = str1[a];

              ctx1.fillText(str, (wx.getSystemInfoSync().windowWidth * 0.9 - ctx1.measureText(str).width) / 2, 80 + a * 30);
              // console.log(ctx1.measureText(str).width * 1.2)
              // console.log(wx.getSystemInfoSync().windowWidth)
            }
          }
        }

        if (str1.length < 6 && str1.length > 4) {
          for (var a = 0; a < str1.length; a++) {
            if (a % 2 != 0) {
              var randomword = Math.round(Math.random() * 8 + 12);
              ctx1.font = randomword + "rpx Arial";
              var str = str1[a];

              ctx1.fillText(str, (wx.getSystemInfoSync().windowWidth * 0.9 - ctx1.measureText(str).width) / 2, 50 + a * 28);
            }
            if (a % 2 == 0) {
              var randomword = Math.round(Math.random() * 8 + 14);
              ctx1.font = randomword + "rpx Arial bolder";
              var str = str1[a];

              ctx1.fillText(str, (wx.getSystemInfoSync().windowWidth * 0.9 - ctx1.measureText(str).width) / 2, 50 + a * 28);
              // console.log(ctx1.measureText(str).width * 1.2)
              // console.log(wx.getSystemInfoSync().windowWidth)
            }
          }
        }
        if (str1.length >= 6) {
          for (var a = 0; a < str1.length; a++) {
            if (a % 2 != 0) {
              var randomword = Math.round(Math.random() * 8 + 14);
              ctx1.font = randomword + "rpx Arial bolder";
              var str = str1[a];
              ctx1.fillText(str, (wx.getSystemInfoSync().windowWidth * 0.9 - ctx1.measureText(str).width) / 2, 40 + a * 25);
            }
            if (a % 2 == 0) {
              var randomword = Math.round(Math.random() * 8 + 12);
              ctx1.font = randomword + "rpx Arial";
              var str = str1[a];

              ctx1.fillText(str, (wx.getSystemInfoSync().windowWidth * 0.9 - ctx1.measureText(str).width) / 2, 40 + a * 25);
              // console.log(ctx1.measureText(str).width * 1.2)
              // console.log(wx.getSystemInfoSync().windowWidth)
            }
          }
        }
        ctx1.font = "10rpx Arial";
        // console.log(res.data)
        // var str1 = a.replace(/\%name/g, res.data);

        var bottom = "——2018年 " + res.data[0] + " 的故事";
        ctx1.fillText(bottom, (wx.getSystemInfoSync().windowWidth * 0.9 - ctx1.measureText(bottom).width) / 2, wx.getSystemInfoSync().windowHeight * 0.48);
        
        if (app.globalData.dog_version == 1.2 ){
        ctx1.drawImage("../../image/2dc.png", (wx.getSystemInfoSync().windowWidth * 0.9 - ctx1.measureText(bottom).width) / 2 + ctx1.measureText(bottom).width + 40, wx.getSystemInfoSync().windowHeight * 0.48 - 25, 30, 30)
      }
        //  ctx1.drawImage("../../image/2dc.png", 0,0,200,100)
        ctx1.draw()
        setTimeout(function () {
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            canvasId: 'firstCanvas',
            complete: function (res) {
              console.log(res.tempFilePath)
              var picturearr = [res.tempFilePath]
              that.setData({
                picture: picturearr,
                picture1: res.tempFilePath
              })
            },
            fail: function (res) {
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onLoad();
            }
          })
        }, 500)

      },
    })

    
 
     
  },
  previewImg: function (e) {
    var that = this;
    wx.previewImage({
      current: that.data.picture,
      urls: that.data.picture, // 需要预览的图片http链接列表      //当前图片地址
      success: function (res) {

      },
    })
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

})