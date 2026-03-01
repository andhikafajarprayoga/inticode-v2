import Team_andhika from "@/assets/img/team/Team_andhika.png";
import Team_aji from "@/assets/img/team/Team_aji.png";
import Team_bayu from "@/assets/img/team/Team_bayu.jpg";
import Team_figo from "@/assets/img/team/Team_figo.jpg";
import Team_hilmi from "@/assets/img/team/Team_hilmi.jpg";
import Team_much from "@/assets/img/team/Team_much.jpg";
import Team_wibi from "@/assets/img/team/Team_wibi.png";
import Team_naizi from "@/assets/img/team/Team_naizi.png";

import { StaticImageData } from "next/image";

interface DataType {
	id: number;
	img: StaticImageData;
	avatar_name: string;
	designation: string;
}

const team_data: DataType[] = [
	{
		id: 1,
		img: Team_andhika,
		avatar_name: "Andhika Fajar Prayoga",
		designation: "Project Manager",
	},
	{
		id: 2,
		img: Team_hilmi,
		avatar_name: "Hilmi Musyadad",
		designation: "Client Relation",
	},
	{
		id: 3,
		img: Team_bayu,
		avatar_name: "Bayu Ramdhan Ardianto",
		designation: "Backend Developer",
	},
	{
		id: 4,
		img: Team_figo,
		avatar_name: "Muhammad Figo Razzan Fadillah",
		designation: "UI/UX Designer",
	},
	{
		id: 5,
		img: Team_aji,
		avatar_name: "Faturohman Fahrizi Katab",
		designation: "Frontend Developer",
	},
	{
		id: 6,
		img: Team_much,
		avatar_name: "Much Trie Harnanto",
		designation: "Security Engineer",
	},
	{
		id: 7,
		img: Team_wibi,
		avatar_name: "Wibi Ataya Sani",
		designation: "Mobile Developer",
	},
	{
		id: 8,
		img: Team_naizi,
		avatar_name: "Naizirun Dejesus Dasilva",
		designation: "Frontend Developer",
	},
];

export default team_data;
