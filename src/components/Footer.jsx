import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram, FaSquareGithub } from 'react-icons/fa6';

const Footer = () => {
	return (
		<footer>
			<ul className='footer-links'>
				<li>
					<a>
						<FaSquareXTwitter className='footer-icon' />
					</a>
				</li>
				<li>
					<a>
						<FaSquareFacebook className='footer-icon' />
					</a>
				</li>
				<li>
					<a>
						<FaSquareInstagram className='footer-icon' />
					</a>
				</li>
				<li>
					<a>
						<FaSquareGithub className='footer-icon' />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
