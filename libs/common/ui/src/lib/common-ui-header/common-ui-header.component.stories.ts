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
  args: {},
};
