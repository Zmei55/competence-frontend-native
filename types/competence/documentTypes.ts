export type TDocumentInfo = {
	description: string;
	id: number;
	originalName: string;
	previewImageId: number;
};

export type TDocumentUpload = {
	competenceId: number;
	formData: FormData;
};

export type TDocumentUploadForm = {
	description: string;
	files: FileList | string | undefined;
};
