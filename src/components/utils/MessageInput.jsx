import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const NewMessageInput = ({ value, onChange, onSend }) => {
  const input = useRef(null);

  const onInputKeyDown = (ev) => {
    if (ev.key === "Enter" && !ev.shiftKey) {
      ev.preventDefault();
      onSend();
    }
  };

  const onChangeEvent = (ev) => {
    onChange(ev);
    setTimeout(() => {
      adjustHeight();
    }, 10);
  };

  const adjustHeight = () => {
    setTimeout(() => {
      input.current.style.height = "auto";
      input.current.style.height = input.current.scrollHeight + 1 + "px";
    }, 100);
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <textarea
      ref={input}
      rows="1"
      className="border dark:border-slate-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full dark:bg-darken placeholder:font-light placeholder:italic"
      value={value}
      onChange={onChangeEvent}
      onKeyDown={onInputKeyDown}
      placeholder="Type a message..."
    />
  );
};

NewMessageInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSend: PropTypes.func,
};

export default NewMessageInput;
