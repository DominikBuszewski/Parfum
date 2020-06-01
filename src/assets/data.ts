interface test {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	category: string;
	notes: [string, string];
	promotion: true;
	bottle: [string, string, string];
}

interface sections {
	id: number;
	brand: string;
	products: object[];
}

let Perfum_Data: sections[] = [
	{
		id: 1,
		brand: "Azarro",
		products: [
			{
				id: 2,
				name: "Wanted",
				imageUrl: "...",
				price: 35,
				category: "Man",
				notes: ["Sweet", "Vanilla"],
				promotion: true,
				bottle: ["small", "medium", "large"],
			},
			{
				id: 3,
				name: "Wanted by Night",
				imageUrl: "...",
				price: 39,
				category: "Man",
				notes: ["Sweet", "Vanilla"],
				promotion: true,
				bottle: ["small", "medium", "large"],
			},
			{
				id: 3,
				name: "Wanted by Night",
				imageUrl: "...",
				price: 39,
				category: "Man",
				notes: ["Sweet", "Vanilla"],
				promotion: true,
				bottle: ["small", "medium", "large"],
			},
		],
	},
	{
		id: 4,
		brand: "Bvlgari",
		products: [
			{
				id: 5,
				name: "Aqua Amara",
				imageUrl: "...",
				price: 39,
				category: "Man",
				notes: ["Aquatic", "Fresh"],
				promotion: true,
				bottle: ["small", "medium", "large"],
			},
			{
				id: 6,
				name: "Aqva Pour Homme",
				imageUrl: "...",
				price: 41,
				category: "Man",
				notes: ["Aquatic", "Fresh"],
				promotion: true,
				bottle: ["small", "medium", "large"],
			},
		],
	},
];

export default Perfum_Data;
