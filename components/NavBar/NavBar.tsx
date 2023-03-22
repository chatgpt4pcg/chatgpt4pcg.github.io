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
					router.pathname == '/prizes' ? styles.active : ''
				}`}>
				<Link href='/prizes'>Prizes</Link>
			</li>
			<li className={`${styles.navItem} ${
					router.pathname == '/prompt' ? styles.active : ''
				}`}>
				<Link href='/prompt'>Prompt</Link>
			</li>
			<li className={`${styles.navItem} ${
					router.pathname == '/submission' ? styles.active : ''
				}`}>
				<Link href='/submission'>Submission</Link>
			</li>
			<li className={`${styles.navItem} ${
					router.pathname == '/evaluation' ? styles.active : ''
				}`}>
				<Link href='/evaluation'>Evaluation</Link>
			</li>
			<li className={`${styles.navItem} ${
					router.pathname == '/rules' ? styles.active : ''
				}`}>
				<Link href='/rules'>Rules</Link>
			</li>
			<li className={`${styles.navItem} ${
					router.pathname == '/resources' ? styles.active : ''
				}`}>
				<Link href='/resources'>Resources</Link>
			</li>
		</nav>
	);
}
