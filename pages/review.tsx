import AlertBox from '@/components/ui/AlertBox/AlertBox';
import HorizontalList from '@/components/ui/HorizontalList/HorizontalList';
import Image from '@/components/ui/Image/Image';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SubmissionDeadline from '@/components/content/SubmissionDeadline';
import styles from './index.module.css';

export default function HomePage() {
	return (
		<>
			<PageMeta />
			<PageLayout>
				<PageTitle />
				<AlertBox header='To our reviewers' level='error'>
					<Paragraph>
						<strong>
							External links may not be anonymized. Please refrain from clicking
							on those links.
						</strong>
					</Paragraph>
				</AlertBox>
				<Image src='/images/logo.jpg' alt='Competition logo' />
				<Section>
					<Paragraph>
						The 2nd ChatGPT4PCG Competition continues the challenging and
						exciting spirit of the first competition. In this edition, we not
						only challenge participants to come up with a prompt to construct
						stable Science Birds levels resembling uppercase English characters,
						but we also open up the possibility of incorporating more complex
						prompt engineering techniques. This time, we allow the submission of
						a program in which participants can build on top of our examples and
						packages, enabling the use of conditions and iterations in
						programming to develop their own advanced prompt engineering
						techniques, and potentially create new ones!
					</Paragraph>
					<Paragraph>
						We welcome participants of all levels, whether you only modify a
						prompt in a provided example or come up with a complex logic through
						prompt engineering. All programs will be inspected for
						qualification, subject to the competition rules, and used to
						generate levels for each target English uppercase character. The
						generated levels are then tested for stability using our Science
						Birds Evaluator and checked for similarity to respective target
						characters using an upgraded Vision Transformer (ViT) classifier.
						This edition also introduces a new metric--diversity, making it more
						challenging. Now, not only do the prompts and/or prompt engineering
						techniques developed by participants need to generate stable and
						similar levels, but they also need to generate diverse levels.
					</Paragraph>
					<Paragraph>
						To participate, you must submit your prompt according to our
						guidelines. We will then generate a number of samples, each of which
						will undergo rigorous testing for stability, similarity, and
						diversity. Stability will be evaluated by loading the level in
						Science Birds and examining the ratio of unmoved blocks after 10
						seconds of the initialization. The similarity of each generated
						level to its corresponding English character will be determined
						using an open-source ViT-based classifier model. The stability
						testing system and the instructions to use the classifier model, as
						well as all the relevant tools, will be provided. The newly
						introduced diversity is assessed by averaging the distances of
						unordered pairs of output vectors from the ViT classifier across
						trials, all pertaining to the same target character and prompt.
					</Paragraph>
					<Paragraph>
						We hope that this edition will be more exciting and contribute to
						collective learning and discovery in the world of prompt engineering
						through this game competition!
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id='organizers'>Organizers</SectionHeader>
					Anonymous
				</Section>
				<Section>
					<SectionHeader id='contact'>Contact</SectionHeader>
					<Paragraph>
						Email address:{' '}
						<a href='mailto:chatgpt4pcg@gmail.com'>chatgpt4pcg@gmail.com</a>
					</Paragraph>
				</Section>
				<SubmissionDeadline />
				<Section>
					<SectionHeader id='other-info'>Other information</SectionHeader>
					<HorizontalList
						header='Keywords'
						items={[
							'ChatGPT',
							'Prompt engineering',
							'Procedural content generation',
							'Level generation',
							'Conversational agent',
							'Large language model',
							'Angry Birds',
							'Science Birds',
						]}
					/>
					<HorizontalList
						header='Programming languages'
						items={[
							'Not mandatory: Participants may choose to modify only a prompt in a provided example. However, possessing general programming knowledge can be beneficial. Examples of prompt engineering programs are provided in Python.',
						]}
					/>
					<HorizontalList header='Complexity' items={['Low-Medium']} />
					<HorizontalList header='Barrier of entry' items={['Low']} />
				</Section>
				<div className={styles.cogLogoContainer}>
					<h4 className={styles.cogLogoHeader}>As a part of </h4>
					<div className={styles.cogLogo}>
						<a rel='noopener' target='_blank' href='https://2024.ieee-cog.org/'>
							<picture>
								<source
									srcSet='images/cog-logo-dark.png'
									media='(prefers-color-scheme: dark)'
								/>
								<img src='images/cog-logo.png' alt='IEEE CoG 2024 Logo' />
							</picture>
						</a>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
