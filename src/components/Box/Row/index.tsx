import type { FC, PropsWithChildren } from "react";

import { ExtraClassProps } from "@/libs/types/other";

const Row: FC<PropsWithChildren & ExtraClassProps> = ({
	children,
	className,
}) => {
	return <div className={`flex ${className}`}>{children}</div>;
};

export default Row;
