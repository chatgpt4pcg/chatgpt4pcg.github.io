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

export default function Prompt() {
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
					<SectionHeader>Prompt Rules</SectionHeader>
					<ol>
						<li>
							<Paragraph>
								The prompt must be written in English using only alphanumeric
								characters and the following symbols: /, , +, -, *, `, &#39;,
								&quot;, ., ,, !, @, #, $, %, ^, &amp;, (, ), _, =, [, ], {'{'},{' '}
								{'}'}, |, &lt;, and &gt;.
							</Paragraph>
						</li>
						<li>
							<Paragraph>
								The maximum word count for the prompt is{' '}
								<strong>900 words</strong>. The number of words will be counted
								by our tool which has the same algorithm as the online version
								provided on the <Link href='/resources'>Resources</Link> page.
							</Paragraph>
						</li>
						<li>
							<Paragraph>
								Prompts must be designed for a one-round conversation, meaning
								that there should be only one user request (the prompt) and one
								response from ChatGPT. This ensures simplicity and fairness in
								this year&quot;s competition.
							</Paragraph>
						</li>
						<li>
							<Paragraph>
								Prompts exceeding this limit or containing disallowed characters
								will result in automatic disqualification.
							</Paragraph>
						</li>
						<li>
							<Paragraph>
								Responses from the ChatGPT API must contain code blocks
								indicated by the presence of three backticks (```) in the
								output.
							</Paragraph>
							<ol>
								<li>
									<Paragraph>
										The code extraction script will only extract the content
										between the last pair of three backticks (```).
									</Paragraph>
								</li>
								<li>
									<Paragraph>
										The extracted code must not contain any loops. Any use of
										loops will be ignored, resulting in only one instance of the
										loop's content. The code should not use variables in the
										call of <code>ab_drop()</code> function, as this will result
										in an error and that response will be skipped for the rest
										of the evaluation process. To check the behavior of the code
										extractor, please refer to the{' '}
										<Link href='/resources'>Resources</Link> page where you can
										find an online tool.
									</Paragraph>
								</li>
								<li>
									<Paragraph>
										If no code blocks are present or extracted code results in
										an empty string, the response will be skipped, and its score
										will be 0.
									</Paragraph>
								</li>
							</ol>
						</li>
						<li>
							<Paragraph>
								The prompt must include <code>&lt;OBJECT&gt;</code> to indicate
								a section of the prompt that will be replaced by us with each
								target character, such as &quot;A,&quot; &quot;B,&quot; or
								&quot;X.&quot; Prompts without <code>&lt;OBJECT&gt;</code> will
								not be assessed.
							</Paragraph>
						</li>
						<li>
							<Paragraph>
								The response to your prompt from ChatGPT must explicitly include
								a series of <code>ab_drop()</code> , which will be executed in
								that order by our tool to generate a character-like structure in
								a Science Birds level.
							</Paragraph>
						</li>
						<li>
							<Paragraph>
								The definition of the <code>ab_drop()</code> function is as
								follows:
							</Paragraph>
							<ol>
								<li>
									<Paragraph>
										It drops a block vertically from the top so that its center
										is located at slot <code>x_position</code>.
									</Paragraph>
								</li>
								<li>
									<Paragraph>
										This function works on the following settings:
									</Paragraph>
									<ol>
										<li>
											<Paragraph>
												A character is placed on a 2D grid with a width (
												<code>W</code>) of 20 columns and a height (
												<code>H</code>) of 16 rows. The grid is formed by 320
												equal-size cells.
											</Paragraph>
										</li>
										<li>
											<Paragraph>
												Coordinates <code>(x, y)</code> are used to represent
												the positions in the grid, where <code>x</code> and{' '}
												<code>y</code> show the horizontal and vertical indices
												of cells, respectively. For example, <code>(0, 0)</code>{' '}
												denotes the bottom-left corner cell of the grid, and{' '}
												<code>(W-1, H-1)</code> is the top-right corner cell.
											</Paragraph>
										</li>
										<li>
											<Paragraph>
												A cell on the grid has a size of 1x1. Each cell has a
												unique <code>(x, y)</code> coordinate associated with
												it.
											</Paragraph>
										</li>
									</ol>
								</li>
								<li>
									<Paragraph>It has two parameters:</Paragraph>
									<ol>
										<li>
											<Paragraph>
												<code>block_type</code>: a value that indicates the type
												of block to be placed. The possible values are
												<code>b11</code>, <code>b13</code>, and <code>b31</code>
												. An invalid block type will result in an error.
											</Paragraph>
											<ol>
												<li>
													<Paragraph>
														<code>b11</code> denotes a square block whose size
														is 1x1.
													</Paragraph>
													<Paragraph>
														<Image
															src='b11.png'
															alt='b11 blocks'
															noBorderRadius
															width={24}
														/>
													</Paragraph>
												</li>
												<li>
													<Paragraph>
														<code>b13</code> denotes a column block whose size
														is 1x3.
													</Paragraph>
													<Paragraph>
														<Image
															src='b13.png'
															alt='b13 blocks'
															noBorderRadius
															width={24}
														/>
													</Paragraph>
												</li>
												<li>
													<Paragraph>
														<code>b31</code> denotes a row block whose size is
														3x1.
													</Paragraph>
													<Paragraph>
														<Image
															src='b31.png'
															alt='b31 blocks'
															noBorderRadius
															width={24 * 3}
														/>
													</Paragraph>
												</li>
											</ol>
										</li>
										<li>
											<Paragraph>
												<code>x_position</code>: a horizontal index of a grid
												cell, where <code>0</code> represents the leftmost
												column of the grid, and <code>W-1</code> represents the
												rightmost column of the grid. The{' '}
												<code>x_position</code> parameter indicates the center
												pivot point of the block being placed. For example, if{' '}
												<code>b31</code> is the only block in the level and is
												placed at <code>x_position=4</code>, it will occupy
												cells <code>(3, 0)</code>, <code>(4, 0)</code>, and{' '}
												<code>(5, 0)</code>. An invalid position, like the
												position where a block of interest intrudes on the grid
												boundary, will result in an error.
											</Paragraph>
										</li>
									</ol>
								</li>
							</ol>
						</li>
						<li>
							<Paragraph>
								We do not encourage the use of pre-defined prompting styles that
								rely solely on if-then rules, as shown in the example.
							</Paragraph>
							<ReactHighlightSyntax
								language={'PlainText'}
								theme={'Base16Darcula'}
								copy={true}
								copyBtnTheme={'Dark'}
							>{`If the task is to generate the character "I" then just do the following.
ab_drop(b13, 9)
ab_drop(b13, 9)
ab_drop(b31, 9
ab_drop(b11, 9)
else if the task is to generate the character "U" then just do the following
ab_drop(b11, 7)
ab_drop(b13, 7
ab_drop(b31, 9)
ab_drop(b11, 11)
ab_drop(b13, 11)`}</ReactHighlightSyntax>
						</li>
					</ol>
				</Section>
			</PageLayout>
		</>
	);
}
