"use client";
import Image from "next/image";
import Link from "next/link";

import { FaGear } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";

import SidebarItem from "./SidebarItem";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
	return (
		<div className='hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 pb-10 bg-[#141625] justify-between'>
			<div className='flex flex-col gap-y-7'>
				<Link href='/'>
					<Image
						src='/logo.png'
						alt='Logo'
						width={140}
						height={100}
					/>
				</Link>
				<SidebarMenu />
			</div>

			<div className='flex flex-col gap-y-6'>
				<SidebarItem
					icon={FaGear}
					title='Settings'
					onClick={() => console.log("Settings")}
				/>
				<SidebarItem
					icon={IoIosHelpCircle}
					title='Support'
					onClick={() => console.log("Help Section")}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
