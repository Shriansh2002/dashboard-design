import React from "react";
import { TableHelperProps } from "@/types";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";

export function MainTable<TData>({
	table,
	columns,
}: TableHelperProps<TData>) {
	return (
		<div className='max-h-[370px] overflow-y-auto '>
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column
														.columnDef
														.header,
													header.getContext()
											  )}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody className='text-purple-900'>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={
									row.getIsSelected() && "selected"
								}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell
										key={cell.id}
										className='text-[9px]'
									>
										{flexRender(
											cell.column.columnDef
												.cell,
											cell.getContext()
										)}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={
									(columns && columns.length) || 1
								}
								className='h-24 text-center'
							>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}

export default MainTable;
