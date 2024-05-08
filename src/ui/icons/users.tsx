import Svg, { Path, G, ClipPath, Defs, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export const UsersIcon = (props: SvgProps) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
      <G clip-path="url(#clip0_713_18119)">
        <Path
          d="M3.4999 8.25016C3.49979 7.37997 3.71599 6.5234 4.12904 5.75749C4.5421 4.99158 5.13905 4.34035 5.86622 3.86238C6.59339 3.38441 7.42797 3.09469 8.29489 3.01927C9.1618 2.94385 10.0339 3.0851 10.8327 3.43032C11.6314 3.77554 12.3319 4.3139 12.871 4.99697C13.4101 5.68005 13.771 6.48642 13.9211 7.34356C14.0713 8.20069 14.0061 9.08171 13.7313 9.90738C13.4565 10.733 12.9808 11.4775 12.3469 12.0737C13.5421 12.6536 14.5798 13.5133 15.3721 14.5797C16.1643 15.6461 16.6877 16.8879 16.8979 18.1997C16.921 18.3456 16.9152 18.4947 16.8807 18.6384C16.8463 18.7821 16.7838 18.9177 16.697 19.0372C16.6101 19.1568 16.5006 19.2581 16.3746 19.3354C16.2486 19.4126 16.1086 19.4643 15.9626 19.4874C15.8167 19.5106 15.6676 19.5047 15.5239 19.4702C15.3802 19.4358 15.2447 19.3733 15.1251 19.2865C15.0055 19.1996 14.9042 19.0901 14.827 18.9641C14.7497 18.8381 14.698 18.6981 14.6749 18.5522C14.4499 17.1426 13.7298 15.8595 12.6438 14.9331C11.5579 14.0067 10.1773 13.4979 8.7499 13.4979C7.32251 13.4979 5.94189 14.0067 4.85594 14.9331C3.77 15.8595 3.04988 17.1426 2.8249 18.5522C2.80165 18.6981 2.74989 18.8381 2.67255 18.964C2.59522 19.09 2.49384 19.1995 2.37419 19.2863C2.25454 19.373 2.11897 19.4354 1.97522 19.4698C1.83147 19.5042 1.68236 19.5099 1.5364 19.4867C1.39043 19.4634 1.25047 19.4116 1.12452 19.3343C0.998558 19.257 0.889065 19.1556 0.802288 19.0359C0.715512 18.9163 0.653152 18.7807 0.618768 18.637C0.584385 18.4932 0.578652 18.3441 0.601896 18.1982C0.812398 16.8869 1.33596 15.6457 2.12819 14.5798C2.92043 13.5139 3.95798 12.6548 5.1529 12.0752C4.6304 11.5846 4.21412 10.992 3.9298 10.3341C3.64548 9.67614 3.49916 8.96688 3.4999 8.25016ZM16.9999 6.00016C17.8714 6.00077 18.724 6.25435 19.4542 6.73013C20.1844 7.20591 20.7608 7.88343 21.1134 8.68043C21.466 9.47744 21.5796 10.3597 21.4406 11.22C21.3015 12.0804 20.9157 12.8818 20.3299 13.5272C21.2429 13.9804 22.0542 14.6147 22.7143 15.3914C23.3745 16.1681 23.8697 17.071 24.1699 18.0452C24.2294 18.2343 24.2377 18.4357 24.1941 18.6291C24.1506 18.8225 24.0566 19.0009 23.9218 19.1462C23.787 19.2916 23.6161 19.3986 23.4265 19.4566C23.237 19.5145 23.0354 19.5213 22.8424 19.4762C22.6495 19.4312 22.4719 19.3363 22.3273 19.201C22.1828 19.0657 22.0764 18.8946 22.0189 18.7052C21.7501 17.8355 21.2602 17.0504 20.5971 16.4268C19.934 15.8031 19.1204 15.3622 18.2359 15.1472C17.9903 15.0879 17.7717 14.9476 17.6155 14.7489C17.4593 14.5503 17.3746 14.3049 17.3749 14.0522V13.5242C17.3748 13.3147 17.4331 13.1094 17.5433 12.9313C17.6536 12.7532 17.8114 12.6094 17.9989 12.5162C18.4536 12.2908 18.8188 11.9183 19.0352 11.4592C19.2515 11.0001 19.3062 10.4813 19.1905 9.98714C19.0748 9.49298 18.7954 9.05246 18.3977 8.73713C18 8.4218 17.5074 8.25019 16.9999 8.25016C16.7015 8.25016 16.4154 8.13163 16.2044 7.92065C15.9934 7.70968 15.8749 7.42353 15.8749 7.12516C15.8749 6.82679 15.9934 6.54064 16.2044 6.32966C16.4154 6.11869 16.7015 6.00016 16.9999 6.00016ZM8.7499 5.25016C8.35039 5.24112 7.9531 5.312 7.58136 5.45862C7.20962 5.60524 6.87091 5.82464 6.58514 6.10396C6.29936 6.38328 6.07226 6.71688 5.91719 7.08518C5.76211 7.45347 5.68217 7.84903 5.68207 8.24864C5.68197 8.64825 5.76171 9.04386 5.9166 9.41223C6.0715 9.7806 6.29842 10.1143 6.58406 10.3938C6.8697 10.6732 7.2083 10.8928 7.57996 11.0396C7.95163 11.1864 8.34888 11.2575 8.7484 11.2487C9.53224 11.2313 10.2781 10.9078 10.8265 10.3474C11.3748 9.78698 11.6819 9.03418 11.6821 8.25014C11.6823 7.46611 11.3755 6.71315 10.8275 6.15246C10.2795 5.59176 9.53373 5.26788 8.7499 5.25016Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_713_18119">
          <Rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
