<div class="wrapper">
	<div class="join">
		<div class="skewed">
			<div class="caption">
				<h1>Join Trendhunt today and take control of your investments.</h1>
				<a>Join for Free Today</a>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		position: relative;
		height: 200px;
	}
	.join {
		position: relative;
		z-index: 1000;
		margin-top: 0;
		left: -4px;
		/* left: 40%; */
	}
	h1 {
		color: black;
		width: 80%;
		transform: skew(7deg);
	}
	.skewed {
		width: 90vw;
		height: 300px;
		background: none;
		padding: 20px;
		color: white;
		margin: 0 auto;
		/* top: 3500px; */
		/* margin: 0 auto auto auto */
		display: flex;
		flex-direction: column;
		position: relative; /* Ensures ::before is positioned relative to this div */

		padding: 50px;
		overflow: hidden;
		transform: skew(-7deg);

		.caption {
			margin-bottom: auto;
			width: 350px;

			a {
				display: block;
				background-color: rgb(126, 229, 8);
				color: black;
				border-radius: 3px;
				height: 30px;
				font-size: 10px;
				font-weight: bold;
				width: 120px;
				transform: skew(7deg);
				padding: 9px 0;
				text-align: center;
			}
		}
	}

	.skewed::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 120%; /* Makes sure it covers the div */
		height: 120%; /* Makes sure it covers the div */

		background-image: url(https://th.bing.com/th/id/OIP.C1PCD2pVHlOq1YWXO1lG5QHaEK?w=331&h=186&c=7&r=0&o=5&pid=1.7);
		/* background-position: center bottom; */
		background-size: cover;

		transform: skew(7deg);
		z-index: -1;
	}

	@media screen and (min-width: 376px) {
		.skewed {
			width: 80vw;
			height: 500px;
		}
		.join {
			top: 0px;
			left: 0px;
		}
	}
</style>
