import Link from 'next/link';
import styles from './NavBar.module.css';
import { useRouter } from 'next/router';

export default function NavBar() {
	const router = useRouter();

	return (
		<nav className={styles.navigation}>
			<li
				className={`${styles.navItem} ${
					router.pathname == '/' ? styles.active : ''
				}`}
			>
				<Link href='/'>Home</Link>
			</li>
			<li className={`${styles.navItem} ${
					router.pathname == '/rules' ? styles.active : ''
				}`}>
				<Link href='/rules'>Rules</Link>
			</li>
			<li className={`${styles.navItem} ${
					router.pathname == '/resources' ? styles.active : ''
				}`}>
				<Link href='/resources'>Useful Resources</Link>
			</li>
		</nav>
	);
}
