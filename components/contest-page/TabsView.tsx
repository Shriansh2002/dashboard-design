import { tabList as tabs } from "@/constants/data";
import { Tab } from "./Tab";

export const TabsView = () => {
	return (
		<section className='mt-10 mb-4 border-b border-purple-500 pb-1'>
			<ul className='flex items-center'>
				{tabs.map((tab, index) => (
					<Tab tab={tab} key={index} />
				))}
			</ul>
		</section>
	);
};
