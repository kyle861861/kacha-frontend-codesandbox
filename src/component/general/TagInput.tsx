import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const TagInput = () => {
  const [selected, setSelected] = useState(["test"]);

  return (
    <div>
      <pre>{JSON.stringify(selected)}</pre>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="tags"
        placeHolder="enter tags"
      />
      <em>press enter to add new tag</em>
    </div>
  );
};

export default TagInput;
