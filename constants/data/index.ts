import { TSidebarList, TTabList } from "@/types";

import { BiHome } from "react-icons/bi";
import { CiRoute } from "react-icons/ci";
import { FaSatelliteDish } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";
import { MdOutlineFlagCircle } from "react-icons/md";
import { RiCopperCoinFill } from "react-icons/ri";

const sidebarList: TSidebarList[] = [
	{
		icon: BiHome,
		title: "Dashboard",
	},
	{
		icon: RiCopperCoinFill,
		title: "Reward Coins",
	},
	{
		icon: IoEnterOutline,
		title: "Referrals",
	},
	{
		icon: CiRoute,
		title: "Streaks",
	},
	{
		icon: MdOutlineFlagCircle,
		title: "Contests",
	},
	{
		icon: FaSatelliteDish,
		title: "Events",
	},
];

const tabList: TTabList[] = [
	{ id: 0, title: "View Analytics", url: "/view" },
	{ id: 1, title: "Manage Contests", url: "/manage" },
	{ id: 2, title: "Award Bonuses", url: "/bonuses" },
];

export { sidebarList, tabList };

export enum ActiveSidebarItem {
	Dashboard = 0,
	RewardCoins = 1,
	Referrals = 2,
	Streaks = 3,
	Contests = 4,
	Events = 5,
}
