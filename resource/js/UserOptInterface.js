function isMobile(phone){
	var phoneReg = /^1[3,4,5,6,7,8]\d{9}$/;
	if(!phoneReg.test(phone)) {
		return false;
	}
	return true;
}

function userOptgpbysem(nameBox, mobileBox,codeBtn,opType,tips, c) {
if(typeof(tips) == "undefined"){
		tips="您已操作成功！客服人员会电话联系您，请稍作等待！";
		}
	var name=$.trim($("[name='"+nameBox+"']").val());
	var mobile = $.trim($("[name='"+mobileBox+"']").val());
	
	if(name == null || name=="" ){
		layer.tips("请填写完整信息", $("[name='"+nameBox+"']"), {tips: [1, '#fcc000'],time:3000});
		return;
    }
	if(mobile == null || mobile=="" ){
		layer.tips("请填写手机号码", $("[name='"+mobileBox+"']"), {tips: [1, '#fcc000'],time:3000});
		return;
    }
	if(!isMobile(mobile)){
    layer.tips("请输入有效格式的手机号码！", $("[name='"+mobileBox+"']"), {tips: [1, '#fcc000'],time:3000});
      return;
    }
	var loadi = layer.load(1,{shade: [0.4,'#000']});;

    if (codeBtn == 'btnTg') {
        var form_position = 'up';
    } else {
        var form_position = 'down';
    }
	var params={ "link_id": window.link_id,"mobile":mobile,"Reserve1":name, "c" : c, "form_position" : form_position};
	window.phone = mobile;
     //var url = "http://tginterface.songyutech.com/StatisticsInterface/UserOpt";
    var url = "http://web.com/shares/index/submitContect";
    $.ajax({
            url: url,
            type: "POST",
            data: params,
            dataType: "json",
            success: function(data){

		layer.close(loadi);
		layer.confirm(data.msg, {
			btn: ['确定'] //按钮
		}, function() {
			window.location.reload()
		});
		return;
		switch (data.ret)
         {
            case "0":
				presstj(0);
				layer.confirm(tips, {
					btn: ['确定'] //按钮
				}, function() {
					window.location.reload()
				});
            	break;
			case "1":
			  	layer.tips("手机号码格式错误！", $("[name='"+mobileBox+"']"), {tips: [1, '#fcc000'],time:3000});
			  	break;
			case "2":
				layer.confirm(tips, {
					btn: ['确定'] //按钮
				}, function() {
					window.location.reload()
				});
			  	//layer.tips("您已操作成功， 无需再次操作！", $("#"+codeBtn), {tips: [1, '#fcc000'],time:3000});
			  	break;
			// case "3":
			// 	layer.tips("您今天已经提交了3个号码了！", $("#"+codeBtn), {tips: [1, '#fcc000'],time:3000});
			// 	break;
			 default:
			  	layer.tips("操作失败！", $("#"+codeBtn), {tips: [1, '#fcc000'],time:3000});
			  	break;
			}
			},
            error: function(data) {
                // alert("2")
            }

	});
}