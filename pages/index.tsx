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

export default function HomePage() {
	return (
		<>
			<PageMeta />
			<PageLayout>
				<PageTitle />
				<AlertBox header='Announcement' level='error'>
					<Paragraph>
						Please stay tuned for further details about the upcoming second
						edition of the ChatGPT4PCG Competition!
					</Paragraph>
					<Paragraph>
						Please note that we are currently working on finalizing the details
						of this edition of the competition, and the current details are not
						final. They are subject to frequent changes in the near future. We
						will update the website as soon as we have more information.
					</Paragraph>
				</AlertBox>
				<Image src='/images/logo.png' alt='Competition logo' />
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
						We welcome participants of all levels, whether you only modify the
						prompt of the example or come up with a complex logic through prompt
						engineering. All programs will be inspected for qualification,
						subject to the competition rules, and used to generate levels for
						each target English uppercase character. The generated levels are
						then tested for stability using our Science Birds Evaluator and
						checked for similarity with the new and upgraded Vision Transformer
						classifier. This edition also introduces a new metric--diversity,
						making it more challenging. Now, not only do the prompts and/or
						prompt engineering techniques developed by participants need to
						generate stable and similar levels, but they also need to generate
						diverse levels.
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
						We hope that this edition will be more exciting and contribute to
						collective learning and discovery in the world of prompt engineering
						through this game competition!
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id='organizers'>Organizers</SectionHeader>
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
							Yi Xia, Graduate School of Information Science and Engineering,
							Ritsumeikan University
						</li>
						<li>
							Pratch Suntichaikul, Graduate School of Information Science and
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
						Please see{' '}
						<a
							rel='noopener'
							target='_blank'
							href='https://arxiv.org/abs/2303.15662'
						>
							our paper
						</a>{' '}
						about the previous edition of the competition and{' '}
						<a href='/files/supplementary_material.pdf'>
							its supplementary document
						</a>
						.
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
							'Not mandatory: Participants may choose to modify only the prompt. However, possessing general programming knowledge can be beneficial. Examples of prompt engineering programs are provided in Python.',
						]}
					/>
					<HorizontalList header='Complexity' items={['Low-Medium']} />
					<HorizontalList header='Barrier of entry' items={['Low']} />
				</Section>
			</PageLayout>
		</>
	);
}
