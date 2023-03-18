import Head from 'next/head';
import Image from '@/components/Image/Image';
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
							The prompt must be written in English using only alphanumeric
							characters and the following symbols: /, , +, -, *, `, &#39;,
							&quot;, ., ,, !, @, #, $, %, ^, &amp;, (, ), _, =, [, ], {'{'},{' '}
							{'}'}, |, &lt;, and &gt;.
						</li>
						<li>The maximum word count for the prompt is <strong>900 words</strong>.</li>
						<li>
							Prompts exceeding this limit or containing disallowed characters
							will result in automatic disqualification.
						</li>
						<li>
							Responses from the ChatGPT API must contain code blocks indicated
							by the presence of three backticks (```) in the output. If no code
							blocks are present, the response will be skipped, and its score
							will be 0.
						</li>
						<li>
							The prompt must include{' '}
							<strong>
								<code>&lt;OBJECT&gt;</code>
							</strong>{' '}
							to indicate a section of the prompt that will be replaced with
							each target character, such as &quot;A,&quot; &quot;B,&quot; or
							&quot;X.&quot; Prompts without{' '}
							<strong>
								<code>&lt;OBJECT&gt;</code>
							</strong>{' '}
							will not be assessed.
						</li>
						<li>
							Participants must use only the
							<strong>
								<code>ab_drop()</code>
							</strong>{' '}
							function in their response. The use of other function names or
							functions is not allowed. If intermediate results are obtained
							using other functions, participants must provide a script to
							convert them into a series of
							<strong>
								<code>ab_drop()</code>
							</strong>{' '}
							functions.
						</li>
						<li>
							<Paragraph>
								The definition of the{' '}
								<strong>
									<code>ab_drop()</code>
								</strong>{' '}
								function is as follows:
							</Paragraph>
							<ol>
								<li>
									It drops a block vertically from the top so that its center is
									located at slot{' '}
									<strong>
										<code>x_position</code>.
									</strong>
								</li>
								<li>
									<Paragraph>It has two parameters:</Paragraph>
									<ol>
										<li>
											<Paragraph>
												<strong>
													<code>block_type</code>
												</strong>
												: a value that indicates the type of block to be placed.
												The possible values are
												<strong>
													<code>b11</code>
												</strong>
												,{' '}
												<strong>
													<code>b13</code>
												</strong>
												, and{' '}
												<strong>
													<code>b31</code>
												</strong>
												.
											</Paragraph>
											<Paragraph>
												<Image
													src='combined.png'
													alt='Combined blocks'
													noBorderRadius
                          width={24*4}
												/>
											</Paragraph>
											<ol>
												<li>
													<Paragraph>
														<strong>
															<code>b11</code>
														</strong>{' '}
														denotes a square block whose size is 1x1 cell.
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
														<strong>
															<code>b13</code>
														</strong>{' '}
														denotes a column block whose size is 1x3 cells.
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
														<strong>
															<code>b31</code>
														</strong>{' '}
														denotes a row block whose size is 3x1 cells.
													</Paragraph>
													<Paragraph>
														<Image
															src='b31.png'
															alt='b31 blocks'
															noBorderRadius
                              width={24*3}
														/>
													</Paragraph>
												</li>
											</ol>
										</li>
										<li>
											<Paragraph>
												<strong>
													<code>x_position</code>
												</strong>
												: a horizontal index of a grid cell, where
												<strong>
													<code>0</code>
												</strong>{' '}
												represents the leftmost cell of the grid, and{' '}
												<strong>
													<code>W-1</code>
												</strong>{' '}
												represents the rightmost cell of the grid. The
												<strong>
													<code>x_position</code>
												</strong>{' '}
												parameter indicates the center pivot point of the block
												being placed. For example, if
												<strong>
													<code>b31</code>
												</strong>{' '}
												is placed at
												<strong>
													<code>x_position=4</code>
												</strong>
												, it will occupy cells{' '}
												<strong>
													<code>(3, 0)</code>
												</strong>
												,{' '}
												<strong>
													<code>(4, 0)</code>
												</strong>
												, and{' '}
												<strong>
													<code>(5, 0)</code>
												</strong>
												.
											</Paragraph>
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
