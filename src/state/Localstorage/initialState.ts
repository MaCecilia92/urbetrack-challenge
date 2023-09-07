export interface imagesArray {
	id: number | string,
	image: string,
	descripcion: string,
}

export interface imagesResponse {
	images: imagesArray | [];
	isLoading: boolean;
  	error: string
}

export const imagesData: imagesResponse = {
	isLoading: false,
	images:[],
  	error: ''
};
