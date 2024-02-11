"use client";
import { Contest } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { tableData } from "@/constants/data";
import { useState } from "react";
import { toast } from "sonner";

const Table = () => {
	const [data, setData] = useState<Contest[]>(tableData);

	function handleAddRow(sampleData: Contest) {
		setData([...data, sampleData]);

		toast.success("Contest added successfully!");
	}

	return (
		<div className='flex flex-col w-full bg-white rounded-md p-4 mt-4'>
			<DataTable
				columns={columns}
				data={data}
				handleAddRow={handleAddRow}
			/>
		</div>
	);
};

export default Table;
