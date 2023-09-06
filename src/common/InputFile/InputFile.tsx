import { type FC } from 'react';
import { Box } from '@material-ui/core';

interface InputFileProps {
	handleChange: (e: any) => void;
	fileName: string;
}

export const InputFile: FC<InputFileProps> = ({
	handleChange,
	fileName,
}: InputFileProps) => {
	return (
		<>
			<Box>
				<Box>
					<label htmlFor='files'>Agregá tu imagen</label>
				</Box>
				<Box>
					<input id='files' hidden type='file' onChange={handleChange} />
					{fileName}
				</Box>
			</Box>
		</>
	);
};
