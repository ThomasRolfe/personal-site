import ReactGA from "react-ga";

function TrackButtonClicked(description) {
  ReactGA.event({
    category: "Button Click",
    action: description,
  });
}

export default TrackButtonClicked;
