import { Meta } from '@storybook/angular';
import {
  CommonUiCardColor,
  CommonUiCardComponent,
} from './common-ui-card.component';

export default {
  title: 'CommonUiCardComponent',
  component: CommonUiCardComponent,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: <CommonUiCardColor[]>[
          'bg-base',
          'bg-blue',
          'bg-red',
          'bg-purple',
          'bg-contrast',
        ],
      },
    },
  },
} as Meta<CommonUiCardComponent>;

export const Primary = {
  render: (args: CommonUiCardComponent) => ({
    props: args,
    template: `
    <ugurtigu-common-ui-card
      [color]="color"
      [title]="title"
      [subTitle]="subTitle"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat accusantium repudiandae incidunt culpa! Atque, cum dolore reprehenderit aut maiores maxime sed iste. Delectus sunt voluptatem omnis fuga rem et dolores doloremque voluptatum officiis reiciendis! Accusantium accusamus optio, aut eum, voluptates nesciunt placeat minus iste quo, alias pariatur. In, soluta.
    </ugurtigu-common-ui-card>`,
  }),
  args: {
    color: 'bg-base',
    title: 'Image Color Extraction',
    subTitle: 'Extracting colors from images using the K-Means algorithm',
  },
};
