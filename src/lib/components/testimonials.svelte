<script>
</script>

<h2>What customers say</h2>
<div class="testimonials">
	<div class="row">
		<div class="testimonial">
			<div class="caption">
				<p>
					I recently saw another demonstration of graphic design's ubiquity. Someoene had taken a
					series of photographs of busy streets.
				</p>
				<p>Johnny Ive . Love from</p>
			</div>
		</div>
		<div class="testimonial">
			<div class="caption">
				<p>
					I recently saw another demonstration of graphic design's ubiquity. Someoene had taken a
					series of photographs of busy streets.
				</p>
				<p>Johnny Ive . Love from</p>
			</div>
		</div>
		<div class="testimonial">
			<div class="caption">
				<p>
					I recently saw another demonstration of graphic design's ubiquity. Someoene had taken a
					series of photographs of busy streets.
				</p>
				<p>Johnny Ive . Love from</p>
			</div>
		</div>
	</div>
</div>

<style>
	.testimonials {
		width: 100%;
		height: 300px;
		overflow-x: auto;
		overflow-y: hidden;

		margin-left: auto;
		margin-right: auto;
		::-webkit-scrollbar {
			display: none;
		}
	}
	.row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width: 980px;
		height: 300px;
		overflow: hidden;
	}

	h2 {
		text-align: center;
		margin-top: 120px;
	}

	.testimonial {
		width: 310px;
		height: 300px;
		background: none;
		padding: 20px;
		color: white;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		position: relative; /* Ensures ::before is positioned relative to this div */
		overflow: hidden;
		border-radius: 5px;
		transform: skew(-7deg);

		.caption {
			margin-top: auto;

			p {
				font-size: 8px;
				transform: skew(7deg);
			}
		}
	}

	.testimonial::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 120%; /* Makes sure it covers the div */
		height: 120%; /* Makes sure it covers the div */

		background-image: url(https://static.vecteezy.com/system/resources/previews/031/734/613/non_2x/group-of-business-people-working-together-in-modern-office-they-are-sitting-at-the-table-and-communicating-colleagues-working-together-in-an-office-space-ai-generated-free-photo.jpg);
		background-position: center bottom;
		background-size: cover;

		transform: skew(7deg);
		z-index: -1;
	}

	@media screen and (min-width: 376px) {
		.testimonials {
			width: 100%;
			height: 500px;

			.row {
				height: 500px;
				width: 3200px;
				.testimonial {
					width: 950px;
					height: 500px;
					.caption {
						p {
							font-size: 18px;
						}
					}
				}
			}
		}
	}
</style>
