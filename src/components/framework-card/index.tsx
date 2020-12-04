import * as React from "react";
import "./styles.less";

const FrameworkCard = ({ description }: { description: string }) => {
  return (
    <div className="framework-card">
      <div className="framework-card__description">{description}</div>
    </div>
  );
};

export default FrameworkCard;
