import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import ResultTable from '@/components/content/ResultTable';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import WeightsTable from '@/components/content/WeightsTable';
import styles from './result.module.css';

export default function PrizePage() {
	// character and trial scores for download
	// competition score

	return (
		<>
			<PageMeta pageTitle='Prizes' />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader id="result">Result</SectionHeader>
					<p className={styles.winnerMessage}>
						🎉 Congratulations to "<span className={styles.winner}>dereventsolve</span>" for winning
						the competition! 🎉
					</p>
					<ResultTable />
				</Section>
				<Section>
					<SectionHeader id="competition-data">Competition Data</SectionHeader>
					<WeightsTable />
					<Paragraph>
						Trial and character scores for every submission can be downloaded in
						the following links:{' '}
						<a href='/files/character_scores.csv' download>
							Character Scores
						</a>{' '}
						and{' '}
						<a href='/files/trial_scores.csv' download>
							Trial Scores
						</a>
						.
					</Paragraph>
					<Paragraph>
						Competition results in JSON format can be downloaded{' '}
						<a href='/files/result.json' download>
							here
						</a>
						.
					</Paragraph>
					<Paragraph>
						Weights used in the competition in JSON format can be downloaded{' '}
						<a href='/files/constants.json' download>
							here
						</a>
						.
					</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
