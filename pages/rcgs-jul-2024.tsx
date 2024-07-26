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
					<SectionHeader>Slide</SectionHeader>
					<Paragraph>
						The slide deck for the tutorial can be found{' '}
            <a
              href='/files/pe_for_pcg.pdf'
              download
            >
              here
            </a>
					</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
