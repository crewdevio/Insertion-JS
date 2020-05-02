import Err from "../components/errors.js";

function ErrorHandler(error, log, diplay = false) {
  console.error(`Insertion ${error.name}: \n ⚠ ${log} ⚠ \n ${error.stack}`);

  if (diplay) {
    setTimeout(() => {
      document.querySelector("body").innerHTML = Err(error, log);
    }, 900);
  }

}

export default ErrorHandler;
