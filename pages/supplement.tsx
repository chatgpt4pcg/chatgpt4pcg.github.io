import {
	V1_PROMPT,
	V2_PROMPT,
	V3_PROMPT,
	V4_PROMPT,
	V5_PROMPT,
} from '@/constants/prompt';

import Divider from '@/components/ui/Divider/Divider';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import ReactHighlightSyntax from 'react-highlight-syntax';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SectionSubHeader from '@/components/ui/SectionSubHeader/SectionSubHeader';

export default function SupplementaryMaterialPage() {
	return (
		<>
			<PageMeta pageTitle='Supplementary Material' />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader id='improved-prompts'>Improved Prompts</SectionHeader>
					<Paragraph>
						Please see their performance on our paper. (TBA)
					</Paragraph>
					<Paragraph>
						For the full version of supplementary material containing experiment
						data, please download this file. (TBA)
					</Paragraph>
					<Divider />
					<SectionSubHeader id='v1'>V1</SectionSubHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{V1_PROMPT}
					</ReactHighlightSyntax>
					<SectionSubHeader id='v2'>V2</SectionSubHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{V2_PROMPT}
					</ReactHighlightSyntax>
					<SectionSubHeader id='v3'>V3</SectionSubHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{V3_PROMPT}
					</ReactHighlightSyntax>
					<SectionSubHeader id='v4'>V4</SectionSubHeader>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{V4_PROMPT}
					</ReactHighlightSyntax>
					<SectionSubHeader id='v5'>V5</SectionSubHeader>
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
