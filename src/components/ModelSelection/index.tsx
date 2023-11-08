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
    <div>
      <ReactSelect
        className="mt-2"
        placeholder={model}
        defaultValue={model}
        options={models}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        onChange={(e) => setModel(e.value)}
        classNames={{ control: (state) => "bg-[#434654] border-[#434654]" }}
      />
    </div>
  );
};

export default ModelSelection;
