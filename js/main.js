function openNav() {
  let sideNav = document.querySelector("aside");
  sideNav.classList.toggle("open");
}

const osTheme =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: Dark)").matches;
// console.log(osTheme);

// 로컬스토리지의 다크모드 상태 읽기
if (localStorage.getItem("theme") || osTheme === "dark") {
  document.documentElement.dataset.theme = "dark";
}

const button = document.getElementById("theme_tit");

document.getElementById("theme_btn").addEventListener("click", function () {
  if (document.documentElement.dataset.theme === "light") {
    // 다크모드 설정
    document.documentElement.dataset.theme = "dark";
    // 다크모드 유지
    localStorage.setItem("theme", "dark");
    // 버튼 텍스트 다크모드로 변경
    button.innerHTML = "다크모드";
  } else {
    // 다크모드 설정 해지
    document.documentElement.dataset.theme = "light";
    // 로컬스토리지에 다크모드 해제 저장
    localStorage.setItem("theme", "light");
    // 버튼 텍스트 라이트모드로 변경
    button.innerHTML = "라이트모드";
  }
});
