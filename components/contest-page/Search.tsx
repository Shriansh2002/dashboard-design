import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
	return (
		<div className='relative'>
			<input
				type='text'
				placeholder='- search in Contests - '
				className='border rounded p-1 pl-7 w-[350px] bg-[#F0EAFE] border-[#D9D2F6] focus:outline-none focus:border-[#6420FE] text-sm placeholder:text-sm placeholder:font-medium'
			/>
			<FiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-lg text-[#949297]' />
		</div>
	);
};

export default Search;
