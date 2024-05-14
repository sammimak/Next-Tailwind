import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

const TempContext = createContext({});

export const useTempContext = () => {
	return useContext(TempContext);
};

export const TempProvider: FC<PropsWithChildren> = ({ children }) => {
	const [temp, setTemp] = useState();

	return (
		<TempContext.Provider value={{ temp, setTemp }}>
			{children}
		</TempContext.Provider>
	);
};
