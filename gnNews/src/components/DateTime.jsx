import { useState, useEffect } from "react";

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(time);
    };
  });

  return <>{date.toLocaleTimeString()}</>;
};
