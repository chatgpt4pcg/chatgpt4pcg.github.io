import Head from 'next/head';
import Image from '@/components/ui/Image/Image';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import ReactHighlightSyntax from 'react-highlight-syntax';
import { SAMPLE_PROMPT } from '@/constants/prompt';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function PromptPage() {
	return (
		<>
			<Head>
				<title>
					The 1st ChatGPT4PCG Competition: Character-like Level Generation for
					Science Birds - Prompt Rules and Guidelines
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
					<SectionHeader id='sample-prompt'>Sample Prompt</SectionHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{SAMPLE_PROMPT}
					</ReactHighlightSyntax>
					<Paragraph>
						Please see a modified version and its variants on{' '}
						<Link href='/supplement'>this page</Link> and check this paper (TBA)
						for their performance.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id="rules">Prompt Rules</SectionHeader>
					<ol>
						<li>
							Prompts must be written in English using only alphanumeric
							characters, space, and the following symbols: ~ / \ + - * ` '
							&quot; . : ; ? &mdash; , ! @ # $ % ^ &amp; ( ) _ = [ ] {} | &lt;
							&gt;.
						</li>
						<li>
							The maximum word count for a prompt is <strong>900 words</strong>.
							The number of words will be counted by{' '}
							<Link href='/tools/word-counter'>our tool</Link> which has the
							same algorithm as the online version provided on the.
						</li>
						<li>
							Prompts designed for this competition must be created for a
							one-round conversation. This means that each prompt&apos;s
							interaction with ChatGPT should consist one user request to and
							one response from ChatGPT. This ensures simplicity and fairness in
							this year&apos;s competition.
						</li>
						<li>
							Prompts exceeding this limit or containing disallowed characters
							will result in automatic disqualification.
						</li>
						<li>
							The prompt must include <code>&lt;OBJECT&gt;</code> to indicate a
							section of the prompt that will be replaced by us with each target
							character, such as &quot;I&quot;, &quot;L&quot;, or &quot;U&quot;.
							Prompts without <code>&lt;OBJECT&gt;</code> will not be assessed.
						</li>
						<li>
							To ensure that code blocks can be extracted successfully from
							responses generated by the ChatGPT API, each output must include
							three backticks (```).
							<ol>
								<li>
									The <em>code extraction script</em> will only extract the
									content between the last pair of three backticks (```).
								</li>
								<li>
									The extracted code must not contain any loops. Any use of
									loops will be ignored, resulting in only one instance of the
									loop&apos;s content. The code should not use variables in the
									call of <code>ab_drop()</code> function, as this will result
									in an error and that response will be skipped for the rest of
									the evaluation process. To check the behavior of the code
									extractor, please refer to the{' '}
									<Link href='/resources'>Resources</Link> page where you can
									find an online tool for this task.
								</li>
								<li>
									If no code blocks are present or extracted code results in an
									empty string, the response will be skipped, and its score will
									be 0.
								</li>
							</ol>
						</li>
						<li>
							The use of{' '}
							<a href='https://openai.com/blog/chatgpt-plugins'>
								ChatGPT plugins
							</a>{' '}
							is not supported, i.e., all plugins are disabled during the
							evaluation process. This helps ensure fairness since the plugins
							only available to limited people, a small number of invited
							developers and web-based ChatGPT Plus users, and ChatGPT API does
							not support plugins, as of now (Mar 24, 2023 JST).
						</li>
						<li>
							The response to your prompt from ChatGPT must explicitly include a
							series of <code>ab_drop()</code> , which will be executed in that
							order by our tool to generate a character-like structure in a
							Science Birds level.
						</li>
						<li>
							The definition of the <code>ab_drop()</code> function is as
							follows:
							<ol>
								<li>
									It drops a block vertically drop a block from the top and
									center it at a specific slot, denoted by{' '}
									<code>x_position</code>.
								</li>
								<li>
									This function works on the following settings:
									<ol>
										<li>
											A structure is situated on a 2D grid with a width (
											<code>W</code>) of 20 columns and a height (<code>H</code>
											) of 16 rows. The grid consists of 320 cells, each of
											equal size.
										</li>
										<li>
											Coordinates <code>(x, y)</code> are used to represent the
											positions in the grid, where <code>x</code> and{' '}
											<code>y</code> show the horizontal and vertical indices of
											cells, respectively. For example, <code>(0, 0)</code>{' '}
											denotes the bottom-left corner cell of the grid, and{' '}
											<code>(W-1, H-1)</code> is the top-right corner cell.
										</li>
										<li>
											A cell on the grid has a size of 1x1. Each cell has unique{' '}
											<code>(x, y)</code> coordinates associated with it.
										</li>
									</ol>
								</li>
								<li>
									This function accepts two parameters:
									<ol>
										<li>
											<code>block_type</code>: a value that indicates the type
											of block to be placed. The possible values are
											<code>b11</code>, <code>b13</code>, and <code>b31</code>.
											An invalid block type will result in an error.
											<ol>
												<li>
													<code>b11</code> denotes a square block whose size is
													1x1.
													<Image
														src='b11.png'
														alt='b11 blocks'
														noBorderRadius
														width={24}
													/>
												</li>
												<li>
													<code>b13</code> denotes a column block whose size is
													1x3.
													<Image
														src='b13.png'
														alt='b13 blocks'
														noBorderRadius
														width={24}
													/>
												</li>
												<li>
													<code>b31</code> denotes a row block whose size is
													3x1.
													<Image
														src='b31.png'
														alt='b31 blocks'
														noBorderRadius
														width={24 * 3}
													/>
												</li>
											</ol>
										</li>
										<li>
											<code>x_position</code>: a horizontal index of a grid
											cell, where <code>0</code> represents the leftmost column
											of the grid, and <code>W-1</code> represents the rightmost
											column of the grid. The <code>x_position</code> parameter
											indicates the center pivot point of the block being
											placed. For example, if <code>b31</code> is the only block
											in the level and is placed at <code>x_position=4</code>,
											it will occupy cells <code>(3, 0)</code>,{' '}
											<code>(4, 0)</code>, and <code>(5, 0)</code>. An invalid
											position, like a position where a block of interest
											intrudes on the grid boundary, will result in an error.
										</li>
									</ol>
								</li>
							</ol>
						</li>
					</ol>
				</Section>
			</PageLayout>
		</>
	);
}
