import { Meta } from '@storybook/angular';
import { CommonUiHeaderComponent } from './common-ui-header.component';

export default {
  title: 'CommonUiHeaderComponent',
  component: CommonUiHeaderComponent,
} as Meta<CommonUiHeaderComponent>;

export const Primary = {
  render: (args: CommonUiHeaderComponent) => ({
    props: args,
  }),
  args: {
    mainLink: '/',
    links: [
      { name: 'Home', link: '/', exact: true },
      { name: 'Work', link: '/work', exact: false },
      { name: 'Writing', link: '/writing', exact: false },
      { name: 'Contact', link: '/contact', exact: false },
    ],
  },
};
