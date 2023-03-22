import Divider from '@/components/Divider/Divider';
import Head from 'next/head';
import Image from '@/components/Image/Image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader/PageHeader';
import PageLayout from '@/components/PageLayout/PageLayout';
import PageSubHeader from '@/components/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/Paragraph/Paragraph';
import ReactHighlightSyntax from 'react-highlight-syntax';
import Section from '@/components/Section/Section';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import SectionSubHeader from '@/components/SectionSubHeader/SectionSubHeader';
import SectionSubSubHeader from '@/components/SectionSubSubHeader/SectionSubSubHeader';

export default function Resources() {
	return (
		<>
			<Head>
				<title>
					The 1st ChatGPT4PCG Competition: Character-like Level Generation for
					Science Birds - Useful Resources
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
				<Section>
					<SectionHeader>Sample Prompt</SectionHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{`Use \`ab_drop()\` function to generate a stable structure that looks like the &lt;OBJECT&gt;—the goal. Dropping position and order are crucial.

1. Definitions
Slots: The map's width is equally partitioned into W slots where W = 20, with slots 0 and 19 being the most left and right, respectively.
Layers: The map's height is equally partitioned into H layers where H = 16, with layers 0 and 15 being the bottom and top layers, respectively.
Base: The bottom of the map, i.e., layer 0.

2. Environment
There are three block types as follows:
b11, a square block whose width is 1 unit and height is 1 unit
b31, a horizontal block whose width is 3 units and height is 1 unit
b13, a vertical block whose width is 1 unit and height is 3 units

3. Tool
Use the \`ab_drop()\` function to vertically drop a block from layer H such that its center is at slot y and drop earlier blocks representing more bottom parts of the structure.`}
					</ReactHighlightSyntax>
				</Section>
				<Section>
					<SectionHeader>Tools</SectionHeader>
					<SectionSubHeader>ChatGPT</SectionSubHeader>
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
					<SectionSubHeader>Science Birds Evaluator</SectionSubHeader>
					<Image src='science_birds.png' alt='Science Birds screenshot' />
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
					<SectionSubSubHeader>Installation Instruction</SectionSubSubHeader>
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

					<SectionSubHeader>Online Converter</SectionSubHeader>
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
					<SectionSubHeader>Online Word Counter</SectionSubHeader>
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
					<SectionSubHeader>Online Code Extractor</SectionSubHeader>
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
					<SectionSubHeader>Online Letter Classifier</SectionSubHeader>
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
					<SectionSubHeader>Offline Scripts and Packages</SectionSubHeader>
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
