import { Meta } from '@storybook/angular';
import { CommonUiWorkComponent } from './common-ui-work.component';

export default {
  title: 'CommonUiWorkComponent',
  component: CommonUiWorkComponent,
} as Meta<CommonUiWorkComponent>;

export const Primary = {
  render: (args: CommonUiWorkComponent) => ({
    props: args,
  }),
  args: {
    title: 'Work',
    cards: [
      {
        color: 'bg-base',
        title: 'Card 1',
        subTitle: 'Card 1 Subtitle',
      },
      {
        color: 'bg-blue',
        title: 'Card 2',
        subTitle: 'Card 2 Subtitle',
      },
    ],
    button: {
      routePath: '/',
      text: 'See More',
    },
  },
};
