import "@hotwired/turbo-rails"
import ReactOnRails from "react-on-rails";
import HelloWorld from "../bundles/HelloWorld/components/HelloWorld";

ReactOnRails.setOptions({turbo: true})
ReactOnRails.register({
  HelloWorld
})

// comment this section in to see that components get rendered after 2s
// document.addEventListener("turbo:before-stream-render", function () {
//   setTimeout(() => {
//     ReactOnRails.reactOnRailsPageLoaded();
//   }, 2000)
// });