var submit_url = "http://web.com/git_project/shares/index/submitContect";

//其他的股票信息 市净率 总市值
function getSjvAndZsz(code) {
    if (parseInt(code) > 600000) {
        var url = 'http://nuff.eastmoney.com/EM_Finance2015TradeInterface/JS.ashx?id=' + code + '1&token=4f1862fc3b5e77c150a2b985b12db0fd&cb=jQ&_=1508394368154';
    } else {
        var url = 'http://nuff.eastmoney.com/EM_Finance2015TradeInterface/JS.ashx?id=' + code + '2&token=4f1862fc3b5e77c150a2b985b12db0fd&cb=jQ&_=1508394368154';
    }
    return url
}

function getStockBaseInfo(code) {
    var url1 = 'http://qd.10jqka.com.cn/quote.php?cate=real&type=stock&return=json&callback=showStockData&code=' + code;
    return url1;
}

 function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var q = window.location.pathname.substr(1).match(reg_rewrite);
    if(r != null){
        return unescape(r[2]);
    }else if(q != null){
        return unescape(q[2]);
    }else{
        if(name=='stockno'){return '000002';}
        else{return null}
    }
}


//两会申请信息
function doAjaxJgMsg(phoneNum, otherInfo, msg) {
    var expreg = /^1\d{10}$/;
    if (!expreg.test(phoneNum)) {
        layer.msg('请您填写正确的电话号码');
        return
    }
    //设置默认 otherInfo和Msg 
    if (!otherInfo) {
        var otherInfo = '贸易战受益牛股';
    }
    if (!msg) {
        var msg = 'JJUm613Y7Hrrw13QGGTVB1M07oVSglT5ZIutlIMIwoslwuP3ZH9IPGu09Ht5gLNgLluk8v4COmMjwu-VuvrQmovujH_OmO4R11rQFIG3ZH9HsN-OI13N=='
    }
    $.ajax({
        url: submit_url,
        type: 'post',
        data: {
            kind: 1,
            phoneNum: phoneNum,
            otherInfo: otherInfo,
            msg: msg
        },
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        error: function(e) {
            layer.msg('服务器错误，请稍后再试');
        },
        success: function(res) {
            if (res.statusCode == 1) {
                var pageInfo = {
                    phoneNum: phoneNum,
                    pageType: "jg"
                };
                goLinkPage(pageInfo);
            } else if (res.statusCode == -1) {
                layer.msg(res.message);
                $('.banner_window,.bannerPc_window,.zhegai').hide();
            } else {
                layer.msg(res.message);
                $('.banner_window,.bannerPc_window,.zhegai').hide();
            }
        }
    });
}
/*下滑的时候出现吸底 点击弹窗等功能*/
function bannerShow() {
    $('head').append('<link rel="stylesheet" type="text/css" href="../../Content/Css/banner.css?v='+Math.random()+'">');
    var banner_html = '<div class="banner_window" style="display: none;">\n' + '    <div class="banner_close"></div>\n' +
        // '    <div class="s-zg-title" style="position:absolute;top:240px;width:100%;font-size:28px;text-align: center;">每个手机号限领一次</div>\n' +
        '    <input class="banner_input center" placeholder="请输入接收短信手机号码"  maxlength="11"  type="tel">\n' + '    <div class="banner_btn center bold" id="btn_tg8"></div>\n' + '    <div class="promise center promise_color2">中富金石郑重承诺：绝不泄露用户的个人信息</div>\n' + '</div>\n<div class="banner_a" id="bannerAd_btn"></div>\n'
    var banner_confirm = '<div class="banner_stay" style="display: none;">' + '<p class="banner_stay_txt">您确定要放弃这次让<span>资产翻倍</span>的机会吗？</p>' + '<p class="banner_refuse"></p>' + '<p class="banner_accept"></p>' + '</div>'
    $('body').append(banner_html);
    $('body').append(banner_confirm);
    $('.banner_a').on('click', function() {
        zfSendStep("step1A");
        $('.banner_window,.zhegai').show();
    });
    var flag_banner = 1;
    $(window).scroll(function() {
        var p = $(this).scrollTop();
        var banner_a = $(".banner_a");
        if (p > 200) {
            banner_a.show();
            if (flag_banner) {
                flag_banner = 0;
                zfSendStep("step2");
            }
        } else {
            banner_a.hide();
        }
    });
    $('.banner_close').click(function() {
        $('.banner_window').hide();
        $('.banner_stay').show();
    });
    $('.banner_btn').on('click', function() {
        zfSendStep("step3");
        var phoneNum = $('.banner_input').val();
        doAjaxJgMsg(phoneNum);
    });
    $('.zhegai').on('click', function() {
        if ($('.banner_window').css('display') == 'block') {
            $('.banner_close').click();
        }
    });
    //confirm拒绝
    $('.banner_refuse').on('click', function() {
        $('.banner_stay,.zhegai').hide();
    });
    //confirm接受
    $('.banner_accept').on('click', function() {
        $('.banner_stay').hide();
        $('.banner_window').show();
    });
     // $(".banner_a").hide();
     // $('.main').css('padding-bottom','0');
}

