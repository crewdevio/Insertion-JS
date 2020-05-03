/* @jsx insertionJsx */

import insertionJsx from "../dom/componentJsx.js";

function Err({ stack, message }, log) {
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
      stack
    )
  );
}

export default Err;