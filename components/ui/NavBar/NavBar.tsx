import {
	ArrowUpRightIcon,
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import styles from './NavBar.module.css';
import { useRouter } from 'next/router';

export default function NavBar() {
	const router = useRouter();
	const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

	const ScrollStatus = isMobileNavOpen ? RemoveScroll : React.Fragment;

	return (
		<ScrollStatus>
			<nav
				className={
					isMobileNavOpen
						? `${styles.navContainer} ${styles.mobileActive}`
						: styles.navContainer
				}
			>
				<div className={styles.mobileNav}>
					<Link href='/'>ChatGPT4PCG</Link>
					<button
						className={styles.hamburger}
						onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
					>
						{isMobileNavOpen ? (
							<XMarkIcon
								style={{
									width: '36px',
									height: '36px',
								}}
							/>
						) : (
							<Bars3Icon
								style={{
									width: '36px',
									height: '36px',
								}}
							/>
						)}
					</button>
				</div>
				<ul
					className={
						isMobileNavOpen
							? `${styles.navigation} ${styles.mobileActive}`
							: styles.navigation
					}
				>
					<li
						className={`${styles.navItem} ${
							router.pathname == '/' ? styles.active : ''
						}`}
					>
						<Link href='/'>Home</Link>
					</li>
					<li
						className={`${styles.navItem} ${
							router.pathname == '/prizes' ? styles.active : ''
						}`}
					>
						<Link href='/prizes'>Prizes</Link>
					</li>
					<li
						className={`${styles.navItem} ${
							router.pathname == '/prompt' ? styles.active : ''
						}`}
					>
						<Link href='/prompt'>Prompt</Link>
					</li>
					<li
						className={`${styles.navItem} ${
							router.pathname == '/submission' ? styles.active : ''
						}`}
					>
						<Link href='/submission'>Submission</Link>
					</li>
					<li
						className={`${styles.navItem} ${
							router.pathname == '/evaluation' ? styles.active : ''
						}`}
					>
						<Link href='/evaluation'>Evaluation</Link>
					</li>
					<li
						className={`${styles.navItem} ${
							router.pathname == '/rules' ? styles.active : ''
						}`}
					>
						<Link href='/rules'>Rules</Link>
					</li>
					<li
						className={`${styles.navItem} ${
							router.pathname == '/result' ? styles.active : ''
						}`}
					>
						<Link href='/result'>Result</Link>
					</li>
					<li
						className={`${styles.navItem} ${
							router.pathname == '/resources' ? styles.active : ''
						}`}
					>
						<Link href='/resources'>Resources</Link>
					</li>
					<li
						className={`${styles.navItem} ${
							router.pathname == '/changelog' ? styles.active : ''
						}`}
					>
						<Link href='/changelog'>Changelog</Link>
					</li>
					<li
						className={`${styles.navItem} ${
							router.pathname == '/tutorial' ? styles.active : ''
						}`}
					>
						<Link href='/tutorial'>CoG 2024 Tutorial</Link>
					</li>
					<li className={`${styles.navItem} ${styles.special}`}>
						<a
							target='_blank'
							href='https://github.com/chatgpt4pcg/chatgpt4pcg.github.io'
							rel='noopener'
						>
							GitHub{' '}
							<ArrowUpRightIcon
								style={{
									width: '12px',
									height: '12px',
								}}
							/>
						</a>
					</li>
				</ul>
			</nav>
		</ScrollStatus>
	);
}