//pc版 banner相关功能
function bannerShowForPc() {
    $('head').append('<link rel="stylesheet" type="text/css" href="../../Content/Css/banner.css?v='+Math.random()+'">');
    var banner_html = '<div class="bannerPc_window">\n' + '    <div class="bannerPc_close"></div>\n' +
        // '    <div class="s-zg-title" style="position:absolute;top:240px;width:100%;font-size:28px;text-align: center;">每个手机号限领一次</div>\n' +
        '    <input class="bannerPc_input center" placeholder="请输入接收短信手机号码"  maxlength="11"  type="tel">\n' + '    <div class="bannerPc_btn center bold" id="btn_tg8"></div>\n' + '    <div class="promise center promise_color2">中富金石郑重承诺：绝不泄露用户的个人信息</div>\n' + '</div>\n<div class="bannerPc_a" id="bannerAdPc_btn"></div>\n'
    var banner_confirm = '<div class="banner_stay" style="display: none;">' + '<p class="banner_stay_txt">您确定要放弃这次让<span>资产翻倍</span>的机会吗？</p>' + '<p class="banner_refuse"></p>' + '<p class="banner_accept"></p>' + '</div>'
    $('body').append(banner_html);
    $('body').append(banner_confirm);
    $('.bannerPc_a').on('click', function() {
        zfSendStep("step1A");
        $('.bannerPc_window,.zhegai').show();
    });

    var banner_a = $(".bannerPc_a");
    banner_a.show();            
      
    $('.bannerPc_close').click(function() {
        $('.bannerPc_window').hide();
        $('.banner_stay').show();
    });
    $('.bannerPc_btn').on('click', function() {
        zfSendStep("step3");
        var phoneNum = $('.bannerPc_input').val();
        doAjaxJgMsg(phoneNum,'世界杯受益牛股');
    });
    $('.zhegai').on('click', function() {
        if ($('.bannerPc_window').css('display') == 'block') {
            $('.bannerPc_close').click();
        }
    });
    //confirm拒绝
    $('.banner_refuse').on('click', function() {
        $('.banner_stay,.zhegai').hide();
    });
    //confirm接受
    $('.banner_accept').on('click', function() {
        $('.banner_stay').hide();
        $('.bannerPc_window').show();
    });
    // $(".banner_a").hide();
    // $('.main').css('padding-bottom','0');
}
// 查询股票代码和名称
function querySharesName(stockNum) {
    var temp;
    var stockPartton = /^[0-9]{6}$/;
    if (!stockNum) {
        layer.msg('输入股票代码或名称');
        return;
    }
    if (!isNaN(stockNum) && !stockPartton.test(stockNum)) {
        layer.msg('请输入正确的股票代码或名称');
        return;
    }
    $.ajax({
        // url: 'http://www.zx017.net/api/QueryStock',
        url: 'http://web.com/git_project/shares/index/searchStock',
        type: 'post',
        data: {
            nm: stockNum
        },
        async: false,
        dataType: 'json'
    }).done(function(r) {
        if (r.data[0] && r.data[0].StockName) {
            temp = r.data[0];
        } else {
            layer.msg('没有检索到您输入的股票');
        }
    }).fail(function() {
        console.log("error");
    })
    return temp;
}

