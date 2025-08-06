/** @type { import('@storybook/react-vite').Preview } */
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";

import "../src/index.css";

const preview = {
  decorators: [withRouter],
  parameters: {
    parameters: {
      reactRouter: reactRouterParameters({}),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
