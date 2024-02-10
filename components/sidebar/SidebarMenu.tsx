import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { sidebarList } from "@/constants/data";

import { getTheIndexOfCurrentPage } from "@/lib/utils";
import SidebarItem from "./SidebarItem";

const SidebarMenu = () => {
	const router = useRouter();
	const pathname = usePathname();

	const indexOfCurrentPage = getTheIndexOfCurrentPage(pathname);

	const [active, setActive] = useState(indexOfCurrentPage);

	const handleActive = (idx: number) => {
		setActive(idx);
		router.push(`/${sidebarList[idx].title.toLowerCase()}`);
	};

	return (
		<ul className='flex flex-col gap-y-8'>
			{sidebarList.map((item, _idx) => (
				<SidebarItem
					key={_idx}
					icon={item.icon}
					title={item.title}
					active={active === _idx}
					onClick={() => handleActive(_idx)}
				/>
			))}
		</ul>
	);
};

export default SidebarMenu;
