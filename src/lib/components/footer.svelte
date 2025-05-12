<div class="footer">
	<div class="container">
		<nav>
			<a>Markets</a>
			<a>Portfolio</a>
			<a>Plan</a>
			<a>News</a>
			<div class="imgs">
				<img
					class="appstore"
					src="https://th.bing.com/th/id/OIP._cFfCZtm5NL7ol_GTl3LJwHaCj?w=324&h=120&c=7&r=0&o=5&pid=1.7"
					alt="appstore"
				/>
				<img
					class="googleplay"
					src="https://th.bing.com/th/id/OIP.mxhbVrKj-KJlvUlg8UvtqgHaCQ?w=286&h=106&c=7&r=0&o=5&pid=1.7"
					alt="appstore"
				/>
			</div>
		</nav>
		<div class="copyright">
			<p>© 2025 Trendhunt Inc. All Rights Reserved.</p>
			<div class="info">
				<p>Privacy policy</p>
				<p>●</p>
				<p>Terms of Use</p>
			</div>
		</div>
	</div>
</div>

<style>
	.footer {
		background-color: black;
		height: 600px;
		/* position: relative; */
		overflow: hidden;

		.container {
			/*position: absolute; */
			margin-top: 300px;
			width: 100%;

			nav {
				display: flex;
				margin-bottom: 25px;
				a {
					color: white;
					margin: 0 20px;
					font-size: 10px;
				}
				img {
					height: 20px;
				}
			}

			.copyright {
				border-top: 1px solid grey;
				color: grey;
				font-size: 11px;
				display: flex;
			}

			.info {
				margin: 0 0 0 auto;
				display: flex;
			}
		}
	}

	@media screen and (min-width: 376px) {
		.footer {
			.container {
				max-width: 1600px;
				width: 70vw;
				margin: 380px auto;

				nav {
					a{
						font-size:18px;
					}
					.imgs {
						margin: 0 0 0 auto;
					}
				}
			}
		}
	}
</style>
