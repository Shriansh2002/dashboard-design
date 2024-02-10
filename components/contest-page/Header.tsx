import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoNotificationsOffCircle } from "react-icons/io5";

export const ContestsPageHeader = () => {
	return (
		<section className='flex justify-between '>
			<h1 className='text-2xl font-normal text-[#25076B] font-serif'>
				Contests
			</h1>

			<div className='flex items-center gap-x-3'>
				<button className='rounded-3xl px-4 py-2 flex items-center gap-x-2 border border-purple-300 bg-purple-50 text-purple-950 font-semibold text-sm'>
					<span className='text-purple-500 font-normal'>
						Development
					</span>

					<label className='relative inline-flex items-center cursor-pointer'>
						<input
							type='checkbox'
							value=''
							className='sr-only peer'
							checked
						/>
						<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-950"></div>
					</label>

					<span className=''>Production</span>
				</button>

				<button className='flex items-center border border-purple-300 bg-purple-50 rounded-3xl px-2 py-2'>
					<IoNotificationsOffCircle className='text-[#25076B] h-5 w-5' />
				</button>

				<button className='rounded-3xl px-4 py-2 flex items-center gap-x-2 border border-purple-300 bg-purple-50'>
					<img
						className='w-6 h-6 rounded-full'
						alt='avatar'
						src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
					/>
					<span className='text-purple-950 font-semibold'>
						ROG-IO
					</span>

					<FaCaretDown className='text-purple-950 h-3 w-3' />
				</button>
			</div>
		</section>
	);
};
