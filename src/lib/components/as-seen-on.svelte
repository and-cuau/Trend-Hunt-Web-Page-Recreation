<div class="as-seen">
	<h2>As seen on</h2>
	<div class="logos">
		<div class="top">
			<div>
				<img src="https://www.pngmart.com/files/23/Bbc-Logo-PNG-Photo.png" alt="bbc" />
				<img
					src="https://th.bing.com/th/id/OIP.5ICTHHtyPiB45dDHc3OONAHaEY?w=293&h=180&c=7&r=0&o=5&pid=1.7"
					alt="nbc"
				/>
				<img
					src="https://th.bing.com/th/id/OIP.QswhFSAGj2rLHx-aDJO84wHaEB?w=272&h=180&c=7&r=0&o=5&pid=1.7"
					alt="wsj"
				/>
			</div>
		</div>
		<div class="bottom">
			<div>
				<img
					src="https://th.bing.com/th/id/OIP.5ICTHHtyPiB45dDHc3OONAHaEY?w=293&h=180&c=7&r=0&o=5&pid=1.7"
					alt="nbc"
				/>
				<img
					src="https://th.bing.com/th/id/OIP.QswhFSAGj2rLHx-aDJO84wHaEB?w=272&h=180&c=7&r=0&o=5&pid=1.7"
					alt="wsj"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.as-seen {
		margin-top: 550px;
	}

	h2 {
		text-align: center;
	}

	img {
		height: 40px;
		margin: 0 20px;
	}

	.logos {
		display: grid;
		grid-template-rows: repeat(2, fr);
		gap: 10px;
		.top {
			display: flex;
			justify-content: center;
		}

		.bottom {
			display: flex;
			justify-content: center;
		}
	}

	@media screen and (min-width: 376px) {
		.as-seen {
			margin-top: 200px;
		}

		.logos {
			display: flex;
			justify-content: center;
		}

		img {
			height: 80px;
		}
	}
</style>
