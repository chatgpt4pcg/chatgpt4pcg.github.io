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
					<SectionHeader>Useful Resources</SectionHeader>
					<SectionSubHeader>Sample Prompt</SectionSubHeader>
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
					<SectionSubHeader>Science Birds</SectionSubHeader>
					<Image src='science_birds.png' alt='Science Birds screenshot' />
					<Paragraph>
						This is a modified version of{' '}
						<a href='https://github.com/lucasnfe/science-birds'>
							Science Birds
						</a>{' '}
						that supports blocks used in the competition. Additionally, it comes
						with a converter feature that can convert a text consisting of a
						series of <code>ab_drop()</code> functions into a valid Science
						Birds level.
					</Paragraph>
					<Paragraph>
						You can download the modified version of Science Birds from{' '}
						<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
							https://github.com/chatgpt4pcg/modified-science-birds
						</a>
						.
					</Paragraph>
					<SectionSubSubHeader>Installation Instruction</SectionSubSubHeader>
					<ol>
						<li>Download Unity Hub</li>
						<li>Open the project in Unity Hub</li>
						<li>Download the required version of Unity (if needed)</li>
						<li>Open project in Unity</li>
					</ol>
					<Paragraph>
						For further installation steps, please refer to the{' '}
						<a href='https://github.com/lucasnfe/science-birds'>
							Science Birds
						</a>{' '}
						repository.
					</Paragraph>
					<SectionSubHeader>Online Converter</SectionSubHeader>
					<Paragraph>
						The converter is a tool that creates an XML file and image from a
						series of <code>ab_drop()</code> function string. The resulting XML
						file provides a structured representation of the functions while the
						image shows the visual representation of the functions. It is
						recommended to use the converter on a desktop device to ensure
						optimal usage and accurate generation of output files.
					</Paragraph>
					<Image src='online_converter.png' alt='Online converter screenshot' />
					<ol>
						<li>
							Visit our online converter at{' '}
							<Link href='/tools/converter'>
								https://chatgpt4pcg.github.io/tools/converter
							</Link>
							.
						</li>
						<li>
							Paste the text into the first input box, ensuring that it is in
							the correct format.
						</li>
						<li>Click the &quot;Convert&quot; button.</li>
						<li>
							You can either copy or download the XML result and test it in
							Science Birds. To download the image, click the &quot;Download
							image&quot; button.
						</li>
					</ol>
					<Paragraph>
						Note that the XML file must be placed in the{' '}
						<code>Assets/StreamingAssets/Levels</code> folder.
					</Paragraph>
					<SectionSubHeader>Online Word Counter</SectionSubHeader>
					<Paragraph>
						The word counter web app is a quick and efficient tool that uses the{' '}
						<a href='https://www.npmjs.com/package/words-count'>
							<code>words-count</code>
						</a>{' '}
						package to accurately count the number of words in your prompt.
					</Paragraph>
					<Paragraph>
						Visit our online word counter at{' '}
						<Link href='/tools/word-counter'>
							https://chatgpt4pcg.github.io/tools/word-counter
						</Link>
						.
					</Paragraph>
					<SectionSubHeader>Online Code Extractor</SectionSubHeader>
					<Paragraph>TBA</Paragraph>
					<SectionSubHeader>Online OCR Recognizer</SectionSubHeader>
					<Paragraph>TBA</Paragraph>
					<SectionSubHeader>Offline Scripts and Packages</SectionSubHeader>
					<Paragraph>TBA</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