//概念板块信息封装
function getBlockInfo(name,callback){
    var a = [];
    $.ajax({
        url: '/api/GetStockClassByStock',
        type: 'post',
        data: {
            code:name
        },
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    }).done(function(r) {
        var len = r.data.length < 5 ? r.data.length : 5;
        for(var i=0;i < len;i++){
            var obj = {};
            obj.Name = r.data[i].ClassNm //股票名称
            a[i] = obj
        }
        callback(a);
    }).fail(function() {
        callback(a);
    });
}



//获取股票详细信息
function getStock(code, callback_) {
    var a = {};
    $.ajax({
        url: '/api/GetStockInfo',
        type: 'post',
        data: {
            code: code
        },
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    }).done(function(r) {
        a.name = r.data[0].Name; //股票名称

        a.xianjia = r.data[0].Price.toFixed(2); //现价

        a.zhangdie = r.data[0].Change.toFixed(2); //价格变动

        a.zhangfu = r.data[0].ChangePercent.toFixed(2) + '%'; //变动百分比

        a.jinkai = r.data[0].Open.toFixed(2); //今开

        a.zuigao = r.data[0].Hige.toFixed(2); //最高

        a.zuidi = r.data[0].Low.toFixed(2); //最低

        a.zoushou = r.data[0].Close.toFixed(2); //昨收

        a.chengjiaoliang = (r.data[0].Volume / 100).toFixed(2) + '万'; //成交量

        a.chengjiaoe = (r.data[0].Amount / 100000000).toFixed(2) + '亿'; //成交额

        a.zhenfu = (r.data[0].Amplitude / 1).toFixed(2) + '%'; //振幅

        a.huanshou = (r.data[0].TurnoverRate / 1).toFixed(2) + '%'; //换手

        a.liutongshizhi =(r.data[0].CirculationWorth / 100000000).toFixed(2) + '亿'; //流通市值

        a.shiyinglv = r.data[0].PERatio.toFixed(2); //市盈率

        a.shijinglv = r.data[0].CityNetRate.toFixed(2); //市净率

        a.zongshizhi = (r.data[0].TotalMarketValue / 100000000).toFixed(2) + '亿'; //总市值

        a.Isstop = r.data[0].Isstop ; //是否涨停

        a.zhangting = r.data[0].Max.toFixed(2); //涨停价

        a.dieting = r.data[0].Min.toFixed(2); //跌停价

        callback_(a);
        setStockState(a)
    }).fail(function() {
        callback_(a);
        setStockState(a)
    });
}



