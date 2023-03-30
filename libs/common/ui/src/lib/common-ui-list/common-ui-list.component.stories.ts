import { Meta } from '@storybook/angular';
import { CommonUiListComponent } from './common-ui-list.component';

export default {
  title: 'CommonUiListComponent',
  component: CommonUiListComponent,
} as Meta<CommonUiListComponent>;

export const Primary = {
  render: (args: CommonUiListComponent) => ({
    props: args,
  }),
  args: {
    title: 'Recent Thoughts',
    listItems: [
      {
        date: '2021-01-01',
        title: 'Interesting AI articles',
        routePath: '/',
      },
      {
        date: '2021-02-01',
        title: 'Interesting Food articles',
        routePath: '/',
      },
    ],
    button: {
      routePath: '/',
      text: 'More',
    },
  },
};
