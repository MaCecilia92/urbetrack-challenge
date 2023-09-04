import { type FC } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { type ButtonTypes } from '../../interfaces';

export const Button: FC<ButtonTypes> = ({
	size,
	handleClick,
	isLoading,
	variant,
	isDisabled,
	type,
	name,
}: ButtonTypes) => {
	return (
		<LoadingButton
			size={size}
			onClick={handleClick}
			loading={isLoading}
			variant={variant}
			disabled={isDisabled}
			type={type}>
			<span>{name}</span>
		</LoadingButton>
	);
};
