import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

import competitionConstants from '../../public/files/constants.json';
import styles from './WeightsTable.module.css';
import { useState } from 'react';

type CompetitionWeights = {
	character: string;
	weight: string;
	weightStability: string;
	weightSimilarity: string;
	weightDiversity: string;
};

const columnHelper = createColumnHelper<CompetitionWeights>();

const columns = [
	columnHelper.accessor('character', {
		cell: (info) => info.getValue(),
		header: () => <span>Character</span>,
	}),
	columnHelper.accessor('weightStability', {
		cell: (info) => parseFloat(info.getValue()).toFixed(2),
		header: () => <span>Stability Weight</span>,
	}),
	columnHelper.accessor('weightSimilarity', {
		cell: (info) => parseFloat(info.getValue()).toFixed(2),
		header: () => <span>Similarity Weight</span>,
	}),
	columnHelper.accessor('weightDiversity', {
		cell: (info) => parseFloat(info.getValue()).toFixed(2),
		header: () => <span>Diversity Weight</span>,
	}),
	columnHelper.accessor('weight', {
		cell: (info) =>
			parseFloat(info.getValue()) > 0.36 ? (
				<u>
					<strong>{parseFloat(info.getValue()).toFixed(2)}</strong>
				</u>
			) : (
				parseFloat(info.getValue()).toFixed(2)
			),
		header: () => <span>Weight</span>,
	}),
];

export default function WeightsTable() {
	const [data, setData] = useState<CompetitionWeights[]>(
		competitionConstants.weights
	);

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
			</table>
		</div>
	);
}
