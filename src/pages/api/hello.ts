// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type HelloType = {
	name: string;
	age: number;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<HelloType>
) {
	res.status(200).json({ name: "Kiyoshi Araki", age: 27 });
}
