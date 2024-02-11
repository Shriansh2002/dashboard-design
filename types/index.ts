import { IconType } from "react-icons";

type LayoutProps = Readonly<{
	children: React.ReactNode;
}>;

type TSidebarList = {
	icon: IconType;
	title: string;
};

type SidebarItemProps = {
	icon: IconType;
	title: string;
	active?: boolean;
	onClick: () => void;
};

type TTabList = {
	id: number;
	title: string;
	url: string;
};

type TabProps = {
	tab: TTabList;
};

export type {
	LayoutProps,
	TSidebarList,
	SidebarItemProps,
	TTabList,
	TabProps,
};
