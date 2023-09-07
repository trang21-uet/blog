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

export interface ItemList {
  items: any[];
  pageIndex: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