//股票信息封装
function getStock2(code, callback) {
    var ajaxFlag1 = 0;
    var ajaxFlag2 = 0;
    var a = {};
    $.ajax({
        url: getStockBaseInfo(code),
        type: 'get',
        dataType: 'jsonp',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    }).done(function(r) {
        if(r.info[code].name){
            a.name = r.info[code].name; //股票名称
        }
        a.code = code; //股票代码
        a.xianjia = r.data[code]["10"]; //现价
        a.zhangdie = r.data[code]['264648'].slice(0, -1); //价格变动
        a.zhangfu = r.data[code]['199112'].slice(0, -1) + '%'; //变动百分比
        a.zhangting = r.data[code]['69']; //涨停
        a.dieting = r.data[code]['70']; //跌停
        a.jinkai = r.data[code]['7']; //今开
        a.zuigao = r.data[code]['8']; //最高
        a.zuidi = r.data[code]['9']; //最低
        a.zoushou = r.data[code]['6']; //昨收
        a.chengjiaoliang = (r.data[code]['13'] / 10000).toFixed(2) + '万'; //成交量
        a.chengjiaoe = (r.data[code]['19'] / 100000000).toFixed(2) + '亿'; //成交额
        a.zhenfu = (r.data[code]['526792'] / 1).toFixed(2) + '%'; //振幅
        a.huanshou = (r.data[code]['1968584'] / 1).toFixed(2) + '%'; //换手
        a.liutongshizhi = (r.data[code]['3475914'] / 100000000).toFixed(2) + '亿'; //流通市值
        a.shiyinglv = (r.data[code]['2034120'] / 1).toFixed(2); //市盈率（动）
        ajaxFlag1 = 1;
        if (ajaxFlag1 && ajaxFlag2) {
            callback(a);
            setStockState(a)
        }
    }).fail(function() {
        ajaxFlag1 = 1;
        if (ajaxFlag1 && ajaxFlag2) {
            callback(a);
            setStockState(a)
        }
    });
    if (parseInt(code) > 600000) {
        var url = 'http://nuff.eastmoney.com/EM_Finance2015TradeInterface/JS.ashx?id=' + code + '1&token=4f1862fc3b5e77c150a2b985b12db0fd&cb=?&_=1508394368154';
    } else {
        var url = 'http://nuff.eastmoney.com/EM_Finance2015TradeInterface/JS.ashx?id=' + code + '2&token=4f1862fc3b5e77c150a2b985b12db0fd&cb=?&_=1508394368154';
    }
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'jsonp',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    }).done(function(r) {
        a.name=r.Value[2]//股票名字
        a.shijinglv = (r.Value[43] / 1).toFixed(2); //市净率
        a.zongshizhi = (r.Value[46] / 100000000).toFixed(2) + '亿'; //总市值
        ajaxFlag2 = 1;
        if (ajaxFlag1 && ajaxFlag2) {
            callback(a);
            setStockState(a)
        }
    }).fail(function() {
        ajaxFlag2 = 1;
        if (ajaxFlag1 && ajaxFlag2) {
            callback(a);
            setStockState(a)
        }
    });
}

//设置股票状态
function setStockState(r){
    //停牌
    if(r.Isstop){
          $('.stockState').text('停牌');
          $('.stockStateContent').removeClass('stockStateNormal').addClass('stockStateStop');
          $('.xianjia').text(r.xianjia);
          $('.zhangfu,.zhangdie,.jinkai,.zuigao,.zuidi,.chengjiaoe,.chengjiaoliang,.huanshou,.zhenfu').text('--');
          $('.zhishu img').remove();
          $('.zhangdie,.zhangfu,.xianjia').css('color', '#fff');
          if($('.xianjia').hasClass('black')){
            $('.zhangdie,.zhangfu,.xianjia').css('color', '#000');
          }
    }
    else{
        $.ajax({
            url: '/api/GetStockStates',
            type: 'post',
            dataType: 'json',
        })
        .done(function(res) {
            $('.stockState').text(res.data[0].strValue);





        })
        .fail(function() {
            console.log("error");
        })
    }   

}
//诊股弹窗文案封装
zgSaticText();

