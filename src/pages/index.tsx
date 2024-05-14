import type { NextPage } from "next";
import useSWR from "swr";

import type { HelloType } from "@/libs/types/home";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
	const { data, error, isLoading } = useSWR<HelloType>("/api/hello", fetcher);

	if (error) return <div>Failed to load</div>;
	if (isLoading) return <div>Loading...</div>;
	if (!data) return null;

	return (
		<>
			Hello, I am {data.name} and {data.age} years old.
		</>
	);
};

export default Home;
