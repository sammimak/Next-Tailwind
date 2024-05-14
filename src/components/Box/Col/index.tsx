import type { FC, PropsWithChildren } from "react";

import { ExtraClassProps } from "@/libs/types/other";

const Col: FC<PropsWithChildren & ExtraClassProps> = ({
	children,
	className,
}) => {
	return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export default Col;
