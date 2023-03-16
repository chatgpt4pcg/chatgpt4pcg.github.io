import Head from 'next/head';
import HorizontalList from '@/components/HorizontalList/HorizontalList';
import Image from '@/components/Image/Image';
import PageHeader from '@/components/PageHeader/PageHeader';
import PageLayout from '@/components/PageLayout/PageLayout';
import PageSubHeader from '@/components/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/Paragraph/Paragraph';
import Section from '@/components/Section/Section';
import SectionHeader from '@/components/SectionHeader/SectionHeader';

export default function Home() {
	return (
		<>
			<Head>
				<title>
					The 1st ChatGPT4PCG Competition: Character-like Level Generation for
					Science Birds
				</title>
				<meta
					name='description'
					content='The ChatGPT4PCG Competition invites participants to use ChatGPT to generate stable levels for Science Birds resembling English characters. Participants must submit a prompt and instructions, and the generated levels will undergo testing for stability and similarity using an OCR model, offering a chance to showcase prompt engineering skills and push the boundaries of natural language processing and procedural content generation.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Image src='logo.png' alt='Competition logo' />
				<Section>
					<SectionHeader>Organizers</SectionHeader>
					<ol>
						<li>
							Pittawat Taveekitworachai, Graduate School of Information Science
							and Engineering, Ritsumeikan University
						</li>
						<li>
							Febri Abdullah, Graduate School of Information Science and
							Engineering, Ritsumeikan University
						</li>
						<li>
							Mury F. Dewantoro, Graduate School of Information Science and
							Engineering, Ritsumeikan University
						</li>
						<li>
							Ruck Thawonmas, College of Information Science and Engineering,
							Ritsumeikan University
						</li>
						<li>
							Julian Togelius, NYU Tandon School of Engineering, New York
							University
						</li>
						<li>
							Jochen Renz, School of Computing, The Australian National
							University
						</li>
					</ol>
				</Section>
				<Section>
					<SectionHeader>Description of the Competition</SectionHeader>
					<Paragraph>
						The 1st ChatGPT4PCG Competition challenges participants to utilize
						the state-of-the-art natural language processing tool, ChatGPT, to
						generate visually appealing and structurally sound levels for
						Science Birds, an Angry Birds clone created for research purposes.
					</Paragraph>
					<Paragraph>
						As a participant, your goal is to create a prompt that instructs
						ChatGPT to generate a level in Science Birds that resembles an
						English character while ensuring that the level is stable and able
						to withstand gravity. You are encouraged to use various prompt
						engineering techniques to develop the most effective prompt
						possible.
					</Paragraph>
					<Paragraph>
						To participate, you must submit your prompt along with instructions
						on how to generate various character levels. We will then generate a
						number of samples, each of which will undergo rigorous testing for
						stability and similarity. Stability will be evaluated by loading the
						level in Science Birds and ensuring that there is no movement for a
						duration of 10 seconds. The similarity of each generated level to
						its corresponding English character will be determined using a
						state-of-the-art optical character recognition (OCR) model.
					</Paragraph>
					<Paragraph>
						This competition offers a unique opportunity for the best prompt
						engineers from around the world to showcase their creativity and
						skills. Join us in this exciting challenge to push the boundaries of
						natural language processing and procedural content generation!
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader>Contact</SectionHeader>
					<Paragraph>
						Email address:{' '}
						<a href='mailto:chatgpt4pcg@gmail.com'>chatgpt4pcg@gmail.com</a>
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader>Submission deadline</SectionHeader>
					<Paragraph>Midterm: 19 May 2023 (23:59 JST)</Paragraph>
					<Paragraph>
						Final: 20 May 2023 - 21 July 2023 (23:59 JST) (No extension)
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader>Other information</SectionHeader>
					<HorizontalList
						header='Keywords'
						items={[
							'ChatGPT',
							'Prompt engineering',
							'Procedural content generation',
							'Level generation',
							'Conversational agent',
							'Large language model',
						]}
					/>
					<HorizontalList
						header='Programming languages'
						items={[
							'N/A. However, having general programming knowledge can be useful.',
						]}
					/>
					<HorizontalList header='Complexity' items={['Low-Medium']} />
					<HorizontalList header='Competitive' items={['New Competition']} />
					<HorizontalList header='Barrier of entry' items={['Low']} />
				</Section>
			</PageLayout>
		</>
	);
}