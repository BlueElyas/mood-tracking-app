import Icon from "../icon/Icon";

import { type MoodKey, moodMap } from "./constants";

interface Props {
  x: any;
  y: any;
  width: any;
  height: any;
  payload: { mood: MoodKey };
}

const EmojiBar = (props: Props) => {
  const { x, y, width, height, payload } = props;
  const mood = moodMap[payload.mood] || {};
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width / 2}
        height={height}
        rx={20}
        ry={20}
        fill={mood.color}
      >
        <text x={x + width / 2} y={y - 12} textAnchor="middle" fontSize={20}>
          <Icon name={mood.emoji} />
        </text>
      </rect>
    </g>
  );
};

export default EmojiBar;
