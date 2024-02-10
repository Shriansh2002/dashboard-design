import { ActiveSidebarItem, sidebarList } from "@/constants/data";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getTheIndexOfCurrentPage(pathname: string): number {
	const idx = sidebarList.findIndex((item) =>
		pathname.includes(item.title.toLowerCase())
	);
	return idx || ActiveSidebarItem.Dashboard;
}
