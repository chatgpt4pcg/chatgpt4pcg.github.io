import { V1_PROMPT, V2_PROMPT, V3_PROMPT, V4_PROMPT, V5_PROMPT } from '@/constants/prompt';

import Divider from '@/components/ui/Divider/Divider';
import Head from 'next/head';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import ReactHighlightSyntax from 'react-highlight-syntax';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SectionSubHeader from '@/components/ui/SectionSubHeader/SectionSubHeader';

export default function SupplementaryMaterialPage() {
	return (
		<>
			<Head>
				<title>
					The 1st ChatGPT4PCG Competition: Character-like Level Generation for
					Science Birds - Supplementary Material
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
					<SectionHeader id="improved-prompts">Improved Prompts</SectionHeader>
					<Paragraph>Please see their performance on our paper. (TBA)</Paragraph>
					<Paragraph>
						For the full version of supplementary material containing experiment
						data, please download this file. (TBA)
					</Paragraph>
					<Divider />
					<SectionSubHeader id="v1">V1</SectionSubHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{V1_PROMPT}
					</ReactHighlightSyntax>
					<SectionSubHeader id="v2">V2</SectionSubHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{V2_PROMPT}
					</ReactHighlightSyntax>
					<SectionSubHeader id="v3">V3</SectionSubHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{V3_PROMPT}
					</ReactHighlightSyntax>
					<SectionSubHeader>V4</SectionSubHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{V4_PROMPT}
					</ReactHighlightSyntax>
					<SectionSubHeader id="v5">V5</SectionSubHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{V5_PROMPT}
					</ReactHighlightSyntax>
				</Section>
			</PageLayout>
		</>
	);
}