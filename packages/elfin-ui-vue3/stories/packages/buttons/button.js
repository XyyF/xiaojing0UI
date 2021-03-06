import { action } from '@storybook/addon-actions';
import { ElfinButtons, ElfinButtonsItemType } from '../../../packages/buttons';

const ButtonOnClick = action('click');

const Button = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ElfinButtons },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const { buttonsConfig, ...params } = args;
    const config = [
      Object.assign({}, buttonsConfig[0], {
        itemOptions: {
          ...params,
          onClick: ButtonOnClick,
        },
      }),
    ]
    return () => {
      return (
        <elfin-buttons buttonsConfig={config}></elfin-buttons>
      );
    };
  },
});
Button.argTypes = {
  size: {
    options: ['medium', 'small', 'mini'],
    control: {
      type: 'select',
    },
  },
  type: {
    options: ['primary', 'success', 'warning', 'danger', 'info', 'text'],
    control: {
      type: 'select',
    },
  },
  plain: {
    control: {
      type: 'boolean',
    },
  },
  round: {
    control: {
      type: 'boolean',
    },
  },
  circle: {
    control: {
      type: 'boolean',
    },
  },
  loading: {
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  icon: {
    control: {
      type: 'text',
    },
  },
  autofocus: {
    options: [true, false],
    control: {
      type: 'select',
    },
  },
};
Button.args = {
  size: '',
  type: 'primary',
  plain: false,
  round: false,
  circle: false,
  loading: false,
  disabled: false,
  icon: 'el-icon-plus',
  autofocus: false,
  buttonsConfig: [
    {
      type: ElfinButtonsItemType.BUTTON,
      label: '按钮前缀说明:',
      itemOptions: {
        size: '',
        type: 'primary',
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        icon: 'el-icon-plus',
        autofocus: false,
      },
      itemSlots() {
        return '按钮';
      },
    }
  ],
};

export default Button;
