import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export const ArrowUpIcon = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6.79509 7.125C6.79509 6.82663 6.91362 6.54048 7.1246 6.3295C7.33558 6.11853 7.62172 6 7.92009 6H16.9351C17.2335 6 17.5196 6.11853 17.7306 6.3295C17.9416 6.54048 18.0601 6.82663 18.0601 7.125V16.14C18.0601 16.4384 17.9416 16.7245 17.7306 16.9355C17.5196 17.1465 17.2335 17.265 16.9351 17.265C16.6367 17.265 16.3506 17.1465 16.1396 16.9355C15.9286 16.7245 15.8101 16.4384 15.8101 16.14V9.84L7.92009 17.7315C7.78258 17.8796 7.60768 17.9878 7.41381 18.0449C7.21993 18.1019 7.01427 18.1056 6.81848 18.0555C6.6227 18.0054 6.44404 17.9035 6.30133 17.7604C6.15862 17.6173 6.05714 17.4384 6.00759 17.2425C5.95747 17.0469 5.96096 16.8415 6.01771 16.6477C6.07447 16.454 6.18237 16.2791 6.33009 16.1415L14.2201 8.25H7.92009C7.62172 8.25 7.33558 8.13147 7.1246 7.9205C6.91362 7.70952 6.79509 7.42337 6.79509 7.125Z"
        fill="black"
      />
    </Svg>
  );
};
