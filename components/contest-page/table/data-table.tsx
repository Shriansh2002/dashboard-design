"use client";

import {
	ColumnDef,
	ColumnFiltersState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { useState } from "react";
import { PaginationControls } from "./pagination-controls";
import { TableActions } from "./table-actions";
import MainTable from "./main-table";
import { Contest } from "@/types";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	handleAddRow: (sampleData: Contest) => void;
}

export function DataTable<TData, TValue>({
	columns,
	data,
	handleAddRow,
}: DataTableProps<TData, TValue>) {
	const [rowSelection, setRowSelection] = useState({});
	const [columnFilters, setColumnFilters] =
		useState<ColumnFiltersState>([]);

	const table = useReactTable<TData>({
		data: data as TData[],
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
			<TableActions table={table} handleAddRow={handleAddRow} />
			<MainTable table={table} />
			<PaginationControls table={table} />
		</div>
	);
}
