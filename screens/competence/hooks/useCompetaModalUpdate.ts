import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app';
import { competaModalSelector, updateCompetaModal } from '..';

export const useCompetaModalUpdate = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const showCompetaModal = useAppSelector(competaModalSelector);

	const handleCompetaModalUpdate = () => {
		dispatch(updateCompetaModal(!showCompetaModal));
	};

	const handleCompetaModalCloseAndRedirect = (path: string) => {
		dispatch(updateCompetaModal(!showCompetaModal));
		navigate(`/${path}`);
	};

	return {
		showCompetaModal,
		handleCompetaModalUpdate,
		handleCompetaModalCloseAndRedirect,
	};
};
