import { BiPlus } from "react-icons/bi";
import Search from "../Search";
import Filters from "../Filters";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Contest } from "@/types";

import { tableData } from "@/constants/data";

async function getData(): Promise<Contest[]> {
	return tableData;
}

const Table = async () => {
	const data = await getData();

	return (
		<div className='flex flex-col w-full bg-white rounded-md p-4 mt-4'>
			<DataTable columns={columns} data={data} />
		</div>
	);
};

export default Table;
