import { MdMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const MainContent = () => {
	return (
		<main className='main'>
			<header>
				<h1>Allen Valdez</h1>
				<p className='header-profession'>Full Stack Software Engineer</p>
				<p className='header-website'>AllenValdez.com</p>
				<div className='header-buttons'>
					<a href='mailto:allenthedev@gmail.com' className='header-link email-link'>
						<MdMail className='header-icons' />
						Email Me
					</a>
					<a href='https://www.linkedin.com/in/allen-valdez/' className='header-link linkedin-link' target='_blank' rel='noreferrer'>
						<FaLinkedin className='header-icons' />
						Linkedin
					</a>
				</div>
			</header>
			<section className='section'>
				<h2 className='section-header'>About</h2>
				<p className='section-text'>
					Former Infantry Marine squad leader turned full-stack software engineer, specializing in custom web applications ranging from simple SPAs to
					full-scale business platforms. I focus on clean design, practical solutions, and software that helps businesses run better.
				</p>
				<h2 className='section-header'>Interests</h2>
				<p className='section-text'>
					Code builder. Cybersecurity enthusiast. Gym regular. Lifelong learner. Problem solver. Tech explorer. Game-development dreamer. Discipline-driven.
				</p>
			</section>
		</main>
	);
};

export default MainContent;
