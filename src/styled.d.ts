import 'styled-components';
import original from 'react95/dist/themes/original';

type Theme = typeof original;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
