import { useAppSelector } from 'src/app';
import {
	TCompetenceForm,
	useEducationCreate,
	useEducationUpdate,
	useSoftSkillCreate,
	useSoftSkillUpdate,
	useJobCreate,
	useJobUpdate,
	useHardSkillCreate,
	useHardSkillUpdate,
} from '..';
import { useUpdateAdminCompetenceById, administrationSelector } from 'src/features/administration';
import {
	EDUCATION,
	SOFTSKILL,
	JOB,
	HARDSKILL_CUSTOM,
	HARDSKILL_LANGUAGE,
	HARDSKILL_DRIVERLICENCE,
} from 'shared';

export const useCompetenceForm = () => {
	const isAdministration = useAppSelector(administrationSelector);
	const { handleEducationCreate } = useEducationCreate();
	const { handleEducationUpdate } = useEducationUpdate();
	const { handleSoftSkillCreate } = useSoftSkillCreate();
	const { handleSoftSkillUpdate } = useSoftSkillUpdate();
	const { handleJobCreate } = useJobCreate();
	const { handleJobUpdate } = useJobUpdate();
	const { handleHardSkillCreate } = useHardSkillCreate();
	const { handleHardSkillUpdate } = useHardSkillUpdate();
	const { handleAdminCompetenceUpdate } = useUpdateAdminCompetenceById();

	const handleCompetenceForm = (data: TCompetenceForm) => {
		/**
		 * create new competence if no id
		 */
		if (!data.id && !isAdministration) {
			if (data.competaType === EDUCATION) handleEducationCreate(data);
			if (data.competaType === SOFTSKILL) handleSoftSkillCreate(data);
			if (data.competaType === JOB) handleJobCreate(data);
			if (
				data.competaType === HARDSKILL_CUSTOM ||
				data.competaType === HARDSKILL_LANGUAGE ||
				data.competaType === HARDSKILL_DRIVERLICENCE
			)
				handleHardSkillCreate(data);
		}

		/**
		 * update competence if has id
		 */
		if (data.id && !isAdministration) {
			if (data.competaType === EDUCATION && data.id) handleEducationUpdate(data.id, data);
			if (data.competaType === SOFTSKILL && data.id) handleSoftSkillUpdate(data.id, data);
			if (data.competaType === JOB) handleJobUpdate(data.id, data);
			if (
				data.competaType === HARDSKILL_CUSTOM ||
				data.competaType === HARDSKILL_LANGUAGE ||
				data.competaType === HARDSKILL_DRIVERLICENCE
			)
				handleHardSkillUpdate(data.id, data);
		}

		/**
		 * update competence by administrator
		 */
		if (data.id && isAdministration) {
			handleAdminCompetenceUpdate(data.id, data);
		}
	};

	return { handleCompetenceForm };
};
