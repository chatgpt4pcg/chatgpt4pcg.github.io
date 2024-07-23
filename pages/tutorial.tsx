import Image from '@/components/ui/Image/Image';
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
			<PageMeta pageTitle='Tutorial' />
			<PageLayout>
				<PageSubHeader>
					A Tutorial@
					<a
						href='https://2024.ieee-cog.org/cog-2024-tutorials/'
						target='_blank'
						rel='noopener noreferrer'
					>
						IEEE CoG 2024
					</a>
				</PageSubHeader>
				<PageHeader>
					Prompt Engineering for Science Birds Level Generation and Beyond
				</PageHeader>
				<Section>
					<SectionHeader>Prerequisite</SectionHeader>
					<Paragraph>
						If you want to follow along with the tutorial, you will need a
						computer with sufficient performance. LLMs are downloaded as files
						and will be stored on your computer and later loaded into RAM, so
						you will need to have sufficient storage and memory for that
						purpose. In addition, while the program works with CPU-only
						computers, its performance is not optimal, i.e., slow processing
						speed. Therefore, we recommend a computer with a sufficiently
						powerful discrete GPU, NPU, or M-series chip.
					</Paragraph>
					<Paragraph>
						Please download and install the following software before the
						tutorial if you want to follow along:
					</Paragraph>
					<ol>
						<li>
							Download LM Studio from{' '}
							<a href='https://lmstudio.ai'>LM Studio</a>
							<Image
								src='/images/lm-studio-0.png'
								alt='LM Studio download page'
								noBorderRadius
								width={736}
								height={446}
							/>
						</li>
						<li>
							Open the downloaded file and follow the installation instructions.
							Once installed, open LM Studio.
							<Image
								src='/images/lm-studio-1.png'
								alt='LM Studio'
								noBorderRadius
								width={736}
								height={446}
							/>
						</li>
						<li>
							Download one of the following large language models from the
							&quot;Search&quot; page:
							<ul>
								<li>
									If you have VRAM &gt; 32GB:{' '}
									<code>
										<a href='https://huggingface.co/bartowski/Yi-1.5-34B-Chat-GGUF/blob/main/Yi-1.5-34B-Chat-Q4_K_M.gguf'>
											bartowski/Yi-1.5-34B-Chat-GGUF
										</a>
									</code>{' '}
									(<code>Q4_K_M</code>)
								</li>
								<li>
									If you have VRAM &gt;= 8GB:{' '}
									<code>
										<a href='https://huggingface.co/lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF/blob/main/Meta-Llama-3.1-8B-Instruct-Q8_0.gguf'>
											lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF
										</a>
									</code>{' '}
									(<code>Q8_0</code>)
								</li>
								<li>
									The rest:{' '}
									<code>
										<a href='https://huggingface.co/bartowski/Phi-3.1-mini-4k-instruct-GGUF/blob/main/Phi-3.1-mini-4k-instruct-Q8_0_L.gguf'>
											bartowski/Phi-3.1-mini-4k-instruct-GGUF
										</a>
									</code>{' '}
									(<code>Q8_0_L</code>)
								</li>
							</ul>
							<em>
								Please note that you can use any model you like that suits your
								needs. We encourage you to experiment with different models.
							</em>
							<Image
								src='/images/lm-studio-2.png'
								alt='LM Studio search page'
								noBorderRadius
								width={736}
								height={446}
							/>
							<Image
								src='/images/lm-studio-3.png'
								alt='LM Studio download complete'
								noBorderRadius
								width={736}
								height={446}
							/>
						</li>
						<li>
							Once the model is downloaded, navigate to the &quot;Local
							Server&quot; tab, select the model, and click &quot;Start
							Server&quot;.
							<Image
								src='/images/lm-studio-4.png'
								alt='LM Studio local server tab'
								noBorderRadius
								width={736}
								height={446}
							/>
							<Image
								src='/images/lm-studio-5.png'
								alt='LM Studio loaded model'
								noBorderRadius
								width={736}
								height={446}
							/>
							<Image
								src='/images/lm-studio-6.png'
								alt='LM Studio started server'
								noBorderRadius
								width={736}
								height={446}
							/>
						</li>
					</ol>
				</Section>
				<Section>
					<SectionHeader>Starting Code</SectionHeader>
					<Paragraph>
						Starting code can be found at{' '}
						<a
							href='https://github.com/chatgpt4pcg/tutorial-2024-notebook'
							target='_blank'
							rel='noopener noreferrer'
						>
							this GitHub repository
						</a>
						.
					</Paragraph>
					<Paragraph>
						Additional instruction on how to run the code can be found in the
						<code>README.md</code> file of the repository.
					</Paragraph>
					<Paragraph>
						In case you want to follow along using the project version, which
						more closely resembles a submission to the competition, you can
						access the code at{' '}
						<a
							href='https://github.com/chatgpt4pcg/tutorial-2024'
							target='_blank'
							rel='noopener noreferrer'
						>
							this GitHub repository
						</a>
						.
					</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
