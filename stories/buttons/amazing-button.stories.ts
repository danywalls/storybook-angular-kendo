
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { AmazingButtonComponent, AmazingUiModule } from '@amazing-ui';

export default {
  title: 'amazing-ui/amazing-button',
  component: AmazingButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [AmazingUiModule],
    }),
  ],
} as Meta;

const Template: Story<AmazingButtonComponent> = (args: AmazingButtonComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<AmazingButtonComponent>;
