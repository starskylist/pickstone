
$(function(){
     //�ж��û��Ƿ���֤��
    var userInfo = getQueryString("userInfo");

    /*��ҳ�˵������¼�*/
    MenuClick(userInfo);

    /*��ת����ҳ*/
    $(".menu-btn").click(function(){
        var resId = "02";
        var resName = "��ҳ";
        var resType = resId;
        $.shangjiao.uploadData({
            resId:resId,
            resName:resName,
            resType:resType,
            click:1,
            flag:1//��Դ����Ϊ�˵���0����ͨ��Դ��1���˵���2����棩
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
 *  MenuClick(userInfo) ��ҳһ���˵��İ�ť�¼����
 *  ����˵���� userInfo  �ж��û��Ƿ���֤��
 */
function MenuClick(userInfo){
    /* ���� */
    $("#news").click(function(){
        var user = userInfo;
        var resId = "03";
        var resName = "����";
        var resType = resId;
        $.shangjiao.uploadData({
            user:user,
            resId:resId,
            resName:resName,
            resType:resType,
            click:1,
            flag:1//��Դ����Ϊ�˵���0����ͨ��Դ��1���˵���
        }, function() {
            if(userInfo){
                window.location.href = "../../news/web/news.html?userInfo="+userInfo;
            }else{
                window.location.href = "../../news/web/news.html";
            }
        });

    });

    /* ��Ƶ */
    $("#video").click(function(){
        var user = userInfo;
        var resId = "04";
        var resName = "Ӱ��";
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



