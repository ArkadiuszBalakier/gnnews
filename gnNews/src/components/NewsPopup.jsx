import { useSelector, useDispatch } from "react-redux";
import { newsPopupTrigger } from "../store";
import "./NewsPopup.css";

export const NewsPopup = () => {
  const trigger = useSelector((state) => {
    return state.newsPopup.trigger;
  });
  const dispatch = useDispatch();

  return trigger ? (
    <div
      className="popup"
      onClick={() => {
        dispatch(newsPopupTrigger());
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
