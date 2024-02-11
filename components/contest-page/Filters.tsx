import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";

const Filters = () => {
	return (
		<div className='flex items-center gap-x-2'>
			<div className='bg-[#B3D2FA] rounded-xl text-xs p-1 flex items-center gap-x-[1px]'>
				<div className='flex items-center gap-x-1  p-1'>
					<span className='font-semibold'>Yearly</span>
					<BiChevronDown />
				</div>
				<div className='bg-white p-1 rounded-xl'>
					20 Jan 2022 - 20 Jul 2023
				</div>
			</div>
			<div className='rounded-full bg-[#B3D2FA] p-1'>
				<FaFilter className='h-5 w-5 p-1' />
			</div>
		</div>
	);
};

export default Filters;
