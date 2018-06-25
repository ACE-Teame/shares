<?php require('header.php'); ?>
	<div class="container">
		<div class="contact">
			<div class="title">留言板</div>
			<div class="form">
				<div class="content">					
					<div class="title">发表您的留言</div>
					<form action="#">
						<div class="entry">
							<input type="text" id="username" name="username" placeholder="姓名(必填)">
						</div>
						<div class="entry">
							<input type="text" id="phone" name="phone" placeholder="邮箱">
						</div>
						<div class="entry">
							<input type="text" id="cardID" name="cardID" placeholder="电话(必填)*">
						</div>
						<div class="entry">
							<textarea id="address" name="address" placeholder="内容:" row="3"></textarea>

						</div>

					</form>
					<a class="btn" href="#">提交</a>
				</div>
			</div>
		</div>
		<?php require('sidebar.php'); ?>
		
	</div>
<?php require('footer.php'); ?>

