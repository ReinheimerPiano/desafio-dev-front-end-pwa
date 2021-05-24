import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/lib/locale/pt';
import IconCanaltech from '@/components/IconCanaltech.vue';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#1C1C1C',
        secondary: '#828282',
        tertiary: '#454D50',
        accent: '#3989F6',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#F63D6A',
      },
    },
  },
  icons: {
    values: {
      iconCanaltech: {
        component: IconCanaltech,
        props: {
          name: 'iconCanaltech',
        },
      },
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
  breakpoint: {
    mobileBreakpoint: 'xs',
  },
});
