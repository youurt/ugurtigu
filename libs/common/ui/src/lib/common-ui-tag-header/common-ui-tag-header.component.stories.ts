import { Meta } from '@storybook/angular';
import { CommonUiTagHeaderComponent } from './common-ui-tag-header.component';

export default {
  title: 'CommonUiTagHeaderComponent',
  component: CommonUiTagHeaderComponent,
} as Meta<CommonUiTagHeaderComponent>;

export const Primary = {
  render: (args: CommonUiTagHeaderComponent) => ({
    props: args,
    template: `<ugurtigu-common-ui-tag-header>Recent Thoughts</ugurtigu-common-ui-tag-header>`,
  }),
  args: {},
};
