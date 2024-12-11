import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [MessageText, AnimatedMessageText] = createIcon({
  name: 'MessageText',
  getIcon: (props) => (
    <Svg viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M15 0H3C1 0 0 1 0 3V18L3 15H15C17 15 18 14 18 12V3C18 1 17 0 15 0ZM10 10.25H5C4.586 10.25 4.25 9.914 4.25 9.5C4.25 9.086 4.586 8.75 5 8.75H10C10.414 8.75 10.75 9.086 10.75 9.5C10.75 9.914 10.414 10.25 10 10.25ZM13 6.25H5C4.586 6.25 4.25 5.914 4.25 5.5C4.25 5.086 4.586 4.75 5 4.75H13C13.414 4.75 13.75 5.086 13.75 5.5C13.75 5.914 13.414 6.25 13 6.25Z"
        fill="currentColor"
      />
    </Svg>
  ),
})
