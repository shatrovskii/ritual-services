import * as React from "react";
import emoji from "react-easy-emoji";
import classNames from "classnames";
import "mirotone/dist/styles.css";
import "./styles.less";
import EmojiOption from "./emoji-option";

export const EmotionalScale = ({
  options = [],
  columnAlign = false,
  onClick
}: {
  options: EmojiOption[];
  columnAlign?: boolean;
  onClick?: (string) => void,
}) => {

    const [selectedItemId, setSelectedItemId] = React.useState(options[0].id);

    const handleClick = (item) => {
        setSelectedItemId(item.id)
        onClick && onClick(item)
    }

    const isActive = (id: number): boolean => selectedItemId === id

    return (
    <div
      className={classNames({
        "emotional-scale": true,
        "emotional-scale--column": columnAlign
      })}
    >
      {options.map(option => (
          <div onClick={() => handleClick(option)}>
            <div className={classNames({'emotional-scale__item': true,
                'emotional-scale__item--active': isActive(option.id)})}>
              {emoji(`${option.img}`)}
              <div className="emotional-scale__item-label">{option.label}</div>
            </div>
          </div>
      ))}
    </div>
  );
};
