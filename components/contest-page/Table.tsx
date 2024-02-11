import { BiPlus } from "react-icons/bi";
import Search from "./Search";
import Filters from "./Filters";

const Table = () => {
	return (
		<div className='flex flex-col w-full bg-white rounded-md p-4'>
			<div className='flex justify-between'>
				<div className='flex gap-x-2'>
					<Search />
					<Filters />
				</div>
				<button className='bg-[#6420FE] text-white px-2 py-1 text-xs flex gap-x-1 items-center'>
					<p>Add a new contest</p>
					<BiPlus />
				</button>
			</div>
		</div>
	);
};

export default Table;
