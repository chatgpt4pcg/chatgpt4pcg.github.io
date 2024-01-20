import Paragraph from '@/components/ui/Paragraph/Paragraph';
import React from 'react';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function SubmissionDeadline() {
	return (
		<Section>
			<SectionHeader id='submission-deadline'>
				Submission deadline
			</SectionHeader>
			<Paragraph>Midterm: 24 May 2024 (23:59 JST)</Paragraph>
			<Paragraph>Final: 26 July 2024 (23:59 JST)</Paragraph>
			<Paragraph>
				Midterm submission is optional, although we recommend it. Any team that
				submits during the mid-term submission will be notified of the
				preliminary results. However, all teams, whether they submit during the
				midterm or not, must submit during the final submission period. Only
				submissions during the final submission period will be considered for
				the final ranking.
			</Paragraph>
		</Section>
	);
}
