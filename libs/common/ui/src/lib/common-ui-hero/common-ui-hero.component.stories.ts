import { Meta } from '@storybook/angular';
import { CommonUiHeroComponent } from './common-ui-hero.component';

export default {
  title: 'CommonUiHeroComponent',
  component: CommonUiHeroComponent,
} as Meta<CommonUiHeroComponent>;

export const Primary = {
  render: (args: CommonUiHeroComponent) => ({
    props: args,
    template: `
    <ugurtigu-common-ui-hero [title]="title">
      I am a Software Developer based in Frankfurt am Main.
    </ugurtigu-common-ui-hero>`,
  }),
  args: {
    title: 'Hello, my name is Uğur.',
  },
};
