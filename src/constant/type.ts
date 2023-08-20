export type BaseQueries = {
  search?: string;
};

export interface Entity {
  id: string;
  createdAt: string | number;
  updatedAt: string | number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  icon?: React.ReactNode;
}
