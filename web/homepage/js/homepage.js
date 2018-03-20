
$(function(){
     //判断用户是否认证过
    var userInfo = getQueryString("userInfo");

    /*主页菜单单击事件*/
    MenuClick(userInfo);

    /*跳转到主页*/
    $(".menu-btn").click(function(){
        var resId = "02";
        var resName = "首页";
        var resType = resId;
        $.shangjiao.uploadData({
            resId:resId,
            resName:resName,
            resType:resType,
            click:1,
            flag:1//资源类型为菜单（0：普通资源，1：菜单，2：广告）
        }, function() {
            if(userInfo){
                window.location.href = "../../homepage/web/homePage.html?userInfo="+userInfo;
            }else{
                window.location.href = "../../homepage/web/homePage.html";
            }
        });

    });
});
                
/**
 *  MenuClick(userInfo) 首页一级菜单的按钮事件点击
 *  参数说明： userInfo  判断用户是否认证过
 */
function MenuClick(userInfo){
    /* 新闻 */
    $("#news").click(function(){
        var user = userInfo;
        var resId = "03";
        var resName = "新闻";
        var resType = resId;
        $.shangjiao.uploadData({
            user:user,
            resId:resId,
            resName:resName,
            resType:resType,
            click:1,
            flag:1//资源类型为菜单（0：普通资源，1：菜单）
        }, function() {
            if(userInfo){
                window.location.href = "../../news/web/news.html?userInfo="+userInfo;
            }else{
                window.location.href = "../../news/web/news.html";
            }
        });

    });

    /* 视频 */
    $("#video").click(function(){
        var user = userInfo;
        var resId = "04";
        var resName = "影音";
        var resType = resId;
        $.shangjiao.uploadData({
            user:user,
            resId:resId,
            resName:resName,
            resType:resType,
            click:1,
            flag:1
        }, function() {
            if(userInfo){
                window.location.href = "../../video/web/video.html?userInfo="+userInfo;
            }else{
                window.location.href = "../../video/web/video.html";
            }
        });

    });
};



