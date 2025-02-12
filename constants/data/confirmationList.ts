import dayjs from 'dayjs';
import { TCompetaConfirmationRegistered } from '@/types/guarantee';

export const confirmationRegisteredList: TCompetaConfirmationRegistered[] = [
  {
    id: 1,
    competa: {
      id: 1,
      title: 'Education Title 1',
    },
    guarantorProfile: {
      id: 1,
      firstName: 'Вася',
      lastName: 'Пупкин',
      avatarImageData: null,
      skillLevelId: 3,
    },
    statusCompetaConfirmation: 'CONFIRMED',
    requestTime: dayjs('2024-08-12T14:47:39.577695'),
    confirmedTime: dayjs('2024-08-12T15:26:11.565675'),
  },
  {
    id: 8,
    competa: {
      id: 1,
      title: 'Education Title 1',
    },
    guarantorProfile: {
      id: 1,
      firstName: 'Вася',
      lastName: 'Пупкин',
      avatarImageData: null,
      skillLevelId: 3,
    },
    statusCompetaConfirmation: 'NOT_CONFIRMED',
    requestTime: dayjs('2024-08-24T21:31:36.187886'),
    confirmedTime: dayjs('2024-08-27T21:31:36.187886'),
  },
  {
    id: 20,
    competa: {
      id: 1,
      title: 'Education Title 1',
    },
    guarantorProfile: {
      id: 1,
      firstName: 'Вася',
      lastName: 'Пупкин',
      avatarImageData: null,
      skillLevelId: 3,
    },
    statusCompetaConfirmation: 'CONFIRMED',
    requestTime: dayjs('2024-10-30T21:25:28.758121'),
    confirmedTime: dayjs('2024-10-30T21:32:15.491516'),
  },
  {
    id: 21,
    competa: {
      id: 1,
      title: 'Education Title 1',
    },
    guarantorProfile: {
      id: 1,
      firstName: 'Вася',
      lastName: 'Пупкин',
      avatarImageData: null,
      skillLevelId: 3,
    },
    statusCompetaConfirmation: 'CONFIRMED',
    requestTime: dayjs('2024-10-30T21:32:59.964009'),
    confirmedTime: dayjs('2024-10-30T21:33:24.264192'),
  },
  {
    id: 22,
    competa: {
      id: 1,
      title: 'Education Title 1',
    },
    guarantorProfile: {
      id: 1,
      firstName: 'Вася',
      lastName: 'Пупкин',
      avatarImageData: null,
      skillLevelId: 3,
    },
    statusCompetaConfirmation: 'NOT_CONFIRMED',
    requestTime: dayjs('2024-10-30T21:33:58.750574'),
    confirmedTime: dayjs('2024-11-02T21:33:58.750574'),
  },
];
