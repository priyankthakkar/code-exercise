export interface MailBoxItem {
  name: string;
  count: number;
  isSelected: boolean;
  icon: string;
}

export interface MailBoxItemGroupProps {
  groupItems: MailBoxItem[];
}

export interface MailBoxItemProps {
  item: MailBoxItem;
}
