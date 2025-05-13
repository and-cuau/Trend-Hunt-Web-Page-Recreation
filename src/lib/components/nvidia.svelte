<script>
	let bg_color = 'white';
	let color = 'black';

	let bg_colors = new Array(11).fill('white');
	let colors = new Array(11).fill('black');

	function changeColor(i) {
		bg_colors.fill('white');
		colors.fill('black');

		if (bg_colors[i] == 'white') {
			bg_colors[i] = 'black';
			colors[i] = 'white';
		} else {
			bg_colors[i] = 'white';
			colors[i] = 'black';
		}
	}
</script>

<div class="nvidia">
	<h4></h4>

	<p class="categories">
		markets | sector:hardware technology & equipment | industry : semiconductors | nvidia corp
	</p>

	<div class="container">
		<img src="./images/nvidia-logo.jpg" />
		<div>
			<p class="name">NVIDIA Corp.</p>
			<p class="price">115.25</p>
		</div>
		<div class="icons"></div>
	</div>

	<div class="buttons">
		<!-- <a href="#dashboard" class="tag" onclick="this.style.color='black'">Dashboard</a> -->
		<a
			href="#dashboard"
			class="tag"
			style="background-color: {bg_colors[0]}; color: {colors[0]};"
			on:click|preventDefault={() => changeColor(0)}>Dashboard</a
		>
		<a
			href="#price"
			class="tag"
			style="background-color: {bg_colors[1]}; color: {colors[1]};"
			on:click|preventDefault={() => changeColor(1)}>Price</a
		>
		<a
			href="#quality"
			class="tag"
			style="background-color: {bg_colors[2]}; color: {colors[2]};"
			on:click|preventDefault={() => changeColor(2)}>Quality</a
		>
		<a
			href="#valuation"
			class="tag"
			style="background-color: {bg_colors[3]}; color: {colors[3]};"
			on:click|preventDefault={() => changeColor(3)}>Valuation</a
		>
		<a
			href="#fintrend"
			class="tag"
			style="background-color: {bg_colors[4]}; color: {colors[4]};"
			on:click|preventDefault={() => changeColor(4)}>Fintrend</a
		>
		<a
			href="#technicals"
			class="tag"
			style="background-color: {bg_colors[5]}; color: {colors[5]};"
			on:click|preventDefault={() => changeColor(5)}>Technicals</a
		>
		<a
			href="#returns"
			class="tag"
			style="background-color: {bg_colors[6]}; color: {colors[6]};"
			on:click|preventDefault={() => changeColor(6)}>Returns</a
		>
		<a
			href="#financials"
			class="tag"
			style="background-color: {bg_colors[7]}; color: {colors[7]};"
			on:click|preventDefault={() => changeColor(7)}>Financials</a
		>
		<a
			href="#shareholding"
			class="tag"
			style="background-color: {bg_colors[8]}; color: {colors[8]};"
			on:click|preventDefault={() => changeColor(8)}>Shareholding</a
		>
		<a
			href="#companycv"
			class="tag"
			style="background-color: {bg_colors[9]}; color: {colors[9]};"
			on:click|preventDefault={() => changeColor(9)}>CompanyCV</a
		>
		<a
			href="#compare"
			class="tag"
			style="background-color: {bg_colors[10]}; color: {colors[10]};"
			on:click|preventDefault={() => changeColor(10)}>Compare</a
		>
	</div>

	<div class="port">
		<div class="column">
			<div class="strong">
				<p>WHY IT'S A STRONG BUY</p>
				<ol>
					<li class="num">
						Strong long term fundamental strength with an average ROE of 49.67%
						<ul>
							<li class="point">
								Healthy long term growth as Net Sales has grown by an annual rate of 64.24% and
								Operating profit at 95.58%
							</li>
							<li class="point">Company has a low debt to equity ratio avg at -0.43 times</li>
						</ul>
					</li>
					<li class="num">
						With a growth in net profit of 14.41 the company declared outstanding results in oct 24
						<ul>
							<li class="point">declared outstanding results in oct 24</li>
							<li class="point">Operating cash flow(y) highest at USD 58959 MM</li>
							<li class="point">Interest coverage ratio highest at 36634.43</li>
							<li class="point">ROCE(HY) Highest at 127.21%</li>
						</ul>
					</li>
					<li class="num">
						Stock is technically in a mildly bullish range
						<ul>
							<li class="point">The technical trend has detriorated from bullish on 28-Feb-25</li>
							<li class="point">
								The stocks MACD(Monthly) and Bollinger Band(Monthly) technical factors are also
								bullish
							</li>
						</ul>
					</li>
					<li class="num">
						With ROE of 91.01%, it has a fair valuation with a 38.4 price to book value
						<ul>
							<li class="point">
								The stock is trading at a premium compared to its average historical valuations
							</li>
							<li class="point">
								Over the past year, while the stock has generated a return of -86.14%, its profits
								have risen by 142.34%
							</li>
						</ul>
					</li>
					<li class="num">
						Company is among the highest 1% of all rated companies in the country
						<ul>
							<li class="point">It is ranked 1 across all 41 across the entire market</li>
						</ul>
					</li>
				</ol>
			</div>

			<div class="two">
				<div class="score">
					<p>Trendhunt Score</p>
				</div>

				<div class="more">
					<p>You have 4 more dashboard views remaining</p>
					<div class="views">
						<div class="view"><p>Detailed Call on This Stock</p></div>
						<div class="view"><p>Is NVIDIA CORP for you?</p></div>
						<div class="view"><p>How much should you buy?</p></div>
						<div class="view"><p>Returns Summary</p></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.nvidia {
		background-color: white;
		position: absolute;
		top: 400px;
		background-clip: padding-box;
		border: 10px solid rgba(0, 0, 0, 0.05);
		border-radius: 20px;
		z-index: 1000;
		left: 0;
		right: 0;
		width: 80%;
		height: auto;
		margin: 0 auto;
		padding: 0 10px;
	

		p {
			text-transform: uppercase;
		}

		.container {
			display: flex;

			img {
				width: 50px;
				height: 50.8px;
				object-fit: cover;
				margin-right: 10px;
			}

			p {
				margin: 0px;
			}

			.name {
				font-size: 15px;
				text-transform: none;
				font-weight: bold;
			}
			.price {
				font-size: 20px;
				font-weight: bold;
			}
		}

		.categories {
			font-size: 9px;
		}

		.buttons {
			display: flex;
			width: 100%; // 126 229 8
			overflow-x: auto;
			margin: 10px 0;
			a {
				background-color: white;
				color: black;
				border-radius: 5px;
				text-decoration: none;
				padding: 5px 5px;
				font-size: 14px;
			}

			a:active {
				color: black;
			}
		}

		.port {
			width: 90%;
			height: 80%;
			overflow-y: hidden;
			overflow-x: auto;
			.column {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				width: 140vw;
				gap: 10px;

				.strong {
					//background-color: rgba(139, 159, 145, 0.02); // warm grey test
					background-color: rgba(0, 0, 0, 0.03);
					border-radius: 20px;
					padding: 0 10px;
					// border: 2px solid red;
					p {
						font-size: 11px;
						font-weight: bold;
				
					}
				}

				.two {
					display: flex;
					flex-direction: column;
					gap: 10px;
					// grid-template-rows: repeat(2, 1fr);
					.score {
						flex-grow: 1;
						box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
						border-radius: 20px;
						padding: 0px 20px;

						p {
							text-transform: none;
							font-weight: bold;
						}
					}
					.more {
						flex-grow: 2;
						background:
							linear-gradient(to bottom, rgba(102, 226, 85, 0.2) 0%, rgba(46, 139, 87, 0) 60%),
							linear-gradient(to top, rgba(0, 191, 255, 0.1) 0%, rgba(0, 191, 255, 0) 60%);

						border-radius: 20px;
						padding: 5px 15px;
						p {
							font-weight: bold;
							font-size: 11px;
							text-transform: none;
						}
						.views {
							display: grid;
							grid-template-rows: repeat(4, 1fr);
							gap: 5px;

							.view {
								// width: 90%;
								// margin-left: auto;
								// margin-right: auto;
								// border: 1px solid black;
								border-radius: 5px;
								padding: 0 5px;
								box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
								p {
									font-weight: normal;
									font-size: 10px;
									margin-left: 5px;
								}
							}
						}
					}
				}
			}
		}
	}

	p {
		// text-transform: uppercase
	}

	ol {
		padding: 0 10px;
	}

	li {
	}

	.num {
		font-weight: bold;
		font-size: 11px;
		margin: 15px 0;

		.point {
			font-weight: normal;
		}
	}

	ul li::marker {
		color: rgb(126, 229, 8);
		font-size: 1em;
		content: '● ';
	}

	ul {
		padding: 0;
	}

	@media screen and (min-width: 376px) {
		.nvidia {
			height: auto;
			border-radius: 30px;


			p {
			}

			.container {
				img {
				}

				p {
				}

				.name {
					font-size: 18px;
				}
				.price {
					font-size: 24px;
				}
			}

			.categories {
			}

			.buttons {
				a {
				}

				a:active {
				}
			}

			.port {
				width: 100%;
				.column {
					width: 100%;
					.strong {
						p {
						}
					}

					.two {
						.score {
						}
						.more {
							p {
							}
							.views {
								.view {
									p {
									}
								}
							}
						}
					}
				}
			}
		}

		p {
			// text-transform: uppercase
		}

		ol {
		}

		li {
		}

		.num {
			.point {
			}
		}

		ul li::marker {
		}

		ul {
		}
	}
</style>
