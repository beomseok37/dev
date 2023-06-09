type ToastifyPositionType =
  | 'Left-Top'
  | 'Left-Bottom'
  | 'Right-Top'
  | 'Right-Bottom';

type ToastType = {
  content: string;
  key: number;
};

export type { ToastifyPositionType, ToastType };