function zgSaticText() {
    $('.s-zg-title').text('每个手机号限领一次');
    $('.s-zg-btn').text('免费查看');
    $('.s-zg-res').text('诊断报告已调取完成');
}
//进度条动画
var spotNum = '';
//判断是pc端还是M站
if (!$('#loadBox').size()) {
    var url = window.location.href;
    if (/\/p\//.test(url)) {
        $('head').append('<link rel="stylesheet" type="text/css" href="../resource/css/progress_p.css">');
    } else {
        $('head').append('<link rel="stylesheet" type="text/css" href="../resource/css/progress_m.css">');
    }
    var loadHtml = '<div class="loadBox" id="loadBox" style="display: none;" >\n' + '    <div class="load_content">\n' + '        <div class="load_title">\n' + '            <div class="load_discuss">正在从<span style="color:#3d8de3">中富金石</span>数据库中调取<span class="kindName">诊断</span>报告<span class="spot">...</span></div>\n' + '            <div class="load_barbox">\n' + '                <div class="load_barline">\n' + '                    <div style="width:0;" class="load_charts"></div>\n' + '                </div>\n' + '            </div>\n' + '        </div>\n' + '    </div>\n' + '</div>';
    $('body').append($(loadHtml));
}
//进度条调用 Popup为Jq的DOM对象
function loadLittle(Popup) {
    var n = '.';
    $("#loadBox").css("display", "block");
    spotNum = setInterval(function() {
        if (n.length < 4) {
            $('.load_discuss .spot').text(n);
            n = n + '.';
        } else {
            n = '.';
            $('.load_discuss .spot').text(n);
        }
    }, 400);
    $(".load_charts").animate({
        width: "100%"
    }, 2000, "", function() {
        hideLittle();
        Popup.show();
    });
}
//结束后隐藏进度条
function hideLittle() {
    clearInterval(spotNum);
    $("#loadBox").hide();
    $(".load_charts").stop(true);
    $(".load_charts").width("0px");
}
//返回保存号码的请求地址
function whichSaveApi() {
    var save = {
        url: submit_url
    }
    return save
}


//在9点到9.30之间返回F
function isNineOclock() {
    var date = new Date();
    if (date.getHours() == 9 && date.getMinutes() <= 25) {
        return true
    }
    return false
}



//挽留功能
if (!$('#confirm_stay').size()) {
    $('head').append('<link rel="stylesheet" type="text/css" href="../resource/css/cssconfirm_m.css">');
    var confirm = '<div class="confirm_stay" id="confirm_stay">\n' + '    <p class="confirm_stay_txt">您确定要放弃这次让<span>资产翻倍</span>的机会吗？</p>\n' + '    <p class="confirm_refuse"></p>\n' + '    <p class="confirm_accept"></p>\n' + '</div>';
    $('body').append(confirm);
}
//confirm拒绝
$('.confirm_refuse').on('click', function() {
    $('.confirm_stay,.zhegai').hide();
})
//confirm接受
$('.confirm_accept').on('click', function() {
    $('.confirm_stay').hide();
    $("[data-v='" + $(this).attr('data-v') + "']").show();
})

//带确认弹窗的cancel事件
function cancelComfirm(t) {
    $(t).parent().css("display", "none");
    $(t).parent().attr('data-v', Math.random());
    $('.confirm_stay').css("display", "block");
    $('.confirm_accept').attr('data-v', $(t).parent().attr('data-v'));
}



//判断是否已经下午收盘（14:50）
function marketClose() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    if (h > 15 || (h == 14 && m >= 50)) {
        return true
    } else {
        return false
    }
}



//根据是否收盘填充文案
todayOrTomorrow()

function todayOrTomorrow() {
    if (marketClose()) {
        $('.todayOrTomorrow').text('明日');
    } else {
        $('.todayOrTomorrow').text('今日');
    }
}

