// 이미지 요소 가져오기
const artistLineupImages = [
    document.getElementById('artist_lineup'),
    document.getElementById('artist_lineup_GR'),
    document.getElementById('artist_lineup_10cm'),
    document.getElementById('artist_lineup_aespa'),
    document.getElementById('artist_lineup_yena'),
    document.getElementById('artist_lineup_CF')
];

// 각 이미지에 대해 마우스 이벤트 추가
artistLineupImages.forEach(image => {
    image.addEventListener('mouseover', function() {
        image.style.border = "5px solid white";  // 마우스를 올렸을 때 테두리 색 변경
    });

    image.addEventListener('mouseout', function() {
        image.style.borderColor = 'transparent';  // 마우스를 떼면 테두리 원상태로
    });
});

// 아티스트 라인업 요소 가져오기
const artistLineup = document.querySelector('.artist-lineup');

// 스크롤 이벤트 추가
window.addEventListener('wheel', function(event) {
    if (artistLineup.getBoundingClientRect().top < window.innerHeight && artistLineup.getBoundingClientRect().bottom > 0) {
        event.preventDefault(); // 기본 스크롤 동작 방지
        artistLineup.scrollLeft += event.deltaY; // 휠 스크롤에 따라 수평 스크롤 조정
    }
});
