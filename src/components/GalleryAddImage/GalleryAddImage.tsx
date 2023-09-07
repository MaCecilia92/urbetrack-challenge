import { type FC, useState } from 'react';
import { Button, InputFile, Input } from '../../common';
import { useLocalStorage } from '../../hooks';

export interface imagesArrayProps {
	image?: string;
	id?: number;
}

export const GalleryAddImage: FC = () => {
	const [fileName, setFileName] = useState('');
	const [file, setFile] = useState<any>([]);
	const [imageArray, setImageArray] = useState<imagesArrayProps>({
		id: 0,
		image: '',
	});
	const [value, setValue] = useState('');
	const [currentId, setCurrentId] = useState<number>(0);

	const [, setData] = useLocalStorage<any>('images');

	const getNewId = (): number => {
		const newId = currentId + 1;
		setCurrentId(newId);
		return newId;
	};

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const textValue = e.target.value;
		setValue(textValue);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const fileInput = e.target as HTMLInputElement;
		const files = fileInput.files;

		if (files != null && files.length > 0) {
			const file = files[0];
			const { name } = file;
			setFileName(name);
			const reader = new FileReader();
			reader.onloadend = () => {
				const result: string = reader.result as string;
				setImageArray({
					id: getNewId(),
					image: result.replace('data:', '').replace(/^.+,/, ''),
				});
			};
			reader.readAsDataURL(file);
			setFile(URL.createObjectURL(file));
		}
	};

	const handleDelete = (): void => {
		setFile([]);
		setImageArray({ image: '' });
		setValue('');
		setFileName('');
		const fileInput = document.getElementById('fileInput') as HTMLInputElement;
		if (fileInput != null) {
			fileInput.value = '';
		}
	};

	const handleClick = (): void => {
		const updatedImageArray = [{ ...imageArray, description: value }];
		setData(updatedImageArray);
		handleDelete();
	};

	return (
		<>
			<InputFile handleChange={handleChange} fileName={fileName} />
			<Input
				id='Descripción'
				name='Descripción'
				label='Descripcion'
				type='text'
				value={value}
				handleChange={handleTextChange}
			/>
			<Button
				size='small'
				variant='outlined'
				name='Enviar'
				handleClick={handleClick}
			/>
			<Button
				size='small'
				variant='outlined'
				name='Borrar'
				handleClick={handleDelete}
			/>
			{file.length > 0 ? (
				<img alt='not found' width={'250px'} src={file} />
			) : (
				<h1>No hay imagen</h1>
			)}
		</>
	);
};
