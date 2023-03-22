import { useSelector } from "react-redux";

export const Popup = () => {
  const trigger = useSelector((state) => {
    return state.popup.trigger;
  });

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">yo</div>
    </div>
  ) : (
    ""
  );
};
