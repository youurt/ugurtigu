import { Meta } from '@storybook/angular';
import { CommonUiWorkComponent } from './common-ui-work.component';

export default {
  title: 'CommonUiWorkComponent',
  component: CommonUiWorkComponent,
} as Meta<CommonUiWorkComponent>;

export const Primary = {
  render: (args: CommonUiWorkComponent) => ({
    props: args,
    template: `
    <ugurtigu-common-ui-work
      [title]="title"
      [button]="button"
    >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis totam odio magni nisi facilis voluptatem iusto illo distinctio. Voluptatem, ex? Recusandae, itaque aut accusantium aliquam eveniet magnam voluptatum! Illo sequi nihil, doloremque accusamus consequuntur accusantium eaque, facere possimus voluptates aliquam fuga voluptatem in nam officia! Veritatis unde eum perspiciatis ad?
    </ugurtigu-common-ui-work>
    `,
  }),
  args: {
    title: 'Work',
    button: {
      routePath: '/',
      text: 'See More',
    },
  },
};
