import { ContestsPageHeader } from "@/components/contest-page/Header";
import { TabsView } from "@/components/contest-page/TabsView";
import { LayoutProps } from "@/types";
import React from "react";

import { Toaster } from "@/components/ui/sonner";

const ContestPageLayout = ({ children }: LayoutProps) => {
	return (
		<main className='bg-[#FAF8FE] w-full flex flex-col px-10 py-10'>
			<ContestsPageHeader />
			<TabsView />

			{children}

			<Toaster position='top-right' richColors />
		</main>
	);
};

export default ContestPageLayout;
