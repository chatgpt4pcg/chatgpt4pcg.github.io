import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

import competitionResult from '../../public/files/result.json';
import styles from './ResultTable.module.css';
import { useState } from 'react';

type CompetitionResult = {
	rank: number;
	teamName: string;
	normalizedPromptScore: number;
	promptScore: number;
};

const columnHelper = createColumnHelper<CompetitionResult>();

const mapRank = (rank: number) => {
	if (rank === -1) {
		return '-';
	} else if (rank === -2) {
		return 'Dis';
	}

	return rank;
};

const columns = [
	columnHelper.accessor('rank', {
		cell: (info) => mapRank(info.getValue()),
		header: () => <span>Rank</span>,
	}),
	columnHelper.accessor('teamName', {
		cell: (info) => info.getValue(),
		header: () => <span>Team Name</span>,
	}),
	columnHelper.accessor('promptScore', {
		cell: (info) => (info.getValue() === -1 ? '-' : info.getValue().toFixed(2)),
		header: () => <span>Prompt Score</span>,
	}),
	columnHelper.accessor('normalizedPromptScore', {
		cell: (info) => (info.getValue() === -1 ? '-' : info.getValue().toFixed(2)),
		header: () => <span>Normalized Prompt Score</span>,
	}),
];

export default function ResultTable() {
	const [data, setData] = useState<CompetitionResult[]>(competitionResult);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className={styles.tableContainer}>
			<table className={styles.table}>
				<thead className={styles.tableHeader}>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody className={styles.tableBody}>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
				<tfoot className={styles.tableFooter}>
					<tr>
						<td colSpan={4}>
							<p>
								1. <strong>Dis</strong> means disqualified. The disqualified
								teams are:
							</p>
							<ul>
								<li>BirdBirdBird: maximum word count exceeded (915)</li>
								<li>BirdsTeam: maximum word count exceeded (905)</li>
								<li>pixelArt: contains disallowed characters (°) </li>
							</ul>
							<p>
								2. Please note that "<strong>The Organizer</strong>" is an entry
								from the organizers, thus it is not eligible for the prize.
							</p>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
