<script>
	import MagnifyingGlassIcon from '$lib/icons/magnifying-glass-icon.svelte';
	const trending = ['Tesla', 'NVIDIA', 'Palantir', 'Apple'];
</script>

<div id="hero">
	<div class="image-container">
		<div class="gradient"></div>
		<img src="./images/mountain-background.jpg" alt="" />
	</div>
	<div class="container">
		<h1>Lead the Market with Trendhunt</h1>
		<p>Invest Smartly with Our Stock Scoring System</p>

		<div class="search">
			<MagnifyingGlassIcon />
			<input type="search" name="search" placeholder="Search Stock, Index, Crypto and MF" />
		</div>

		<div class="trending-container">
			<p class="label">What's Trending:</p>
			<p>Tesla</p>
			<p>NVIDIA</p>
			<p>Palantir</p>
			<p>Apple</p>
		</div>
	</div>
</div>

<style lang="scss">
	#hero {
		position: relative;
		height: 100vh;
		width: 100%;
		// background-image: url('https://media.discordapp.net/attachments/1343728289977466880/1349137725822861423/mountain-background.jpg?ex=67d201eb&is=67d0b06b&hm=09f85d8fd1f5db51fc01cd6f4df3680c0f683b11bc3a4afcaf77076fcb504138&=&format=webp&width=1371&height=760');
		overflow: hidden;
		background-position: center;
		z-index: 10;

		.image-container {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: -1;
			contain: paint;
			pointer-events: none;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transform: translateY(calc(var(--scroll) * 0.5px));
			}

			.gradient {
				width: 100%;
				height: 50%;
				position: absolute;
				bottom: 0;
				z-index: 1000;
				background: linear-gradient(to top, white 5%, rgba(255, 255, 255, 0));
			}
		}

		// padding: 0 30px;
		.container {
			margin: 120px auto;
			height: 250px;
			width: 250px;
			h1 {
				font-size: 32px;
				font-weight: bold;
				text-align: center;
				margin: 0px 0;
			}

			p {
				text-align: center;
				font-size: 14px;
			}

			.search {
				margin: 0px auto;
				background-color: white;
				max-width: 600px;
				height: 32px;
				border: 1px solid lightgrey;
				border-radius: 4px;
				display: flex;
				padding: 0px 0px;

				input {
					display: block;
					z-index: 1000;
					margin: auto 0px;
					width: 90%;
					border: 2px solid transparent;
				}
			}

			.trending-container {
				// display: inline;
				width: 270px;
				margin: 0 auto;

				p {
					display: inline;
					font-size: 10px;
					background-color: rgba(128, 128, 128, 0.2);
					border-radius: 10px;
					padding: 0 4px;
				}

				.label {
					background-color: transparent;
					font-size: 11px;
				}
			}
		}
	}

	@media screen and (min-width: 376px) {
		#hero {
			background-size: cover;
			background-position: center;

			.image-container {
				img {
				}

				.gradient {
				}
			}

			.container {
				width: 70%;

				h1 {
					font-size: 56px;
				}

				p {
				}

				.search {
					height: 40px;
					input {
						width: 95%;
						height: 35px;
						// border: 2px solid red;
					}
				}

				.trending-container {
					p {
					}

					.label {
					}
				}
			}
		}
	}
</style>
