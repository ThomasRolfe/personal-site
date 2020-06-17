import ReactGA from "react-ga";

function TrackContactSubmitted() {
  ReactGA.event({
    category: "Contact submission",
    action: "User submitted contact form",
  });
}

export default TrackContactSubmitted;
