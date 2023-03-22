import { useSelector, useDispatch } from "react-redux";
import { changeTrigger } from "../store";
import "./Popup.css";

export const Popup = () => {
  const trigger = useSelector((state) => {
    return state.popup.trigger;
  });
  const dispatch = useDispatch();

  return trigger ? (
    <div
      className="popup"
      onClick={() => {
        dispatch(changeTrigger());
      }}
    >
      <div className="popup-inner">yo</div>
    </div>
  ) : (
    ""
  );
};
