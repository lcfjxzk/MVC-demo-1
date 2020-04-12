import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index();
  console.log(index);
  $tabContent
    .children() //找到tabContent的子元素
    .eq(index)
    .addClass("active") //第index个元素变成display: "block"
    .siblings()
    .removeClass("active"); //除第index个元素以外的元素变成display: "none"
  //在js里面不要出现css内容。所以不要用.css/.show()/.hide()
  //思想：样式与行为分离。js只管功能，不管样式。样式交给css去管。
});
$tabBar.children().eq(0).trigger("click"); //找到tabBar的子元素的第一个，默认点击它。
