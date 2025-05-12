<div class="container">
	<div class="header">
		<h2>News from our analysts</h2>
		<a>View more</a>
	</div>
	<div class="column">
		<div>
			<img
				src="https://th.bing.com/th/id/OIP.Ooxv6wpRUb8VoALtPOwdrQHaEK?w=285&h=180&c=7&r=0&o=5&pid=1.7"
				alt="stock"
			/>
			<p class="title">
				Introducing the new Markets page – a comprehensive view of financial markets.
			</p>
			<p>Feb 26</p>
		</div>
		<div>
			<img
				src="https://th.bing.com/th/id/OIP.Ooxv6wpRUb8VoALtPOwdrQHaEK?w=285&h=180&c=7&r=0&o=5&pid=1.7"
				alt="money"
			/>
			<p class="title">Expanding our crypto asset coverage -- now with 3,000+ new tokens</p>
			<p>Feb 20</p>
		</div>
	</div>
</div>

<!-- 
https://th.bing.com/th/id/OIP.TI-64Q11ebcVszllRe6R2AHaFW?w=235&h=180&c=7&r=0&o=5&pid=1.7 -->

<style lang="scss">
	.container {
		padding: 0 30px;
		margin-bottom: 50px;
		margin-top: 120px;

		.header {
			display: flex;

			h2 {
			}

			a {
				box-sizing: border-box;
				//box-sizing: context-box;
				margin: auto 0 auto auto;
				background-color: black;
				color: white;
				text-align: center;
				height: 30px;
				width: 70px;
				border-radius: 5px;
				padding: 8px 5px;
				font-size: 10px;
			}
		}

		.column {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 10px;
			box-sizing: border-box;

			.title {
				font-weight: bold;
			}
		}
	}

	img {
		height: auto;
		width: 100%;
		border-radius: 10px;
	}

	p {
		font-size: 12px;
	}

	@media screen and (min-width: 376px) {
		.container {
			padding: 0 180px;
			.header {
				h2 {
				}
				a {
				}
			}

			.column {
				gap: 30px;
				.title {
				}
			}
		}

		img {
			height: auto;
			width: 100%;
			border-radius: 30px;
		}

		p {
			font-size: 18px;
		}
	}
</style>
