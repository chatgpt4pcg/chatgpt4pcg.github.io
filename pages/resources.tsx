import Divider from '@/components/ui/Divider/Divider';
import Image from '@/components/ui/Image/Image';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import ReactHighlightSyntax from 'react-highlight-syntax';
import { SAMPLE_PROMPT } from '@/constants/prompt';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SectionSubHeader from '@/components/ui/SectionSubHeader/SectionSubHeader';
import SectionSubSubHeader from '@/components/ui/SectionSubSubHeader/SectionSubSubHeader';

export default function ResourcesPage() {
	return (
		<>
			<PageMeta pageTitle='Resources' />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader id='sample-prompt'>Sample Prompt</SectionHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{SAMPLE_PROMPT}
					</ReactHighlightSyntax>
				</Section>
				<Section>
					<SectionHeader id='tools'>Tools</SectionHeader>
					<SectionSubHeader id='chatgpt'>ChatGPT</SectionSubHeader>
					<ol>
						<li>
							Open your preferred web browser (such as Chrome, Firefox, or
							Safari).
						</li>
						<li>
							Navigate to the OpenAI website at{' '}
							<a href='https://chat.openai.com/chat'>
								https://chat.openai.com/chat
							</a>
						</li>
						<li>Start interact with the model.</li>
					</ol>
					<Divider />
					<SectionSubHeader id='science-birds-evaluator'>
						Science Birds Evaluator
					</SectionSubHeader>
					<Image src='/images/science_birds.png' alt='Science Birds screenshot' />
					<Paragraph>
						This is a modified version of{' '}
						<a href='https://github.com/lucasnfe/science-birds'>
							Science Birds
						</a>{' '}
						that supports blocks used in the competition. It provides a feature
						that evaluates the stability of a particular level and generates an
						image used for the similarity checking script.
					</Paragraph>
					<Paragraph>
						You can download this version of Science Birds from{' '}
						<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
							https://github.com/chatgpt4pcg/modified-science-birds
						</a>
						.
					</Paragraph>
					<SectionSubSubHeader id='sbe-installation'>
						Installation Instruction
					</SectionSubSubHeader>
					<ol>
						<li>
							Download <a href='https://unity.com/download'>Unity Hub</a>
						</li>
						<li>Open a project in Unity Hub</li>
						<li>Download the required version of Unity (if needed)</li>
						<li>Open the project in Unity</li>
					</ol>
					<Paragraph>
						For further installation steps, please refer to the{' '}
						<a href='https://github.com/lucasnfe/science-birds'>
							Science Birds
						</a>{' '}
						repository.
					</Paragraph>
					<Divider />
					<SectionSubHeader id='online-converter'>
						Online Converter
					</SectionSubHeader>
					<Image src='/images/converter.png' alt='Online Converter screenshot' />
					<Paragraph>
						The converter is a tool that creates an XML file and an image from a
						series of <code>ab_drop()</code> function string. The resulting XML
						file provides a structured representation of the functions while an
						image shows the visual representation of the functions. It is
						recommended to use the converter on a desktop device to ensure
						optimal usage and accurate generation of output files.
					</Paragraph>
					<ol>
						<li>
							Visit our online converter at{' '}
							<Link href='/tools/converter'>
								https://chatgpt4pcg.github.io/tools/converter
							</Link>
						</li>
						<li>
							Paste the text into the first input box, ensuring that it is in
							the correct format
						</li>
						<li>Click the &quot;Convert&quot; button.</li>
						<li>
							You can either copy or download the XML result and test it in
							Science Birds. To download the image, click the &quot;Download
							image&quot; button
						</li>
					</ol>
					<Paragraph>
						Note that the XML file must be placed in the{' '}
						<code>Assets/StreamingAssets/Levels</code> folder.
					</Paragraph>
					<span className='red'>
						Please note that the image generated by this online tool is intended
						for illustrative purposes only and will not be used for evaluation.
						For the actual evaluation tool, we recommend checking out the{' '}
						<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
							modified version of Science Birds.
						</a>
					</span>
					<Divider />
					<SectionSubHeader id='online-work-counter'>
						Online Word Counter
					</SectionSubHeader>
					<Image src='/images/word.png' alt='Online Word Counter screenshot' />
					<Paragraph>
						The word counter web app is a quick and efficient tool that uses the{' '}
						<a href='https://www.npmjs.com/package/words-count'>
							<code>words-count</code>
						</a>{' '}
						package - the same package used for our evaluation process - to
						accurately count the number of words in your prompt.
					</Paragraph>
					<Paragraph>
						Visit our online word counter at{' '}
						<Link href='/tools/word-counter'>
							https://chatgpt4pcg.github.io/tools/word-counter
						</Link>
						.
					</Paragraph>
					<Divider />
					<SectionSubHeader id='online-code-extractor'>
						Online Code Extractor
					</SectionSubHeader>
					<Image src='/images/code.png' alt='Online Code Extractor screenshot' />
					<Paragraph>
						The online code extractor extracts a code block from ChatGPT API
						responses, demonstrating the same algorithm used in the{' '}
						<a href='https://github.com/chatgpt4pcg/code-extraction-script'>
							code extraction script
						</a>
						.
					</Paragraph>
					<Paragraph>
						Visit our online code extractor at{' '}
						<Link href='/tools/code'>
							https://chatgpt4pcg.github.io/tools/code
						</Link>
						.
					</Paragraph>
					<Divider />
					<SectionSubHeader id='online-letter-classifier'>
						Online Letter Classifier
					</SectionSubHeader>
					<Image src='/images/classifier.png' alt='Online Letter Classifier screenshot' />
					<Paragraph>
						<span className='red'>
							Please note that the Online Letter Classifier embed in the tool
							page is also available at{' '}
							<a href='https://huggingface.co/spaces/pittawat/letter_recognizer'>
								Hugging Face Spaces
							</a>{' '}
							and only shows the top five predicted classes with associated
							percentage. For the full version of the model, please use the{' '}
							<a href='https://github.com/chatgpt4pcg/similarity-checking-script'>
								similarity checking script
							</a>
							. This model was a fine-tuned version of{' '}
							<a href='https://huggingface.co/google/vit-base-patch16-224-in21k'>
								Vision Transformer (ViT)
							</a>{' '}
							trained on{' '}
							<a href='https://huggingface.co/datasets/pittawat/letter_recognition'>
								this dataset
							</a>
							. More information on the dataset is also available on the same
							page.
						</span>
					</Paragraph>
					<Paragraph>
						Visit our online Letter Classifier at{' '}
						<Link href='/tools/classifier'>
							https://chatgpt4pcg.github.io/tools/classifier
						</Link>
						.
					</Paragraph>
					<Divider />
					<SectionSubHeader id='offline-scripts-packgaes'>
						Offline Scripts and Packages
					</SectionSubHeader>
					<Paragraph>
						Qualification checking script -{' '}
						<a href='https://github.com/chatgpt4pcg/qualification-checking-script'>
							https://github.com/chatgpt4pcg/qualification-checking-script
						</a>
					</Paragraph>
					<Paragraph>
						Response gathering script -{' '}
						<a href='https://github.com/chatgpt4pcg/response-gathering-script'>
							https://github.com/chatgpt4pcg/response-gathering-script
						</a>
					</Paragraph>
					<Paragraph>
						Code extraction script -{' '}
						<a href='https://github.com/chatgpt4pcg/code-extraction-script'>
							https://github.com/chatgpt4pcg/code-extraction-script
						</a>
					</Paragraph>
					<Paragraph>
						Text-to-XML conversion script -{' '}
						<a href='https://github.com/chatgpt4pcg/text-to-xml-converter-script'>
							https://github.com/chatgpt4pcg/text-to-xml-converter-script
						</a>
					</Paragraph>
					<Paragraph>
						Similarity checking script -{' '}
						<a href='https://github.com/chatgpt4pcg/similarity-checking-script'>
							https://github.com/chatgpt4pcg/similarity-checking-script
						</a>
					</Paragraph>
					<Paragraph>
						Scoring and ranking script -{' '}
						<a href='https://github.com/chatgpt4pcg/scoring-and-ranking-script'>
							https://github.com/chatgpt4pcg/scoring-and-ranking-script
						</a>
					</Paragraph>
					<Paragraph>
						<code>chatgpt4pcg</code> npm package -{' '}
						<a href='https://github.com/chatgpt4pcg/chatgpt4pcg'>
							https://github.com/chatgpt4pcg/chatgpt4pcg
						</a>
					</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}