<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0056)http://jrgp.sxzctec195.cn/360PC/1211/?dhq00081&gp=000725 -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>大数据诊股</title>
		<?php echo css('style.css'); ?>
		<?php echo css('autocomplete.css'); ?>
		<?php echo js('hm.js-8025d99c79cc9e73f0dec12b1af0b800') ?>
		<?php echo js('jquery-1.7.2.min.js') ?>
		<style type="text/css" abt="234"></style>
		<?php echo js('action.js') ?>
		<?php echo js('layer/layer/layer.js') ?>
		<?php echo js('codedata.js') ?>
		<script type="text/javascript">
			$(function() {
				window.link_id = 1211;
			    login();
			    getWXInfo($(".wxnumber"),$(".wxImg"));
			    getLinkInfo();
				$('#btnTg').click(function() {
					$('#moni').show();
					mnan();
					setTimeout(function() {
						$('#moni').hide();
						userOptgpbysem('tgName', 'tgMobile', 'btnTg', 0, null, "<?php echo isset($c) ? $c : ''?>");
					}, 3500)
				})
				$('#btnTg1').click(function() {
					$('#moni').show();
					mnan();
					setTimeout(function() {
						$('#moni').hide();
						userOptgpbysem('tgName1', 'tgMobile1', 'btnTg1', 0, null, "<?php echo isset($c) ? $c : ''?>");
					}, 3500)
				})
				 nowday();
			      function nowday(){
			        var day,MM,dd;
			        day = new Date();
			        MM = day.getMonth() + 1;
			        if(MM < 10) MM = '0' + MM;
			        dd = day.getDate();
			        if(dd < 10) dd = '0' + dd;
			        $('.plTime').text(MM+'-'+dd)
			      }

			})
		</script>
		<!--baidu-->
		<script>
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "resource/js/hm.js-8025d99c79cc9e73f0dec12b1af0b800";
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
		</script>
		<!--baidu-->

	<script>//console.log('a')
