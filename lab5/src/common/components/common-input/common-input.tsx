import { Input } from 'antd';
import classNames from 'classnames';

import styles from './common-input.module.css';
import { CommonInputProps } from './common-input.types';

export const CommonInput = ({
  placeholder,
  className,
  ...props
}: CommonInputProps) => (
  <Input
    className={classNames(styles.input, className)}
    placeholder={placeholder}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);
