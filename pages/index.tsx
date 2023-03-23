import Head from 'next/head';
import HorizontalList from '@/components/HorizontalList/HorizontalList';
import Image from '@/components/Image/Image';
import PageHeader from '@/components/PageHeader/PageHeader';
import PageLayout from '@/components/PageLayout/PageLayout';
import PageSubHeader from '@/components/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/Paragraph/Paragraph';
import Section from '@/components/Section/Section';
import SectionHeader from '@/components/SectionHeader/SectionHeader';

export default function HomePage() {
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
				<PageHeader>
					<span className='red'>
						(Please stay tuned.
						<wbr /> We will finalize this competition site around March 23,
						2023.)
					</span>
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
					<Paragraph>
						The 1st ChatGPT4PCG Competition challenges participants to utilize
						the state-of-the-art natural language processing tool, ChatGPT, to
						generate visually appealing and structurally sound levels for
						Science Birds, an Angry Birds clone created for research purposes.
					</Paragraph>
					<Paragraph>
						As a participant, your goal is to create a prompt that instructs
						ChatGPT to generate a level in Science Birds that resembles an
						English capital letter while ensuring that the level is stable and
						able to withstand gravity. You are encouraged to use various prompt
						engineering techniques to develop the most effective prompt
						possible.
					</Paragraph>
					<Paragraph>
						To participate, you must submit your prompt according to our
						guidelines. We will then generate a number of samples, each of which
						will undergo rigorous testing for stability and similarity.
						Stability will be evaluated by loading the level in Science Birds
						and examining the ratio of remaining blocks after 10 seconds of the
						initialization. The similarity of each generated level to its
						corresponding English character will be determined using an
						open-source Vision Transformer (ViT)-based classifier model. The
						stability testing system and the instructions to use the classifier
						model, as well as all the relevant tools, will be provided.
					</Paragraph>
					<Paragraph>
						This competition offers a unique opportunity for the best prompt
						engineers from around the world to showcase their creativity and
						skills. Join us in this exciting challenge to push the boundaries of
						prompt engineering and procedural content generation!
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
					<Paragraph>Final: 21 July 2023 (23:59 JST)</Paragraph>
					<Paragraph>
						If OpenAI releases an update to free-version web-based ChatGPT one
						week before the deadline (either for the midterm or final), we will
						extend the deadline by one week to give participants enough time to
						adjust their prompts. We will notify all participants who have
						submitted their work by email if this occurs. We will also make an
						announcement on our website.
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
							'Angry Birds',
							'Science Birds',
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
