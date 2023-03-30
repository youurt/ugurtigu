import { Meta } from '@storybook/angular';
import { CommonUiNextButtonComponent } from './common-ui-next-button.component';

export default {
  title: 'CommonUiNextButtonComponent',
  component: CommonUiNextButtonComponent
} as Meta<CommonUiNextButtonComponent>;

export const Primary = {
  render: (args: CommonUiNextButtonComponent) => ({
    props: args,
  }),
  args: {
    routePath:  '/',
    text:  'More',
  },
};
