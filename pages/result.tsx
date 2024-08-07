import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import ResultTable from '@/components/content/ResultTable';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import WeightsTable from '@/components/content/WeightsTable';
import styles from './result.module.css';

export default function ResultPage() {
	return (
		<>
			<PageMeta pageTitle='Result' />
			<PageLayout>
				<PageTitle />
				<Section>
					<SectionHeader>Result</SectionHeader>
					<p className={styles.winnerMessage}>
						🎉 Congratulations to <br /> 🥇 "
						<span className={styles.winner}>TheAlmostEngineer</span>", <br /> 🥈
						"<span className={styles.winner}>ijbot</span>", and <br /> 🥉 "
						<span className={styles.winner}>SpiralTeam</span>" <br /> for
						winning the competition! 🎉
					</p>
					<ResultTable />
				</Section>
				<Section>
					<SectionHeader id='competition-data'>Competition Data</SectionHeader>
					<WeightsTable />
					<Paragraph>
						Competition related data can be downloaded from the following links
						(Aug 8, 2024):
					</Paragraph>
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
							<a href='/files/constants.json' download>
								Weights and constant values - constants.json
							</a>
						</li>
						<li>
							<a href='/files/submissions.zip' download>
								Submissions - submissions.zip
							</a>
						</li>
						<li>
							<a
								href='https://bit.ly/chatgpt4pcg2-result'
								target='_blank'
								rel='noopener'
							>
								Generated data during the evaluation process - competition.zip
							</a>
						</li>
					</ul>
				</Section>
			</PageLayout>
		</>
	);
}
