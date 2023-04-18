import { AlertColor } from '@mui/material';
export interface IAlert {
  hasError: boolean;
  message?: string;
  type?: AlertColor;
}
