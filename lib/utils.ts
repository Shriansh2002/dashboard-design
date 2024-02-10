import { ActiveSidebarItem, sidebarList } from "@/constants/data";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getTheIndexOfCurrentPage(pathname: string): number {
	const formattedPathname = pathname.replace(/-/g, " ");
	const idx = sidebarList.findIndex((item) =>
		formattedPathname.includes(item.title.toLowerCase())
	);
	return idx !== -1 ? idx : ActiveSidebarItem.Dashboard;
}
