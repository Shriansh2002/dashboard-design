import { Contest, TSidebarList, TTabList } from "@/types";

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

export const tableData: Contest[] = [
	{
		id: 1,
		name: "Rule with a simple name",
		active: true,
		validity: {
			start: "20 Jan 2022",
			end: "20 Jul 2023",
		},
		targetAudience: [
			"target1",
			"target1",
			"target1",
			"target1",
			"target1",
			"target1",
		],
		challenges: [
			"challenge1",
			"challenge2",
			"challenge3",
			"challenge1",
			"challenge2",
			"challenge3",
		],
	},
	{
		id: 2,
		name: "Rule with another name",
		active: true,
		validity: {
			start: "15 Feb 2022",
			end: "15 Aug 2023",
		},
		targetAudience: [
			"target2",
			"target2",
			"target2",
			"target2",
			"target2",
			"target2",
		],
		challenges: [
			"challenge4",
			"challenge5",
			"challenge6",
			"challenge4",
			"challenge5",
			"challenge6",
		],
	},
	{
		id: 3,
		name: "Rule with a third name",
		active: true,
		validity: {
			start: "10 Mar 2022",
			end: "10 Sep 2023",
		},
		targetAudience: [
			"target3",
			"target3",
			"target3",
			"target3",
			"target3",
			"target3",
		],
		challenges: [
			"challenge7",
			"challenge8",
			"challenge9",
			"challenge7",
			"challenge8",
			"challenge9",
		],
	},
	{
		id: 4,
		name: "Rule with a fourth name",
		active: true,
		validity: {
			start: "5 Apr 2022",
			end: "5 Oct 2023",
		},
		targetAudience: [
			"target4",
			"target4",
			"target4",
			"target4",
			"target4",
			"target4",
		],
		challenges: [
			"challenge10",
			"challenge11",
			"challenge12",
			"challenge10",
			"challenge11",
			"challenge12",
		],
	},
	{
		id: 5,
		name: "Rule with a fifth name",
		active: true,
		validity: {
			start: "1 May 2022",
			end: "1 Nov 2023",
		},
		targetAudience: [
			"target5",
			"target5",
			"target5",
			"target5",
			"target5",
			"target5",
		],
		challenges: [
			"challenge13",
			"challenge14",
			"challenge15",
			"challenge13",
			"challenge14",
			"challenge15",
		],
	},
	{
		id: 6,
		name: "Rule with a sixth name",
		active: true,
		validity: {
			start: "25 May 2022",
			end: "25 Dec 2023",
		},
		targetAudience: [
			"target6",
			"target6",
			"target6",
			"target6",
			"target6",
			"target6",
		],
		challenges: [
			"challenge16",
			"challenge17",
			"challenge18",
			"challenge16",
			"challenge17",
			"challenge18",
		],
	},
	{
		id: 7,
		name: "Rule with a seventh name",
		active: true,
		validity: {
			start: "20 Jun 2022",
			end: "20 Jan 2024",
		},
		targetAudience: [
			"target7",
			"target7",
			"target7",
			"target7",
			"target7",
			"target7",
		],
		challenges: [
			"challenge19",
			"challenge20",
			"challenge21",
			"challenge19",
			"challenge20",
			"challenge21",
		],
	},
	{
		id: 8,
		name: "Rule with an eighth name",
		active: true,
		validity: {
			start: "15 Jul 2022",
			end: "15 Feb 2024",
		},
		targetAudience: [
			"target8",
			"target8",
			"target8",
			"target8",
			"target8",
			"target8",
		],
		challenges: [
			"challenge22",
			"challenge23",
			"challenge24",
			"challenge22",
			"challenge23",
			"challenge24",
		],
	},
	{
		id: 9,
		name: "Rule with a ninth name",
		active: true,
		validity: {
			start: "10 Aug 2022",
			end: "10 Mar 2024",
		},
		targetAudience: [
			"target9",
			"target9",
			"target9",
			"target9",
			"target9",
			"target9",
		],
		challenges: [
			"challenge25",
			"challenge26",
			"challenge27",
			"challenge25",
			"challenge26",
			"challenge27",
		],
	},
	{
		id: 10,
		name: "Rule with a tenth name",
		active: true,
		validity: {
			start: "5 Sep 2022",
			end: "5 Apr 2024",
		},
		targetAudience: [
			"target10",
			"target10",
			"target10",
			"target10",
			"target10",
			"target10",
		],
		challenges: [
			"challenge28",
			"challenge29",
			"challenge30",
			"challenge28",
			"challenge29",
			"challenge30",
		],
	},
	{
		id: 11,
		name: "Rule with an eleventh name",
		active: true,
		validity: {
			start: "1 Oct 2022",
			end: "1 May 2024",
		},
		targetAudience: [
			"target11",
			"target11",
			"target11",
			"target11",
			"target11",
			"target11",
		],
		challenges: [
			"challenge31",
			"challenge32",
			"challenge33",
			"challenge31",
			"challenge32",
			"challenge33",
		],
	},
	{
		id: 12,
		name: "Rule with a twelfth name",
		active: true,
		validity: {
			start: "25 Oct 2022",
			end: "25 Jun 2024",
		},
		targetAudience: [
			"target12",
			"target12",
			"target12",
			"target12",
			"target12",
			"target12",
		],
		challenges: [
			"challenge34",
			"challenge35",
			"challenge36",
			"challenge34",
			"challenge35",
			"challenge36",
		],
	},
	{
		id: 13,
		name: "Rule with a thirteenth name",
		active: true,
		validity: {
			start: "20 Nov 2022",
			end: "20 Jul 2024",
		},
		targetAudience: [
			"target13",
			"target13",
			"target13",
			"target13",
			"target13",
			"target13",
		],
		challenges: [
			"challenge37",
			"challenge38",
			"challenge39",
			"challenge37",
			"challenge38",
			"challenge39",
		],
	},
	{
		id: 14,
		name: "Rule with a fourteenth name",
		active: true,
		validity: {
			start: "15 Dec 2022",
			end: "15 Aug 2024",
		},
		targetAudience: [
			"target14",
			"target14",
			"target14",
			"target14",
			"target14",
			"target14",
		],
		challenges: [
			"challenge40",
			"challenge41",
			"challenge42",
			"challenge40",
			"challenge41",
			"challenge42",
		],
	},
	{
		id: 15,
		name: "Rule with a fifteenth name",
		active: true,
		validity: {
			start: "10 Jan 2023",
			end: "10 Sep 2024",
		},
		targetAudience: [
			"target15",
			"target15",
			"target15",
			"target15",
			"target15",
			"target15",
		],
		challenges: [
			"challenge43",
			"challenge44",
			"challenge45",
			"challenge43",
			"challenge44",
			"challenge45",
		],
	},
	{
		id: 16,
		name: "Rule with a sixteenth name",
		active: true,
		validity: {
			start: "5 Feb 2023",
			end: "5 Oct 2024",
		},
		targetAudience: [
			"target16",
			"target16",
			"target16",
			"target16",
			"target16",
			"target16",
		],
		challenges: [
			"challenge46",
			"challenge47",
			"challenge48",
			"challenge46",
			"challenge47",
			"challenge48",
		],
	},
	{
		id: 17,
		name: "Rule with a seventeenth name",
		active: true,
		validity: {
			start: "1 Mar 2023",
			end: "1 Nov 2024",
		},
		targetAudience: [
			"target17",
			"target17",
			"target17",
			"target17",
			"target17",
			"target17",
		],
		challenges: [
			"challenge49",
			"challenge50",
			"challenge51",
			"challenge49",
			"challenge50",
			"challenge51",
		],
	},
	{
		id: 18,
		name: "Rule with an eighteenth name",
		active: true,
		validity: {
			start: "25 Mar 2023",
			end: "25 Dec 2024",
		},
		targetAudience: [
			"target18",
			"target18",
			"target18",
			"target18",
			"target18",
			"target18",
		],
		challenges: [
			"challenge52",
			"challenge53",
			"challenge54",
			"challenge52",
			"challenge53",
			"challenge54",
		],
	},
	{
		id: 19,
		name: "Rule with a nineteenth name",
		active: true,
		validity: {
			start: "20 Apr 2023",
			end: "20 Jan 2025",
		},
		targetAudience: [
			"target19",
			"target19",
			"target19",
			"target19",
			"target19",
			"target19",
		],
		challenges: [
			"challenge55",
			"challenge56",
			"challenge57",
			"challenge55",
			"challenge56",
			"challenge57",
		],
	},
	{
		id: 20,
		name: "Rule with a twentieth name",
		active: true,
		validity: {
			start: "15 May 2023",
			end: "15 Feb 2025",
		},
		targetAudience: [
			"target20",
			"target20",
			"target20",
			"target20",
			"target20",
			"target20",
		],
		challenges: [
			"challenge58",
			"challenge59",
			"challenge60",
			"challenge58",
			"challenge59",
			"challenge60",
		],
	},
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
