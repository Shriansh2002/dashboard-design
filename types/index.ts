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

export type { LayoutProps, TSidebarList, SidebarItemProps };
