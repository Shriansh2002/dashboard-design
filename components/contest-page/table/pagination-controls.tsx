import { cn } from "@/lib/utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { TableHelperProps } from "@/types";

export function PaginationControls<TData>({
	table,
}: TableHelperProps<TData>) {
	return (
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
	);
}
