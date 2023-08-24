import 'katex/dist/katex.min.css';

import { InlineMath } from 'react-katex';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SectionSubHeader from '@/components/ui/SectionSubHeader/SectionSubHeader';

export default function ChangelogPage() {
	return (
		<>
			<PageMeta />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader id='changelog'>Changelog</SectionHeader>
					<SectionSubHeader>August 22, 2023</SectionSubHeader>
					<ul>
						<li>
							We have released the{' '}
							<Link href='/result'>result of the competition</Link>.
						</li>
					</ul>
					<SectionSubHeader>July 17, 2023</SectionSubHeader>
					<ul>
						<li>
							We extended the deadline for final submission to{' '}
							<strong>July 29, 2023</strong>.
						</li>
					</ul>
					<SectionSubHeader>June 16, 2023</SectionSubHeader>
					<ul>
						<li>
							We have added information about prizes to the{' '}
							<Link href='/prizes'>prizes page</Link> (previously labeled as
							"TBA").
						</li>
					</ul>
					<SectionSubHeader>May 23, 2023</SectionSubHeader>
					<ul>
						<li>
							We have expanded the range of allowed characters in the prompt to
							include a curved opening single quotation mark (&lsquo;), a curved
							closing single quotation mark (&rsquo;), a curved opening double
							quotation mark (&ldquo;), and a closing double quotation mark
							(&rdquo;), as reflected in the{' '}
							<Link href='/prompt#rules'>prompt rules</Link>.
						</li>
						<li>
							We have adjusted our{' '}
							<Link href='/evaluation#ranking-policy'>ranking policy</Link> by
							changing from "The team that has the highest{' '}
							<InlineMath math='norm\_prompt_{k}' /> score, rounded to two
							decimal places, will be declared the winner." to "The team that
							has the highest <InlineMath math='norm\_prompt_{k}' /> will be
							declared the winner."
						</li>
					</ul>
				</Section>
			</PageLayout>
		</>
	);
}
