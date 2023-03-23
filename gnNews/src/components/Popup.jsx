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
      <div className="popup-inner">
        <h1>Dzień dobry</h1>
        <p>Chiałem na wstępie podziękować za szanse😊</p>
        <p>Największą trudnością w zadaniu są dla mnie :</p>
        <p>TypeScript i react-test-lib.</p>
        <p>
          Rozumiem sposób działania i ich cel (kurs reac typescrip już mam
          kupiony)
        </p>
        <p>Niemiałem jeszcze możliwości popracowania z nimi</p>
      </div>
    </div>
  ) : (
    ""
  );
};
