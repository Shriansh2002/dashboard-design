import { TSidebarList } from "@/types";

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

export { sidebarList };

export enum ActiveSidebarItem {
	Dashboard = 0,
	RewardCoins = 1,
	Referrals = 2,
	Streaks = 3,
	Contests = 4,
	Events = 5,
}
