import {showHikeList} from "./show-hike-list.js";
import {showCommentList} from "./show-comment-list.js";

window.addEventListener("load", () => {
  showHikeList();
  showCommentList("hike");
});
