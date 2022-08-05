
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { AmazingButtonComponent,  AmazingUiModule, ButtonSize } from '@amazing-ui';

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

Default.args = {

  config: {
    title: "Hello world"
  }
} as Partial<AmazingButtonComponent>;

export const large = Template.bind({});

large.args = {
  config:  {
    title: "I'm a bigger button",
    size: ButtonSize.large
  }
} as Partial<AmazingButtonComponent>


export const small = Template.bind({});

small.args = {
  config: {
    title: "I'm small",
    size: ButtonSize.small
  }
} as Partial<AmazingButtonComponent>


