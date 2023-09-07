import { type FC, useEffect } from 'react';
import { GalleryAddImage, GalleryCard } from '../../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { selectImages } from '../../state/Localstorage/selectors';
// import { setDataRequest } from '../../state/Session/reducer';
import { setImagesRequest } from '../../state/Localstorage/reducer';
// const users = useSelector(selectSession);
// 	console.log(users, 'user');

export const Gallery: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setImagesRequest('images'));
	}, []);
	const users = useSelector(selectImages);
	console.log(users, 'user');
	return (
		<div>
			<GalleryAddImage />
			<GalleryCard />
		</div>
	);
};
