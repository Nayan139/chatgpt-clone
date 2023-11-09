"use client";

import React from "react";
import ReactSelect from "react-select";
import useSWR from "swr";

const fetchModel = () =>
  fetch("/api/getEngines", { method: "GET" }).then((res) => res.json());

const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModel);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  return (
    <div className="mt-2">
      <ReactSelect
        className="mt-2"
        placeholder={model}
        defaultValue={model}
        options={models?.modelOptions}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{ control: (state) => "bg-[#434654] border-[#434654]" }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