// jquery.base64.js
;(function($) {
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a256 = '',
        r64 = [256],
        r256 = [256],
        i = 0;

    var UTF8 = {
        encode: function(strUni) {
            var strUtf = strUni.replace(/[\u0080-\u07ff]/g, 
                function(c) {
                    var cc = c.charCodeAt(0);
                    return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
                })
                .replace(/[\u0800-\uffff]/g,
                    function(c) {
                        var cc = c.charCodeAt(0);
                        return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
                    });
            return strUtf;
        },
        decode: function(strUtf) {
            var strUni = strUtf.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,
                function(c) {
                    var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
                    return String.fromCharCode(cc);
                })
                .replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,
                    function(c) {
                        var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
                        return String.fromCharCode(cc);
                    });
            return strUni;
        }
    };

    while(i < 256) {
        var c = String.fromCharCode(i);
        a256 += c;
        r256[i] = i;
        r64[i] = b64.indexOf(c);
        ++i;
    }

    function code(s, discard, alpha, beta, w1, w2) {
        s = String(s);
        var buffer = 0,
            i = 0,
            length = s.length,
            result = '',
            bitsInBuffer = 0;

        while(i < length) {
            var c = s.charCodeAt(i);
            c = c < 256 ? alpha[c] : -1;

            buffer = (buffer << w1) + c;
            bitsInBuffer += w1;

            while(bitsInBuffer >= w2) {
                bitsInBuffer -= w2;
                var tmp = buffer >> bitsInBuffer;
                result += beta.charAt(tmp);
                buffer ^= tmp << bitsInBuffer;
            }
            ++i;
        }
        if(!discard && bitsInBuffer > 0) result += beta.charAt(buffer << (w2 - bitsInBuffer));
        return result;
    }

    var Plugin = $.base64 = function(dir, input, encode) {
        return input ? Plugin[dir](input, encode) : dir ? null : this;
    };

    Plugin.btoa = Plugin.encode = function(plain, utf8encode) {
        plain = Plugin.raw === false || Plugin.utf8encode || utf8encode ? UTF8.encode(plain) : plain;
        plain = code(plain, false, r256, b64, 8, 6);
        return plain + '===='.slice((plain.length % 4) || 4);
    };

    Plugin.atob = Plugin.decode = function(coded, utf8decode) {
        coded = coded.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        coded = String(coded).split('=');
        var i = coded.length;
        do {--i;
            coded[i] = code(coded[i], true, r64, a256, 6, 8);
        } while (i > 0);
        coded = coded.join('');
        return Plugin.raw === false || Plugin.utf8decode || utf8decode ? UTF8.decode(coded) : coded;
    };
}(jQuery));




// 跳转到结果页
function goLinkPage(pageInfo) {
    var  phoneNum = $.base64.btoa(pageInfo.phoneNum);
    var  isM = '';
    var  url = window.location.href;
    var  reg = /\/m\//;
    var  pingfen=''
    var  f=''
    if(reg.test(url)){
        isM = true;
    }else{
        isM = false;
    }
    if(getQueryString('f')){
        f='&f='+getQueryString('f');
    }
    if(pageInfo.pingfen){
        pingfen='&pingfen='+pageInfo.pingfen;
    }
    if(pageInfo.pageType == "zg"){
        if(isM){
            window.location.href='/res/zgm/?stockno='+pageInfo.codeNum+'&phoneNum='+phoneNum+pingfen+f;

        }else{
            window.location.href='/res/zgp/?stockno='+pageInfo.codeNum+'&phoneNum='+phoneNum+pingfen+f;
        }
    }else{
        if(isM){
            // 判断是不是抽奖页面
            if(pageInfo.prizeName === "" || pageInfo.prizeName === undefined){
                window.location.href='/res/jgm/?phoneNum='+phoneNum+pingfen+f;
            }else{
                window.location.href='/res/jgm/?phoneNum='+phoneNum+pingfen+f+'&prizeName='+pageInfo.prizeName;
            }
        }else{
            window.location.href='/res/jgp/?phoneNum='+phoneNum+pingfen+f;
        }
    }
}


//根据股票代码获取股票评分信息
function getCodeScoreInfo(code,callback){
    $.ajax({
        url: 'http://www.zx017.net/api/GetStockScoreInfoByCode',
        type: 'post',
        data: {
            code: code
        },
        dataType: 'json',
    })
        .done(function(res) {
            callback(res.data);
        })
        .fail(function() {
            console.log("error");
        })
}

var apiUrl={
    guessVerificationCode:'/api/'
}

// 判断浏览器是否支持 placeholder
 if (!placeholderSupport()) {
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
}

// 判断浏览器是否支持 placeholder
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}