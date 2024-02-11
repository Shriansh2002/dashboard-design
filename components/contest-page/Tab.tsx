"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn, getUrlToMatch } from "@/lib/utils";
import { TTabList, TabProps } from "@/types";

export const Tab = ({ tab }: TabProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const currentTabId = getUrlToMatch(pathname);

	return (
		<li
			className={cn(
				"text-gray-600 font-medium text-sm mr-10 cursor-pointer ",
				currentTabId === tab.id &&
					"text-purple-800 font-semibold underline underline-offset-8"
			)}
			onClick={() => router.push(`/contests/${tab.url}`)}
		>
			{tab.title}
		</li>
	);
};
