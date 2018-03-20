$(function(){
    /*加载页面数据*/
    newsDetails();
});


/**
 * newsDetails() 显示新闻详情
 */
function newsDetails(){
    var url = window.location.href;
    var ids = url.split("?")[1].split("&");
    if(ids.length < 3){
        alert("无法正常显示新闻页面，请求参数错误。");
    }else{
        var itemId = ids[0].split("=")[1];
        var docid = ids[1].split("=")[1];

        loadNews(itemId,docid);
    }

    //返回按钮
    $("#back_btn").click(function(){
        history.back();
    })
};

/**
 * loadNews(itemId,docid) 加载新闻详情
 * 参数说明: itemId 是新闻上级菜单编号 ，docid 新闻编号
 */
function loadNews(itemId,docid){
    var request = $.ajax({
        url: "../data/" + itemId,
        type: "GET",
        dataType: 'json',  //类型
        timeout: 3000 
    });
    request.success(function(data) {//得到新闻数据

        //文章属性
        var title = data[docid].title;//文章标题
        var source = data[docid].source;//该篇文章的新闻来源
        var ptime = data[docid].date;//文章发布时间
        var body = data[docid].content;//文章正文内容
					
        //var img = data[docid].img;//文章正文图片，是一段数组json
        $(".news_title").html(title);
        $(".source").html(source);
        $(".time").html(ptime);
        $(".bottompart").html(body);
					
        newsUploadData(docid,title,itemId);//新闻上报
    });
    request.error(function(){
        console.dir("无法获取资源");
    });

};


/**
 * newsUploadData(docid,title,resType) 新闻上报
 * 参数说明: docid 是资源编号;
 *           title 资源名称;
 *           resType 资源类型(例如：新闻头条 0301)
 */
function newsUploadData(docid,title,resType){
    $.shangjiao.uploadData({
        resId:docid,
        resName:title,
        resType:resType,
        view:1,
        click:1,
        flag:0
    }, function() {
    });
};