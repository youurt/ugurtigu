import { Meta } from '@storybook/angular';
import { CommonUiButtonComponent } from './common-ui-button.component';

export default {
  title: 'CommonUiButtonComponent',
  component: CommonUiButtonComponent,
} as Meta<CommonUiButtonComponent>;

export const Primary = {
  render: (args: CommonUiButtonComponent) => ({
    props: args,
  }),
  args: {
    routePath: '/',
    text: 'More',
  },
};
