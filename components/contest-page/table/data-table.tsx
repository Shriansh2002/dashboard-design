"use client";

import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getFilteredRowModel,
	useReactTable,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Filters from "../Filters";
import { BiPlus } from "react-icons/bi";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const [rowSelection, setRowSelection] = useState({});
	const [columnFilters, setColumnFilters] =
		useState<ColumnFiltersState>([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onRowSelectionChange: setRowSelection,
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			rowSelection,
			columnFilters,
		},
	});

	return (
		<div className='mt-4'>
			<div className='flex justify-between items-center'>
				<div className='flex gap-x-2'>
					<div className='flex items-center py-4'>
						<input
							value={
								(table
									.getColumn("name")
									?.getFilterValue() as string) ??
								""
							}
							onChange={(event) =>
								table
									.getColumn("name")
									?.setFilterValue(
										event.target.value
									)
							}
							className='border rounded p-1 pl-7 w-[350px] bg-[#F0EAFE] border-[#D9D2F6] focus:outline-none focus:border-[#6420FE] text-sm placeholder:text-sm placeholder:font-medium'
							placeholder='- search in Contests - '
						/>
					</div>
					<Filters />
				</div>
				<button className='bg-[#6420FE] text-white px-2 py-1 text-xs flex gap-x-1 items-center h-10'>
					<p>Add a new contest</p>
					<BiPlus />
				</button>
			</div>
			<div className='max-h-[370px] overflow-y-auto '>
				<Table>
					<TableHeader>
						{table
							.getHeaderGroups()
							.map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map(
										(header) => {
											return (
												<TableHead
													key={header.id}
												>
													{header.isPlaceholder
														? null
														: flexRender(
																header
																	.column
																	.columnDef
																	.header,
																header.getContext()
														  )}
												</TableHead>
											);
										}
									)}
								</TableRow>
							))}
					</TableHeader>
					<TableBody className='text-purple-900'>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={
										row.getIsSelected() &&
										"selected"
									}
								>
									{row
										.getVisibleCells()
										.map((cell) => (
											<TableCell
												key={cell.id}
												className='text-[9px]'
											>
												{flexRender(
													cell.column
														.columnDef
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
									colSpan={columns.length}
									className='h-24 text-center'
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<div className='flex items-center justify-end space-x-2 py-4'>
				<div className='text-xs px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-[#B3D2FA] rounded-2xl'>
					<span className='mr-1 font-medium'>
						Rows per page:
					</span>
					<select
						value={table.getState().pagination.pageSize}
						onChange={(e) => {
							table.setPageSize(Number(e.target.value));
						}}
						className='bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent py-1 text-sm rounded-3xl'
					>
						{[5, 10, 15, 20, 25].map((pageSize) => (
							<option
								key={pageSize}
								value={pageSize}
								defaultValue={4}
								className='bg-white'
							>
								{pageSize}
							</option>
						))}
					</select>
				</div>
				<p className='text-sm text-gray-500'>
					{table.getState().pagination.pageIndex + 1}-{" "}
					{table.getState().pagination.pageSize} of{" "}
					{table.getPageCount()}
				</p>
				<IoIosArrowBack
					onClick={() => {
						if (table.getCanPreviousPage())
							table.previousPage();
					}}
					className={cn(
						"cursor-pointer",
						!table.getCanPreviousPage() &&
							"text-gray-300 cursor-not-allowed"
					)}
				/>
				<IoIosArrowForward
					onClick={() => {
						if (table.getCanNextPage()) table.nextPage();
					}}
					className={cn(
						"cursor-pointer",
						!table.getCanNextPage() &&
							"text-gray-300 cursor-not-allowed"
					)}
				/>
			</div>
		</div>
	);
}
