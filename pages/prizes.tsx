import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function PrizePage() {
	return (
		<>
			<PageMeta pageTitle='Prizes' />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader>Prizes</SectionHeader>
					<Paragraph>
						🥇 <strong>1st Place - 500 USD</strong>
					</Paragraph>
					<Paragraph>
						The prize is sponsored by the IEEE CIS Education Competition
						Subcommittee. The organizers would like to express their gratitude
						to the IEEE CIS Education Competition Subcommittee for their
						generous support.
					</Paragraph>
					<Paragraph>
						If you are the winner and eligible to receive the prize, you agree
						that your email address associated with the submission will be
						shared with the IEEE CIS Education Competition Subcommittee.
					</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
