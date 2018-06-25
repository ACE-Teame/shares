<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
<meta name="screen-orientation" content="portrait">
<title>股票涨跌诊断</title>
<?php echo css('ui-dialog.css') ?>
<?php echo css('style.css') ?>
</head>

<body>
<div><img src="<?php echo image('zd_top.jpg')?>" /></div>
<div class="zd_con">
	<div class="zdt">
		<form id="pop-form">
			<!-- <input value="诊股评测" name="category" type="hidden" > -->
			<span class="gpdm">
			<input id="stock_code" name="stock_code"  placeholder="请输入股票代码" type="text" class="inp" >
			<div style="margin-bottom: 10px"></div>
			<input id="title" name="username" placeholder="请输入您的姓名" type="text" class="inp" >
				<div style="margin-bottom: 10px"></div>
				 <input  id="phone"  name="phone" placeholder="请输入手机号" type="text" class="inp">
			</span>
			<!--<button  class="but" id="newSubmit1">立即诊股</button>-->
			<input value="立即诊股" type="button" onclick="submit_form('pop-form')" class="xx">
			<input type="hidden" name="is_submit" value="1">
			<input type="hidden" name="c" value="<?php echo $c;?>" >
		</form>
	</div>
	<div class="zdp">
		<p>累计评测 <b class="b1">0</b>次/今日累计评测 <b class="b2">0</b> 次</p>
	</div>
</div>
<div class="zdc1">
	<img src="<?php echo image('zd_c1.jpg')?>"/>
	<div id="scrollDiv">
		<table border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td>黄先生</td>
				<td>150****7789</td>
				<td>诊断：30****</td>
				<td>结果：<font class="red">逢低吸筹</font></td>
			</tr>
			<tr>
				<td>刘先生</td>
				<td>135****3111</td>
				<td>诊断：00****</td>
				<td>结果：<font class="green">逢高减仓</font></td>
			</tr>
			<tr>
				<td>张先生</td>
				<td>189****1592</td>
				<td>诊断：60****</td>
				<td>结果：<font class="red">持股待涨</font></td>
			</tr>
			<tr>
				<td>姚女士</td>
				<td>150****3326</td>
				<td>诊断：00****</td>
				<td>结果：<font class="red">持股待涨</font></td>
			</tr>
			<tr>
				<td>毛先生</td>
				<td>159****6522</td>
				<td>诊断：30****</td>
				<td>结果：<font class="green">逢高减仓</font></td>
			</tr>
			<tr>
				<td>陈先生</td>
				<td>183****3998</td>
				<td>诊断：30****</td>
				<td>结果：推荐持有</td>
			</tr>
			<tr>
				<td>李小姐</td>
				<td>158****2566</td>
				<td>诊断：60****</td>
				<td>结果：长线持有</td>
			</tr>
			<tr>
				<td>钟先生</td>
				<td>189****6622</td>
				<td>诊断：60****</td>
				<td>结果：<font class="red">逢低吸筹</font></td>
			</tr>
			<tr>
				<td>唐女士</td>
				<td>137****2580</td>
				<td>诊断：00****</td>
				<td> 结果：<font class="red">持股待涨</font></td>
			</tr>
			<tr>
				<td>季女士</td>
				<td>188****1129</td>
				<td>诊断：30****</td>
				<td>结果：继续持有</td>
			</tr>
		</table>
	</div>
</div>
<div class="zdc2">
	<img src="<?php echo image('zd_c21.jpg')?>"/>
	<img src="<?php echo image('zd_c22.jpg')?>"/>
	<img src="<?php echo image('zd_c23.jpg')?>"/>
</div>
<div class="zd_con">
	<div class="zdt">
		<form id="pop-form1">
			<!-- <input value="诊股评测" name="category" type="hidden" > -->
		<span class="gpdm">
		<input id="stock_code" name="stock_code" placeholder="请输入股票代码" type="text" class="inp" >
		<div style="margin-bottom: 10px"></div>
		<input id="title1"   name="username" placeholder="请输入您的姓名" type="text" class="inp" >
			<div style="margin-bottom: 10px"></div>
			 <input  id="phone"  name="phone" placeholder="请输入手机号" type="text" class="inp">
		</span>
			<!--<button  class="but" id="newSubmit1">立即诊股</button>-->
			<input value="立即诊股" type="button" onclick="submit_form('pop-form1')" class="xx">
			<input type="hidden" name="is_submit" value="1">
			<input type="hidden" name="c" value="<?php echo $c;?>" >
		</form>
	</div>
	<div class="zdp">
		<p>累计评测 <b class="b1">0</b>次/今日累计评测 <b class="b2">0</b> 次</p>
	</div>
</div>
<div class="bbg">
	<p>投资有风险 入市需谨慎</p>
	<p>从事证券投资或期货交易，请通过合法证券期货经营机构进行。</p>
	<p>合法机构名单可到中国证监会网站（www.csrc.gov.cn）查询</p>
	<p>杭州顶点财经网络传媒有限公司</p>
</div>
<?php echo js('jquery-1.7.2.min.js') ?>
<?php echo js('textauto.js') ?>
<?php echo js('jquery.js') ?>
<?php echo js('dialog-min.js') ?>
<?php echo js('com.form.js') ?>
<?php echo js('biaodantj.js') ?>
<?php echo js('tmin.js') ?>
<?php echo js('c69110f6339a4d3db1a1d795b073bc05.js') ?>
<script type="text/javascript">var ipaddress=returnCitySN["cname"];</script>
<?php echo js('z_stat.js') ?>

<script>
	var submit_flag = false;
	function submit_form(id)
	{
		if (submit_flag == false) {
			submit_flag = true;
			$.post("<?php echo base_url('index/submitContect')?>", $("#"+id).serialize(), function(data) {
				if (data.status == 200) {
					alert('提交成功');
					location.reload();
				} else {
					submit_flag = false;
					alert(data.msg);
				}
			}, 'JSON');
		} else {
			alert('如长时间无响应，请刷新重试');
		}
	}
</script>
<!--百度统计end-->
</body>
</html>
