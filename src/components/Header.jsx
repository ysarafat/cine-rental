import MoonIcon from '../assets/icons/moon.svg';
import Logo from '../assets/logo.svg';
import RingIcon from '../assets/ring.svg';
import CartIcon from '../assets/shopping-cart.svg';

export default function Header() {
    return (
        <header>
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={Logo} width="139" height="26" alt="logo" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={RingIcon} width="24" height="24" alt="ring" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={MoonIcon} width="24" height="24" alt="moon" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={CartIcon} width="24" height="24" alt="cart" />
					</a>
				</li>
			</ul>
		</nav>
	</header>
    );
}
