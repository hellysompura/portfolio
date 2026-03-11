import React from "react";

export default function TextArea({
  id = "message",
  label = "Message",
  placeholder = "",
  value = "",
  onChange = () => {},
}) {
  return (
    <div className="flex flex-col justify-start items-start gap-2 my-4">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 bg-(--gray-20) focus:outline-none focus-visible:outline-0 border border-(--gray-20)"
      />
    </div>
  );
}
