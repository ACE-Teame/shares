<script type="text/javascript" src="css/jquery.min.js"></script>
<script type="text/javascript">
    (function($){
		$(function(){

		    $('body').on('click','.home-menu', function(){
		    	$('.slide-left').addClass('active');
		    	$('.bg').addClass('active');
		    	return false;
		    });
		    $('body').on('click','.bg', function(){
		    	$('.slide-left').removeClass('active');
		    	$('.bg').removeClass('active');
		    	return false;		    	
		    });

		    var str = window.location.pathname;
            var positions = new Array();
            var pos = str.indexOf("/");
            while (pos > -1) {
                positions.push(pos);
                pos = str.indexOf("/", pos + 1);
            }        
            var i = positions[0];
            var j = positions[1];

            var ret = str.substring(j+1, str.length);
            var result = ret.indexOf(".");
            var result = ret.substring(0, result);
            
            $('#' + result).addClass('active');

		});
    })(jQuery);

</script>
</body>
</html>