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
			<Paragraph>
				<span className='line-through'>Midterm: 19 May 2023 (23:59 JST)</span>
			</Paragraph>
			<Paragraph>
				<span className='line-through'>
					Final: 29 July 2023 21 July 2023 (23:59 JST)
				</span>
			</Paragraph>
			<Paragraph>
				If OpenAI releases an update to free-version web-based ChatGPT one week
				before the deadline (either for the midterm or final), we will extend
				the deadline by one week to give participants enough time to adjust
				their prompts. We will notify all participants who have submitted their
				work by email if this occurs. We will also make an announcement on our
				website.
			</Paragraph>
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
