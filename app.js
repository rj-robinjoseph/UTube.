const listContainer = document.querySelector(".list-container");

let API_KEY = "AIzaSyCdJTAhQCzFq6VOUSOtOP6d80m8EDtGmAA";
let VIDEO_URL = "https://www.googleapis.com/youtube/v3/videos?";
let CHANNEL_URL = "https://www.googleapis.com/youtube/v3/channels?";

// YouTube Api

fetch(
  VIDEO_URL +
    new URLSearchParams({
      key: API_KEY,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 100,
      regionCode: "US",
    })
)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  .catch((err) => console.log(err));

const getChannelIcon = (video_data) => {
  fetch(
    CHANNEL_URL +
      new URLSearchParams({
        key: API_KEY,
        part: "snippet",
        id: video_data.snippet.channelId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      video_data.channelThumbnail =
        data.items[0].snippet.thumbnails.default.url;
      makeVideoCard(video_data);
    });
};

const makeVideoCard = (data) => {
  listContainer.innerHTML += `
  <div class="vid-list" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
  <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" />
  <div class="flex-div">
    <img src="${data.channelThumbnail}" />
    <div class="vid-info">
      <a href="https://youtube.com/watch?v=${data.id}"
        >${data.snippet.title}</a
      >
      <p>${data.snippet.channelTitle}</p>
    </div>
  </div>
</div>
  `;
};

var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var slider = document.querySelector(".slider");

menuIcon.addEventListener("click", () => {
  slider.classList.toggle("large-slider");
  container.classList.toggle("large-container");
  sideBar.classList.toggle("small-sidebar");
});

// Slider

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  fade: false,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
});
$("a[data-slide]").click(function (e) {
  e.preventDefault();
  var slideno = $(this).data("slide");
  $(".slider-nav").slick("slickGoTo", slideno + 1);
});

$(".slider-nav").slick({
  autoplay: true,
  autoplaySpeed: 3000,
});
