export interface TailwindUiNotification {
  state: boolean;
  status: 'success' | 'error' | null;
  title: string | null;
  description: string | null;
}
