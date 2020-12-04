import * as React from "react";
import "./styles.less";
import classNames from "classnames";

export enum FrameworkCardType {
  GATHER_DATA = "GATHER DATA",
  GENERATE_INSIGHTS = "GENERATE INSIGHTS",
  DECIDE_WHAT_TO_DO = "DECIDE WHAT TO DO"
}

function getTypeClassName(type: FrameworkCardType) {
  switch (type) {
    case FrameworkCardType.GATHER_DATA:
      return "framework-card--gather-data";
    case FrameworkCardType.GENERATE_INSIGHTS:
      return "framework-card--generate-insights";
    case FrameworkCardType.DECIDE_WHAT_TO_DO:
      return "framework-card--decide-what-to-do";
  }
}

const FrameworkCard = ({
  title,
  type
}: {
  title: string;
  type: FrameworkCardType;
}) => {
  return (
    <div className={classNames("framework-card", getTypeClassName(type))}>
      <div className="framework-card__title">{title}</div>
      <div className="framework-card__type">{type}</div>
    </div>
  );
};

export default FrameworkCard;