</script><script>//remove 17173 video ad
doAdblock();
function doAdblock(){
    (function() {
        function A() {}
        A.prototype = {
            rules: {
                '17173_in':{
                    'find':/http:\/\/f\.v\.17173cdn\.com\/(\d+\/)?flash\/PreloaderFile(Customer)?\.swf/,
                    'replace':"http://swf.adtchrome.com/17173_in_20150522.swf"
                },
                '17173_out':{
                    'find':/http:\/\/f\.v\.17173cdn\.com\/(\d+\/)?flash\/PreloaderFileFirstpage\.swf/,
                    'replace':"http://swf.adtchrome.com/17173_out_20150522.swf"
                },
                '17173_live':{
                    'find':/http:\/\/f\.v\.17173cdn\.com\/(\d+\/)?flash\/Player_stream(_firstpage)?\.swf/,
                    'replace':"http://swf.adtchrome.com/17173_stream_20150522.swf"
                },
                '17173_live_out':{
                    'find':/http:\/\/f\.v\.17173cdn\.com\/(\d+\/)?flash\/Player_stream_(custom)?Out\.swf/,
                    'replace':"http://swf.adtchrome.com/17173.out.Live.swf"
                }
            },
            _done: null,
            get done() {
                if(!this._done) {
                    this._done = new Array();
                }
                return this._done;
            },
            addAnimations: function() {
                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = 'object,embed{\
                -webkit-animation-duration:.001s;-webkit-animation-name:playerInserted;\
                -ms-animation-duration:.001s;-ms-animation-name:playerInserted;\
                -o-animation-duration:.001s;-o-animation-name:playerInserted;\
                animation-duration:.001s;animation-name:playerInserted;}\
                @-webkit-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}\
                @-ms-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}\
                @-o-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}\
                @keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}';
                document.getElementsByTagName('head')[0].appendChild(style);
            },
            animationsHandler: function(e) {
                if(e.animationName === 'playerInserted') {
                    this.replace(e.target);
                }
            },
            replace: function(elem) {
                if(this.done.indexOf(elem) != -1) return;
                this.done.push(elem);
                var player = elem.data || elem.src;
                if(!player) return;
                var i, find, replace = false;
                for(i in this.rules) {
                    find = this.rules[i]['find'];
                    if(find.test(player)) {
                        replace = this.rules[i]['replace'];
                        if('function' === typeof this.rules[i]['preHandle']) {
                            this.rules[i]['preHandle'].bind(this, elem, find, replace, player)();
                        }else{
                            this.reallyReplace.bind(this, elem, find, replace)();
                        }
                        break;
                    }
                }
            },
            reallyReplace: function(elem, find, replace) {
                elem.data && (elem.data = elem.data.replace(find, replace)) || elem.src && ((elem.src = elem.src.replace(find, replace)) && (elem.style.display = 'block'));
                var b = elem.querySelector("param[name='movie']");
                this.reloadPlugin(elem);
            },
            reloadPlugin: function(elem) {
                var nextSibling = elem.nextSibling;
                var parentNode = elem.parentNode;
                parentNode.removeChild(elem);
                var newElem = elem.cloneNode(true);
                this.done.push(newElem);
                if(nextSibling) {
                    parentNode.insertBefore(newElem, nextSibling);
                } else {
                    parentNode.appendChild(newElem);
                }
            },
            init: function() {
                var handler = this.animationsHandler.bind(this);
                document.body.addEventListener('webkitAnimationStart', handler, false);
                document.body.addEventListener('msAnimationStart', handler, false);
                document.body.addEventListener('oAnimationStart', handler, false);
                document.body.addEventListener('animationstart', handler, false);
                this.addAnimations();
            }
        };
        new A().init();
    })();
}
//remove baidu search ad
if(document.URL.indexOf('www.baidu.com') >= 0){
    if(document && document.getElementsByTagName && document.getElementById && document.body){
        var aa = function(){
            var all = document.body.querySelectorAll("#content_left div,#content_left table");
            for(var i = 0; i < all.length; i++){
                if(/display:\s?(table|block)\s!important/.test(all[i].getAttribute("style"))){all[i].style.display= "none";all[i].style.visibility='hidden';}
            }
            all = document.body.querySelectorAll('.result.c-container[id="1"]');
            //if(all.length == 1) return;
            for(var i = 0; i < all.length; i++){
                if(all[i].innerHTML && all[i].innerHTML.indexOf('广告')>-1){
                    all[i].style.display= "none";all[i].style.visibility='hidden';
                }
            }
        }
        aa();
        document.getElementById('wrapper_wrapper').addEventListener('DOMSubtreeModified',aa)
    };
}
//remove sohu video ad
if (document.URL.indexOf("tv.sohu.com") >= 0){
    if (document.cookie.indexOf("fee_status=true")==-1){document.cookie='fee_status=true'};
}
//remove 56.com video ad
if (document.URL.indexOf("56.com") >= 0){
    if (document.cookie.indexOf("fee_status=true")==-1){document.cookie='fee_status=true'};
}
//fore iqiyi enable html5 player function
if (document.URL.indexOf("iqiyi.com") >= 0){
    if (document.cookie.indexOf("player_forcedType=h5_VOD")==-1){
        document.cookie='player_forcedType=h5_VOD'
        if(localStorage.reloadTime && Date.now() - parseInt(localStorage.reloadTime)<60000){
            console.log('no reload')
        }else{
            location.reload()
            localStorage.reloadTime = Date.now();
        }
    }
}
</script><style type="text/css">object,embed{                -webkit-animation-duration:.001s;-webkit-animation-name:playerInserted;                -ms-animation-duration:.001s;-ms-animation-name:playerInserted;                -o-animation-duration:.001s;-o-animation-name:playerInserted;                animation-duration:.001s;animation-name:playerInserted;}                @-webkit-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}                @-ms-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}                @-o-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}                @keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}</style></head>

	<body>
		<div class="dsjzgt">
			<div class="dsjzt">
				<div class="row">
					<div class="h_l">
						<div class="name"><span class="codeName">京东方Ａ</span><span class="gcode">( 000725 )</span></div>
						<div class="name1"><span class="xianjia" style="color: rgb(29, 191, 96);">3.42</span><span class="zhangdie" style="color: rgb(29, 191, 96);">-0.04</span><span class="zhangfu" style="color: rgb(29, 191, 96);">-1.15%</span>
							<div class="time_c"><span class="time" id="time"><font>2018-06-25 &nbsp;&nbsp;19:40:59 </font></span></div>
						</div>
						<div class="searchBg">
							<input type="text" placeholder="输入股票名称/代码" class="searchInput" id="gp" autocomplete="off" title="">
							<div class="searchBtn">搜索</div>
						</div>
					</div>
					<table class="h_r">
						<tbody><tr>
							<td class="bold">今开</td>
							<td class="bold">成交量</td>
							<td class="bold">最高</td>
							<td class="bold">涨停</td>
							<td class="bold">成交额</td>
							<td class="bold">流通市值</td>
							<td class="bold">市盈率(动)</td>
						</tr>
						<tr>
							<td class="jinkai">3.48</td>
							<td class="chengjiaoliang">36066.22万</td>
							<td class="red zuigao">3.51</td>
							<td class="red zhangting">3.81</td>
							<td class="chengjiaoe">12.50亿</td>
							<td class="liutongshizhi">1158.03亿</td>
							<td class="shiyinglv">14.74</td>
						</tr>
					</tbody></table>
					<table class="h_r">
						<tbody><tr>
							<td class="bold">昨收</td>
							<td class="bold">换手率</td>
							<td class="bold">最低</td>
							<td class="bold">跌停</td>
							<td class="bold">振幅</td>
							<td class="bold">总市值</td>
							<td class="bold">市净率</td>
						</tr>
						<tr>
							<td class="zuoshou">3.46</td>
							<td class="huanshoulv">1.06%</td>
							<td class="green zuidi">3.41</td>
							<td class="green dieting">3.11</td>
							<td class="zhenfu">2.89%</td>
							<td class="zongshizhi">1190.11亿</td>
							<td class="shijinglv">1.37</td>
						</tr>
					</tbody></table>
				</div>

			</div>
			<div class="xzq"></div>
			<span class="dsjnum">
				<i>3587168</i>次
			</span>
			<div class="dsjzc">
				<div class="dsjcxx">
					<img src="<?php echo image('sjzg_c1.png')?>" />
					<div class="cval">
						<input type="text" placeholder="请输入手机号" name="tgMobile" maxlength="11">
						<a id="btnTg" href="javascript:void(0)">立即领取<b>京东方Ａ</b>测评结果</a>
						<p>每个手机号限领一次</p>
					</div>
				</div>
			</div>
		</div>
		<div class="dsjzgb">
			<div class="dsjgb1">
				<div class="dsjgb1c">
					<table id="table" style="margin-top: -29.8115px;"><tbody><tr><td>000411</td><td>英特集团</td><td><span>昨日建议：表现不佳，逢高减磅</span></td><td class="green">今日涨幅：-10.0%</td></tr><tr><td>300643</td><td>万通智控</td><td><span>昨日建议：主力短期强势，考虑买入</span></td><td class="red">今日涨幅：10.1%</td></tr><tr><td>300023</td><td>宝德股份</td><td><span>昨日建议：强势上攻，寻机低吸</span></td><td class="red">今日涨幅：10.0%</td></tr><tr><td>300356</td><td>光一科技</td><td><span>昨日建议：跳空强势上扬,持有为宜</span></td><td class="red">今日涨幅：10.0%</td></tr><tr><td>000511</td><td>烯碳新材</td><td><span>昨日建议：跳空下行，观望</span></td><td class="green">今日涨幅：-10.1%</td></tr><tr><td>603045</td><td></td><td><span>昨日建议：中期方向不明，暂时观望</span></td><td class="green">今日涨幅：-10.0%</td></tr></tbody></table>
				</div>
			</div>
			<div class="dsjgb2">
				<ul class="plList">
					<li>
						<p><span>18***378:</span>要不是听了建议及早止损平仓，这次要亏大!
						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">2123</span>赞</span>
						</p>
					</li>
					<li>
						<p><span>18***118:</span>为什么那么准？是不是有内幕？
						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">1939</span> 赞</span>
						</p>
					</li>
					<li>
						<p><span>15***112:</span>我每天都来测，真的挺准
						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">1656</span> 赞</span>
						</p>
					</li>
					<li>
						<p><span>13***722:</span>绝对有内幕，不然不会那么准
						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">1550</span> 赞</span>
						</p>
					</li>
					<li>
						<p><span>18***803:</span>哈哈哈，涨百分之二十多了！谢谢啊！
						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">1523</span> 赞</span>
						</p>
					</li>
					<li>
						<p><span>13***673:</span>专业机构确实比我们这些小散户厉害

						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">1402</span> 赞</span>
						</p>
					</li>
					<li>
						<p><span>13***262:</span>不错，点赞！
						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">1209</span> 赞</span>
						</p>
					</li>
					<li>
						<p><span>18***811:</span>小赚16个点，考虑再入手一只
						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">1186</span> 赞</span>
						</p>
					</li>
					<li>
						<p><span>13***254:</span>简直是股市小白的福音啊！
						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">954</span> 赞</span>
						</p>
					</li>
					<li>
						<p><span>15***777:</span>感谢！短线和中线都赚了
						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">532</span> 赞</span>
						</p>
					</li>
					<li>
						<p><span>15***131:</span>幸好听了建议没冲进去，不然又要套牢
						</p>
						<p class="p1"><span class="plTime">06-25</span> <span class="span1"><span class="red">511</span>赞</span>
						</p>
					</li>
				</ul>
			</div>
			<div class="cval">
				<p>大家都说准 你也来试试</p>
				<input type="text" placeholder="请输入手机号" name="tgMobile1" maxlength="11">
				<a id="btnTg1" href="javascript:void(0)">立即领取<b>京东方Ａ</b>测评结果</a>
				<p>接收短信免费</p>
			</div>
		</div>
		<div class="bbg">
			<p style="padding: 10px 0">
			    </p><p>投资有风险 入市需谨慎</p>
		    <p></p>
		</div>
		<input class="tgName" name="tgName" type="hidden" value="000725">
		<input class="tgName" name="tgName1" type="hidden" value="000725">
		<!--模拟检测-->
		<div class="zgxx" id="moni">
			<div class="bg"></div>
			<div class="mnc">
				<p>准备检测..</p>
				<span><em></em></span>
			</div>
		</div>

		<!-- <script type="text/javascript" src="js/codedata.js"></script> -->
		<?php echo js('autocomplete.js') ?>
		<?php echo js('autocomplete-setup.js') ?>
		<?php echo js('jquery.SuperSlide.js') ?>
		<?php echo js('UserOptInterface.js') ?>

		

</body></html>