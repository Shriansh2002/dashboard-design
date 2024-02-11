import { ColumnDef, type Table } from "@tanstack/react-table";
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

type Contest = {
	id: number;
	name: string;
	active: boolean;
	validity: {
		start: string;
		end: string;
	};
	challenges: string[];
	targetAudience: string[] | null;
};

type TableHelperProps<TData> = {
	table: Table<TData>;
	columns?: ColumnDef<TData, any>[];
};

export type {
	LayoutProps,
	TSidebarList,
	SidebarItemProps,
	TTabList,
	TabProps,
	Contest,
	TableHelperProps,
};
