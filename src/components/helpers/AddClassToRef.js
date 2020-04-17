const AddClassToRef = (ref, classNames) => {
  ref.current.classList.add(classNames.join(" "));
};
