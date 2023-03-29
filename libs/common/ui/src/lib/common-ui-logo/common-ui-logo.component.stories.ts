import { Meta } from '@storybook/angular';
import { CommonUiLogoComponent } from './common-ui-logo.component';

export default {
  title: 'CommonUiLogoComponent',
  component: CommonUiLogoComponent,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<CommonUiLogoComponent>;

export const Primary = {
  render: (args: CommonUiLogoComponent) => ({
    props: args,
  }),
  args: {},
};
