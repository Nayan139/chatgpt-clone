import React from "react";
import { InfoTextProps } from "@/types/components/InfoText";

const InfoText = ({
  infoIcon: InfoIcon,
  title,
  content1,
  content2,
  content3,
}: InfoTextProps) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-5">
        {InfoIcon}
        <h2> {title}</h2>
      </div>
      <div className="space-y-2">
        <p className="infoText">&quot;{content1} &quot;</p>
        <p className="infoText">
          &quot;{content2}
          &quot;
        </p>
        <p className="infoText">&quot;{content3}&quot;</p>
      </div>
    </div>
  );
};

export default InfoText;
