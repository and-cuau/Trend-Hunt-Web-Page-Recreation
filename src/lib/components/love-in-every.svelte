<div class="container">
	<h2>Love in every #Trendhunt</h2>
	<p>
		TrendHunt is a trusted investment engine used by regular investors as well as analysts and
		brokerages nationwide. It tracks the quality of stocks through its automated system and provides
		screeners, strategies, and tools that can potentially maximize your returns.
	</p>
	<a href="/home">About us</a>

	<div class="column">
		<div class="achievements">
			<div>
				<p class="ac">10M+</p>
				<p>Traders & Investors</p>
			</div>
			<div>
				<p class="ac">$2B+</p>
				<p>Assets Managed</p>
			</div>
			<div>
				<p class="ac">600K+</p>
				<p>Paid</p>
			</div>
			<div>
				<p class="ac">2.5M+</p>
				<p>Mobile Reviews</p>
			</div>
		</div>
		<img
			src="https://th.bing.com/th/id/OIP.H5260CaW3OIBoN8e3nypUAAAAA?rs=1&pid=ImgDetMain"
			alt="guyatdesk"
		/>
	</div>
</div>

<style lang="scss">
	.container {
		padding: 0 40px;
		h2 {
			font-weight: bold;
			margin-top: 120px;
		}
		p {
			font-size: 10px;
		}

		a {
			display: block;
			background-color: black;
			color: white;
			border-radius: 5px;
			height: 30px;
			width: 50px;
			text-decoration: none;
			font-size: 10px;
			padding: 10px 0;
			text-align: center;
		}

		.column {
			display: grid;
			grid-template-columns: 1fr 1fr;

			.achievements {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;
				padding: 10px 10px 10px 0;
				div {
					.ac {
						font-size: 20px;
						margin: 5px 0;
						font-weight: bold;
					}
				}
			}

			img {
				width: 100%;
				height: auto;
				border-radius: 10px;
				margin: auto 0;
			}
		}
	}

	p {
		text-align: left;
	}

	@media screen and (min-width: 376px) {
		.container {
			padding: 0 120px;
			h2 {
				font-weight: bold;
			}
			p {
				font-size: 18px;
			}

			a {
				display: block;
				background-color: black;
				color: white;
				border-radius: 5px;
				height: 30px;
				width: 100px;
				text-decoration: none;
				font-size: 12px;
				padding: 10px 0;
				text-align: center;
			}

			.column {
				display: grid;
				grid-template-columns: 1fr 1fr;

				.achievements {
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-template-rows: 1fr 1fr;
					padding: 10px 10px 10px 0;
					div {
						.ac {
							font-size: 50px;
							margin: 5px 0;
							font-weight: bold;
						}
						p {
							font-size: 18px;
						}
					}
				}

				img {
					width: 100%;
					height: auto;
					border-radius: 30px;
					margin: auto 0;
				}
			}
		}

		p {
			text-align: left;
			font-size: 18px;
		}
	}
</style>
