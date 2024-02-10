import React from "react";
import { SidebarItemProps } from "@/types";
import { cn } from "@/lib/utils";

const SidebarItem = ({
	icon: Icon,
	title,
	onClick,
	active,
}: SidebarItemProps) => {
	const activeClassStyle = active ? "text-white" : "text-gray-400";

	return (
		<div
			className='flex items-center gap-x-2 cursor-pointer'
			onClick={onClick}
		>
			{active && (
				<div className='-ml-2 w-[1.4px] h-6 bg-white' />
			)}
			<Icon
				className={cn(
					"w-4 h-4 transition duration-200",
					activeClassStyle
				)}
			/>
			<span
				className={cn(
					"text-sm transition duration-200",
					activeClassStyle
				)}
			>
				{title}
			</span>
		</div>
	);
};

export default SidebarItem;
