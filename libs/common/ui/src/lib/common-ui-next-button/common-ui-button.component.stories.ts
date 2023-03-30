import { Meta } from '@storybook/angular';
import {
  CommonUiButtonComponent,
  CommonUiButtonType,
} from './common-ui-button.component';

export default {
  title: 'CommonUiButtonComponent',
  component: CommonUiButtonComponent,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: <CommonUiButtonType[]>['next', 'previous'],
      },
    },
  },
} as Meta<CommonUiButtonComponent>;

export const Primary = {
  render: (args: CommonUiButtonComponent) => ({
    props: args,
  }),
  args: {
    routePath: '/',
    text: 'More',
    type: 'previous',
  },
};
