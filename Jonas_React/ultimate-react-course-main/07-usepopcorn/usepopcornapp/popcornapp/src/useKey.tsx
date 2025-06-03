import { useEffect } from "react";

export const useKey = (key, action) => {
  useEffect(
    function () {
      function callBack() {
        document.addEventListener("keydown", function (e) {
          if (e.code.toLowerCase === key.toLowerCase) {
            action();
          }
        });
      }

      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [key, action]
  );
};
