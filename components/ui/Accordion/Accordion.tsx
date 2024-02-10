import React, { ComponentType, PropsWithChildren, ReactNode } from 'react';

import AccordionItem from './AccordionItem/AccordionItem';

type AccordionProps = {
	items: { header: string; headerActive: string; body: ReactNode }[];
};

export default function Accordion({
	items,
}: PropsWithChildren<AccordionProps>) {
	const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

	const handleItemClick = (index: number) => {
		setActiveIndex((prev) => (prev === index ? null : index));
	};

	return (
		<div>
			{items.map((item, idx) => (
				<AccordionItem
					key={idx}
					headerContent={item.header}
					headerActiveContent={item.headerActive}
					isOpen={activeIndex === idx}
					onClick={() => handleItemClick(idx)}
				>
					{item.body}
				</AccordionItem>
			))}
		</div>
	);
}
