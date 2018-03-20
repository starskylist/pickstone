(function($) {
	$.shangjiao = {};
	//上报数据
	$.shangjiao.uploadData = function (settings, callback) {
		var options = {
			user : "",//用户
			resId : "",//资源编号
			resName : "",//资源名称
			resType : "",//资源类型
			click : 0,//点击次数
			view : 0,//浏览次数
			playDuration : 0,//播放时长
			totalDuration:0,//总时长
			flag : 0,//类别(0：普通资源，1：菜单，2：视频)
			from :""//从哪来
    	};
		$.extend(options, settings);
		console.log(options);
		$.post("../../common/api/upload_data.php", options,
			function(data,status){
                if(typeof callback == "function"){callback(data);}
			},
			"json"
		);
	};

})(jQuery);