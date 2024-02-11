"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Contest } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { FaPen, FaTrash } from "react-icons/fa";

export const columns: ColumnDef<Contest>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() &&
						"indeterminate")
				}
				onCheckedChange={(value) =>
					table.toggleAllPageRowsSelected(!!value)
				}
				aria-label='Select all'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) =>
					row.toggleSelected(!!value)
				}
				aria-label='Select row'
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: "Contest Name",
	},
	{
		accessorKey: "active",
		header: "Active Status",
		cell: ({ row }) => {
			const activeStatus: boolean = row.getValue("active");

			return (
				<div className='text-right font-medium flex items-center gap-x-1'>
					<span>Active</span>
					<label className='relative inline-flex items-center cursor-pointer'>
						<input
							type='checkbox'
							value=''
							className='sr-only peer'
							checked={activeStatus}
							readOnly
						/>
						<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
					</label>
					<span>Inactive</span>
				</div>
			);
		},
	},
	{
		accessorKey: "validity",
		header: "Validity",
		size: 400,
		cell: ({ row }) => {
			const validity: {
				start: string;
				end: string;
			} = row.getValue("validity");

			return (
				<span className='text-[9px] font-semibold'>
					{validity.start}
					<br />
					{"->"}
					<br />
					{validity.end}
				</span>
			);
		},
	},
	{
		accessorKey: "challenges",
		header: "Challenges",
		cell: ({ row }) => {
			const challenges: string[] = row.getValue("challenges");

			return (
				<div className='grid grid-cols-3 gap-x-2 gap-y-2'>
					{challenges.map((challenge, index) => (
						<Badge
							key={index}
							variant='secondary'
							className='font-semibold'
						>
							<div
								style={{
									height: "10px",
									width: "10px",
									borderRadius: "50%",
									backgroundColor: "purple",
								}}
							/>
							<span className='text-[9px] ml-1'>
								{challenge}
							</span>
						</Badge>
					))}
				</div>
			);
		},
	},
	{
		accessorKey: "targetAudience",
		header: "Target Audience",
		cell: ({ row }) => {
			const targetAudience: string[] =
				row.getValue("targetAudience");

			if (!targetAudience)
				return (
					<div className='flex items-center justify-center'>
						<Badge
							variant='secondary'
							className='w-fit self-center text-center p-1 rounded'
						>
							Download CSV
						</Badge>
					</div>
				);

			return (
				<div className='grid grid-cols-3 gap-x-2 gap-y-2'>
					{targetAudience.map((audience, index) => (
						<Badge
							key={index}
							variant='secondary'
							className='font-semibold'
						>
							<div
								style={{
									height: "10px",
									width: "10px",
									borderRadius: "50%",
									backgroundColor: "purple",
								}}
							/>
							<span className='text-[9px] ml-1'>
								{audience}
							</span>
						</Badge>
					))}
				</div>
			);
		},
	},
	{
		id: "actions",
		header: "Options",
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<div className='flex items-center gap-x-[1px]'>
					<Button
						size='xs'
						variant='success'
						style={{
							borderRadius: "2px",
						}}
					>
						<span>Modifiy</span>
						<div className='ml-1 border'>
							<FaPen className='p-1' />
						</div>
					</Button>
					<Button
						size='xs'
						variant='destructive'
						style={{
							borderRadius: "2px",
						}}
					>
						<span>Delete</span>
						<div className='ml-1 border'>
							<FaTrash className='p-1' />
						</div>
					</Button>
				</div>
			);
		},
	},
];
