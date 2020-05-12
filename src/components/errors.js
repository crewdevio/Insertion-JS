/* @jsx insertionJsx */

import  insertionJsx  from "../dom/ComponentCore.js";

function Err({ stack, message }, log) {
  document.body.style.backgroundColor = '#181b1c';
  document.body.style.color = '#f9f7f4';
  return insertionJsx(
    "div",
    null,
    insertionJsx(
      "h3",
      null,
      log ? log : message
    ),
    insertionJsx(
      "strong",
      null,
      "\uD83D\uDCA5 Crashed \uD83D\uDC49 "
    ),
    insertionJsx(
      "code",
      null,
      stack, "&nbsp;"
    )
  );
}

export default Err;