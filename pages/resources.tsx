import Head from 'next/head';
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
					<SectionSubHeader>Tools</SectionSubHeader>
					<SectionSubSubHeader>ChatGPT</SectionSubSubHeader>
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
					<SectionSubSubHeader>Science Birds</SectionSubSubHeader>
					<Paragraph>
						Please visit our{' '}
						<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
							Modified Science Birds repository
						</a>{' '}
						to download the project and find out more detail about it.
					</Paragraph>
					<Paragraph>
						This repository contains a modified version of the original Science
						Birds game. The modifications include adjusting the blocks to match
						the grid specification and adding a plugin called "Grid Level
						Converter MkIII" that allows users to convert strings of the{' '}
						<code>ab_drop()</code> function into Science Birds levels.
					</Paragraph>
					<SectionSubSubHeader>
						Online Text-to-XML Converter
					</SectionSubSubHeader>
					<Link href="/converter/xml">Text-to-XML Converter</Link>
					<SectionSubSubHeader>
						Online Text-to-Image Converter
					</SectionSubSubHeader>
					<Paragraph>TBA</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
