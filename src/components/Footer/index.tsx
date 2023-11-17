import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'jackyrwj出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Jackyrwj BI',
          title: 'Jackyrwj BI',
          href: 'https://jackyrwj.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/jackyrwj/jackyrwjbi-front',
          blankTarget: true,
        },
        {
          key: 'Jackyrwj BI',
          title: 'Jackyrwj BI',
          href: 'https://jackyrwj.github.io',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
