import HorizontalList from '@/components/ui/HorizontalList/HorizontalList';
import Image from '@/components/ui/Image/Image';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SubmissionDeadline from '@/components/content/SubmissionDeadline';

export default function ReviewPage() {
	return (
		<>
			<PageMeta pageTitle='For Review' />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Image src='/images/logo.png' alt='Competition logo' />
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
						and examining the ratio of unmoved blocks after 10 seconds of the
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
					<SectionHeader id='organizers'>Organizers</SectionHeader>
					<ol>
						<li>anonymous</li>
						<li>anonymous</li>
						<li>anonymous</li>
						<li>anonymous</li>
						<li>anonymous</li>
						<li>anonymous</li>
					</ol>
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
					<SectionHeader id='paper'>Paper</SectionHeader>
					<Paragraph>
						Please see our paper about this competition (TBA).
					</Paragraph>
				</Section>
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
