import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import React, { PropsWithChildren, useRef } from 'react';

import styles from './AccordionItem.module.css';

type AccordionItemProps = {
	headerContent: string;
	headerActiveContent: string;
	isOpen: boolean;
	onClick: () => void;
};

export default function AccordionItem({
	isOpen,
	onClick,
	headerContent,
	headerActiveContent,
	children,
}: PropsWithChildren<AccordionItemProps>) {
	const contentHeight = useRef<HTMLDivElement>(null);

	return (
		<div className={styles.container} onClick={onClick}>
			<button
				className={`${styles.headerContainer} ${isOpen ? styles.active : ''}`}
				
			>
				<div className={styles.headerContent}>
					{isOpen ? headerActiveContent : headerContent}
				</div>
				<div>
					{isOpen ? (
						<ChevronUpIcon className={styles.icon} />
					) : (
						<ChevronDownIcon className={styles.icon} />
					)}
				</div>
			</button>
			<div
				ref={contentHeight}
				className={`${styles.bodyContainer} ${isOpen ? styles.active : ''}`}
				style={
					isOpen
						? { height: contentHeight.current?.scrollHeight }
						: { height: '0px' }
				}
			>
				{children}
			</div>
		</div>
	);
}
