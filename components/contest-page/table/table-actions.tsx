import { BiPlus } from "react-icons/bi";
import Filters from "../Filters";

import { Contest, TableHelperProps } from "@/types";

type TableActionsProps = TableHelperProps<Contest> & {
	handleAddRow: (sampleData: Contest) => void;
};

export function TableActions<TData>({
	table,
	handleAddRow,
}: TableActionsProps) {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex gap-x-2'>
				<div className='flex items-center py-4'>
					<input
						value={
							(table
								.getColumn("name")
								?.getFilterValue() as string) ?? ""
						}
						onChange={(event) =>
							table
								.getColumn("name")
								?.setFilterValue(event.target.value)
						}
						className='border rounded p-1 pl-7 w-[350px] bg-[#F0EAFE] border-[#D9D2F6] focus:outline-none focus:border-[#6420FE] text-sm placeholder:text-sm placeholder:font-medium'
						placeholder='- search in Contests - '
					/>
				</div>
				<Filters />
			</div>
			<button
				className='bg-[#6420FE] text-white px-2 py-1 text-xs flex gap-x-1 items-center h-10'
				onClick={() => {
					let sampleData: Contest = {
						id: Math.random(),
						name: "New Contest",
						active: false,
						challenges: [],
						targetAudience: [],
						validity: {
							start: "",
							end: "",
						},
					};

					handleAddRow(sampleData);
				}}
			>
				<p>Add a new contest</p>
				<BiPlus />
			</button>
		</div>
	);
}
