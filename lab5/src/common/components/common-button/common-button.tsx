import { Button } from 'antd';
import classNames from 'classnames';

import styles from './common-button.module.css';
import { CommonButtonProps } from './common-button.types';

export const CommonButton = ({
  children,
  className,
  fullWidth,
  loading,
  htmlType,
}: CommonButtonProps) => (
  <Button
    className={classNames(
      styles.button,
      {
        [styles.fullWidth]: fullWidth,
      },
      className,
    )}
    htmlType={htmlType}
    loading={loading}
    type="primary"
  >
    {children}
  </Button>
);
