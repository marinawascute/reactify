import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [edit, setIsEdit] = useState(false);

  function toggleModal() {
    setIsShowing(!isShowing);
  }

  function toggleEdit() {
    setIsEdit(!edit);
  }

  return {
    isShowing,
    toggleModal,
  };
};

export default useModal;
