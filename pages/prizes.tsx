import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function PrizePage() {
	return (
		<>
			<PageMeta pageTitle='Prizes' />
			<PageLayout>
				<PageTitle />
				<Section>
					<SectionHeader>Prizes</SectionHeader>
					<Paragraph>
						In this year, we have a total of 1000 USD in prizes to be awarded
						to:
					</Paragraph>
					<Paragraph>
						🥇 <strong>1st Place</strong> - 500 USD
					</Paragraph>
					<Paragraph>
						🥈 <strong>2nd Place</strong> - 300 USD
					</Paragraph>
					<Paragraph>
						🥉 <strong>3rd Place</strong> - 200 USD
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
