<script lang="ts">
	import '../routes/global.scss';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/footer.svelte';

	// export const prerender = true;

	// Save dark mode preference
	// localStorage.setItem('theme', 'dark');

	// // Get and apply dark mode preference
	// if (localStorage.getItem('theme') === 'dark') {
	// document.documentElement.classList.add('dark-mode');
	// }

	let { children } = $props();

	onMount(() => {
		const scroll = () => document.body.style.setProperty('--scroll', window.pageYOffset.toString());
		window.addEventListener('scroll', scroll, false);
		return () => window.removeEventListener('scroll', scroll);
	});
</script>

<nav>
	<h3>Trendhunt</h3>
	<div class="pages">
		<a>Markets</a>
		<a>Portfolio</a>
		<a>Plan</a>
	</div>
	<div class="hamburger">
		<span></span>
		<span></span>
		<span></span>
	</div>
	<a>Log In</a>
</nav>

<main>
	 {@render children()}
</main>

<Footer></Footer>

<!-- <div>
    <a href="https://apple.com">Markets</a>
    <a href="https://apple.com">Portfolio</a>
    <a href="https://apple.com">Plan</a>
</div> -->

<style lang="scss">
	nav {
		position: absolute;
		left: 0;
		right: 0;
		border-radius: 10px;
		top: 12px;
		display: grid;
		grid-template-columns: 1fr auto 1fr;

		width: 70%;
		max-width: 900px;
		height: 35px;
		// border: 2px solid red;
		background: rgba(255, 255, 255, 0.3);
		// background-clip: content-box;
		z-index: 1000;
		padding: 0 10px;
		margin: 0 auto;

		h3 {
			margin: auto 0;
		}

		.pages {
			display: none;
			a {
				color: black;
			}
		}

		.hamburger {
			margin: auto auto;
			span {
				width: 20px;
				height: 2px;
				// color: red;
				background-color: black;
				display: block;
				margin: 3px 0;
			}
		}

		a {
			margin-left: auto;
			margin: auto 0 auto auto;
			background-color: black;
			color: white;
			font-size: 12px;
			width: 50px;
			border-radius: 4px;
			height: 25px;
			text-align: center;
			padding: 5px 5px;
		}
	}

	@media screen and (min-width: 376px) {
		nav {
			width: 40%;
			height: 50px;
			max-width: 600px;
			h3 {
			}

			.pages {
				display: block;
				margin: auto auto;
				a {
					background-color: transparent;
				}
			}

			.hamburger {
				display: none;
				span {
				}
			}
			a {
				width: 65px;
			}
		}
	}
</style>
