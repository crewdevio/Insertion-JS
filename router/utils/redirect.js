function Redirect({ to }) {
  const url = window.location.origin + window.location.pathname + "#" + to;

  window.location.href = url;
}

export default Redirect;
