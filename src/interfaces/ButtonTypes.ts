export interface ButtonTypes {
	size: 'small' | 'medium' | 'large';
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
	isLoading?: boolean;
	variant: 'text' | 'outlined' | 'contained';
	isDisabled?: boolean;
	type?: 'button' | 'reset' | 'submit';
	name: string;
}
