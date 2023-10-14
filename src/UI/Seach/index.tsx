import { CSSProperties, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import './Search.scss';
import { SearchIcon } from '../icons';
import cn from "classnames";

export interface ISearchProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  iconColor?: string;
  sx?: CSSProperties;
}

export const Search: FC<ISearchProps> = (props) => {

  const { disabled, sx, ...rest } = props;

  return (
    <div
      className={cn("search_wrapper", disabled && "search_wrapper-disabled")}
      style={sx}
    >
      <SearchIcon fill="black" />
      <input
        className="search_wrapper-input"
        type="text"
        disabled={disabled}
        {...rest}
      />
    </div>
  )
};
