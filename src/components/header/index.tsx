import { App, defineComponent } from 'vue';
import icon from '../icon';
import './index.less';

const Header = defineComponent({
  name: 'bar-header',
  components: {
    icon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    color: {
      type: String,
    },
    textColor: {
      type: String,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    // 需要滚动的元素ID
    scrollTarget: {
      type: String,
    },
    leftText: {
      type: String,
      default: '',
    },
    leftArrow: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['clickLeft', 'clickRight'],
  setup(props, { emit, slots }) {
    const backTop = (selector: string) => {
      const target = document.querySelector(selector);
      if (target?.scrollTop !== 0) {
        target?.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };

    const handleClickLeft = (event: MouseEvent) => {
      emit('clickLeft', event);
    };
    const handleClickCenter = () => {
      props.scrollTarget && backTop(props.scrollTarget);
    };
    const handleClickRight = (event: MouseEvent) => {
      emit('clickRight', event);
    };

    const renderLeft = () => {
      if (slots.left) {
        return (
          <div class="bar-header__left" onClick={handleClickLeft}>
            {slots.left()}
          </div>
        );
      }

      return (
        <div class="bar-header__left" onClick={handleClickLeft}>
          {props.leftArrow && <icon name="left" size="sm" />}
          <span>{props.leftText ? props.leftText : ''}</span>
        </div>
      );
    };

    return () => (
      <div>
        <header
          class="bar-header"
          style={{
            color: props.textColor,
            backgroundColor: props.color,
            position: props.fixed ? 'fixed' : 'static',
            top: 0,
            left: 0,
            zIndex: 2999,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClickCenter();
          }}
        >
          {renderLeft()}
          <div class="bar-header__center" onClick={handleClickCenter}>
            <p class="header__title">{props.title}</p>
            {props.subTitle && (
              <p class="header__sub-title">{props.subTitle}</p>
            )}
          </div>
          <div class="bar-header__right" onClick={handleClickRight}>
            {slots.right ? slots.right() : ''}
          </div>
        </header>
        {props.fixed && <div style="height: calc(46px)"></div>}
      </div>
    );
  },
});

Header.install = (app: App) => {
  app.component(Header.name, Header);
};

export default Header;
