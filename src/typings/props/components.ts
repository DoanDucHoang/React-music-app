import { ExtraInfomation } from '..';
import { SideBarDataType } from '../layout';

export interface NavigationProps<T> {
  itemArr: T[];
}

export interface ItemNavigatorProps {
  imgSrc?: '';
  name: '';
  link?: '';
  svg?: '';
  extraInfo?: ExtraInfomation;
}

export interface SideBarProps {
  data?: SideBarDataType;
}
