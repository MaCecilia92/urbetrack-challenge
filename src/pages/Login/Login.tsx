import { type FC } from 'react';
import { LoginForm } from '../../components';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	boxShadow: 'none',
	borderRadius: '0px',
	height: '100vh',
}));

export const Login: FC = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container>
					<Grid item xs={12} md={8}>
						<Item sx={{ backgroundColor: '#4287f5' }}>image</Item>
					</Grid>
					<Grid item md={4}>
						<Item
							sx={{
								backgroundColor: '#d742f5',
								'@media (max-width:600px)': {
									backgroundColor: 'lightpink',
									height: '50%',
									width: 'auto',
									position: 'absolute',
									top: '20%',
									left: '10%',
									right: '10%',
								},
							}}>
							<LoginForm />
						</Item>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};
