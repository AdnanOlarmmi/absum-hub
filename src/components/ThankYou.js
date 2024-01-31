import thankYou from '../assets/images/thankyou.png';

export default function ThankYou() {
	return (
		<section class='login-main-wrapper'>
			<div class='main-container'>
				<div class='login-process'>
					<div class='login-main-container'>
						<div class='thankyou-wrapper'>
							<h1>
								<img src={thankYou} alt='thanks' />
							</h1>
							<p>for contacting us, we will get in touch with you soon... </p>
							<a href='/'>Back to home</a>
							<div class='clr'></div>
						</div>
						<div class='clr'></div>
					</div>
				</div>
				<div class='clr'></div>
			</div>
		</section>
	);
}
