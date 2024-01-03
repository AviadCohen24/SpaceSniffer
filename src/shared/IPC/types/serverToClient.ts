import { ErrorMessage } from '../../Scanner/ErrorMessage';
import { CurrentProgressMessage } from '../../Scanner/Progress';

export interface IPC_PushNotification {
  // eslint-disable-next-line prettier/prettier
  'progress_status': {
    payload: CurrentProgressMessage;
  };
  // eslint-disable-next-line prettier/prettier
  'error_message': {
    payload: ErrorMessage;
  };
}
