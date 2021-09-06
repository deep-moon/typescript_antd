/*
 * @Author: deep moon
 * @Date: 2021-09-05 21:37:06
 * @LastEditTime: 2021-09-05 22:10:12
 * @LastEditors: deep moon
 * @Description: 表格的接口定义
 * @FilePath: \security-intelligence-nlp-client\src\components\RichTable\interface.d.ts
 */
export interface TableEventListeners {
  onClick?: (arg: React.MouseEvent) => void;
  // onDoubleClick?: (arg: React.MouseEvent) => void;
  // onContextMenu?: (arg: React.MouseEvent) => void;
  onMouseEnter?: (arg: React.MouseEvent) => void;
  onMouseLeave?: (arg: React.MouseEvent) => void;
  [name: string]: any;
}
export interface ColumnProps<T> {
  key?: React.Key;
  dataIndex: string;
  title?: string | React.ReactNode;
  render?: (text: any, record: T, index: number) => React.ReactNode;
  align?: "left" | "right" | "center";
  ellipsis?: boolean;
  width?: string | number;
  className?: string;
  fixed?: "left" | "right" | boolean;
}
export interface PagingProps {
  type?: "scroll" | "pagination";
  pageNum: number;
  pageSize?: number;
  total: number;
  onchange?: (pageNum: number) => void;
}
export interface TableProps<T> {
  paging: PagingProps;
  columns: ColumnProps<T>[];
  dataSource: T[];
  loading: boolean;
  onRow?: (record: T, index: number) => TableEventListeners;
}

export interface Map {
  [key: string]: string;
}
