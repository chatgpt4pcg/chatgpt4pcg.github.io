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

export default function ResultsPage() {
	return (
		<>
			<PageMeta pageTitle='Results' />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader id='result'>Results</SectionHeader>
					<p className={styles.winnerMessage}>
						🎉 Congratulations to "
						<span className={styles.winner}>dereventsolve</span>" for winning
						the competition! 🎉
					</p>
					<ResultTable />
				</Section>
				<Section>
					<SectionHeader id='competition-data'>Competition Data</SectionHeader>
					<WeightsTable />
					<Paragraph>
						Competition related data can be downloaded from the following links:
						<ul>
							<li>
								<a href='/files/trial_scores.csv' download>
									Trial scores - trial_scores.csv
								</a>
							</li>
							<li>
								<a href='/files/character_scores.csv' download>
									Character scores - character_scores.csv
								</a>
							</li>
							<li>
								<a href='/files/result.json' download>
									Competition results - result.json
								</a>
							</li>
							<li>
								<a href='/files/constants.json' download>
									Weights and constant values - constants.json
								</a>
							</li>
							<li>
								<a href='/files/prompts.zip' download>
									Prompts - prompts.zip
								</a>
							</li>
						</ul>
					</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
