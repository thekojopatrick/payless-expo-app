import Svg, { Path, SvgProps } from 'react-native-svg';

export default function AddIcon(props: SvgProps) {
  return (
    <Svg width={32} height={33} viewBox="0 0 32 33" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 32.5C24.8366 32.5 32 25.3366 32 16.5C32 7.66344 24.8366 0.5 16 0.5C7.16344 0.5 0 7.66344 0 16.5C0 25.3366 7.16344 32.5 16 32.5ZM15.25 8.5V15.75H8V17.25H15.25V24.5H16.75V17.25H24V15.75H16.75V8.5H15.25Z"
        fill="#EEF5FF"
      />
    </Svg>
  );
}
