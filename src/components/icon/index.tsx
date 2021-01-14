import { App, defineComponent, PropType } from 'vue';
import './index.less';

export type IconName = 'loading' | 'left' | 'right' | 'up' | 'down' | 'heart';
export type IconSize = 'normal' | 'xs' | 'sm' | 'lg';

const Icon = defineComponent({
  name: 'bar-icon',
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true,
    },
    size: {
      type: String as PropType<IconSize>,
      default: 'normal',
    },
  },
  setup(props) {
    const renderLoading = (name: IconName) => {
      const strokeDashArrayAnimate = (
        strokeDashArray = '1,200;150,200;100,200'
      ) => (
        <animate
          attributeName="stroke-dasharray"
          values={strokeDashArray}
          dur="1.5s"
          repeatCount="indefinite"
        />
      );

      const strokeDashOffsetAnimate = (strokeDashOffset = '0;-10;-100') => (
        <animate
          attributeName="stroke-dashoffset"
          values={strokeDashOffset}
          dur="1.5s"
          repeatCount="indefinite"
        />
      );

      return (size: IconSize) => (
        <svg class={`bar-icon bar-icon-${name} bar-icon-${size}`}>
          {size === 'sm' && (
            <circle class="loading" cx="9" cy="9" r="7" stroke-width="2">
              {strokeDashArrayAnimate('1,200;80,200;80,200')}
              {strokeDashOffsetAnimate('0;-10;-40')}
            </circle>
          )}
          {size === 'normal' && (
            <circle class="loading" cx="12" cy="12" r="10" stroke-width="3">
              {strokeDashArrayAnimate()}
              {strokeDashOffsetAnimate()}
            </circle>
          )}
          {size === 'lg' && (
            <circle class="loading" cx="17" cy="17" r="15" stroke-width="3">
              {strokeDashArrayAnimate()}
              {strokeDashOffsetAnimate()}
            </circle>
          )}
        </svg>
      );
    };

    const renderLeft = () => {
      return (size: IconSize) => (
        <svg
          class={`bar-icon bar-icon-${size}`}
          viewBox="64 64 896 896"
          fill="currentColor"
        >
          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
        </svg>
      );
    };

    const renderDown = () => {
      return (size: IconSize) => (
        <svg
          class={`bar-icon bar-icon-${size}`}
          viewBox="64 64 896 896"
          fill="currentColor"
        >
          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
        </svg>
      );
    };

    const renderUp = () => {
      return (size: IconSize) => (
        <svg
          class={`bar-icon bar-icon-${size}`}
          viewBox="64 64 896 896"
          fill="currentColor"
        >
          <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
        </svg>
      );
    };

    const renderRight = () => {
      return (size: IconSize) => (
        <svg
          class={`bar-icon bar-icon-${size}`}
          viewBox="64 64 896 896"
          fill="currentColor"
        >
          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
        </svg>
      );
    };

    const renderHeart = () => {
      return (size: IconSize) => (
        <svg
          class={`bar-icon bar-icon-${size}`}
          viewBox="64 64 896 896"
          fill="currentColor"
        >
          <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
        </svg>
      );
    };

    const renderByName = (name: IconName, size: IconSize) => {
      const map = {
        loading: renderLoading(name),
        left: renderLeft(),
        down: renderDown(),
        up: renderUp(),
        right: renderRight(),
        heart: renderHeart(),
      };

      return map[name](size);
    };

    return () => renderByName(props.name, props.size);
  },
});

Icon.install = (app: App) => {
  app.component(Icon.name, Icon);
};

export default Icon;
