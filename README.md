# Corporate Website — Component Publishing Sample

IT 기업 **기업 홈페이지 UI 퍼블리싱 샘플**입니다.  
헤더·푸터를 **Web Components**로 분리한 구조를 포함하며, 포트폴리오용으로 **주요 9페이지**만 추렸습니다.

> 면접·포트폴리오 검토 목적이 아닌 외부 공유를 금지합니다.  

---

## Overview

| Item | Detail |
| --- | --- |
| Type | 반응형 기업 홈페이지 (정적 HTML/CSS/JS) |
| Feature | Custom Elements 기반 Header / Footer 컴포넌트 |
| Scope | 주요 화면 샘플 (전체 프로젝트의 일부) |
| Stack | HTML5, CSS3, Vanilla JS, Web Components, Swiper.js, XEIcon |
| Font | SUIT / SUITE |

실제 CMS·백엔드 연동은 포함하지 않습니다. **마크업·컴포넌트 분리·섹션 레이아웃** 확인용입니다.

---

## Structure

```
portfolio/
├── css/                 # common, style, swiper, xeicon
├── font/                # SUIT, XEIcon
├── html/
│   ├── component/       # header.js, footer.js, siproject.js
│   ├── index.html
│   ├── junryeong.html   # 솔루션 상세 등
│   └── ...
├── images/
├── js/                  # script.js, swiper
├── .gitignore
└── README.md
```

---

## Included Pages (9)

| Area | File | Description |
| --- | --- | --- |
| Main | `html/index.html` | 메인 비주얼, 사업영역, 솔루션, SI 사례 |
| Solution | `html/junryeong.html` | 솔루션 — 전령이지 |
| Solution | `html/charteasy.html` | 솔루션 — 차트이지 |
| Solution | `html/nebustop.html` | 솔루션 — 네버스탑 |
| Solution | `html/thingeasy.html` | 솔루션 — 싱크이지 |
| Business | `html/si.html` | 시스템 구축 (SI) |
| Business | `html/app.html` | 앱 개발 |
| Company | `html/about.html` | 회사소개·연혁·고객사 |
| Contact | `html/contact.html` | 문의하기·오시는길 |

제외: `privacy.html` (개인정보처리방침)

---

## Components

페이지마다 공통으로 로드됩니다.

| File | Role |
| --- | --- |
| `html/component/header.js` | `<header-component>` — 로고, GNB, 모바일 메뉴 |
| `html/component/footer.js` | `<footer-component>` — 푸터 |
| `html/component/siproject.js` | SI 프로젝트/사례 데이터·렌더링 (메인·SI 페이지) |

로컬에서 열 때 **Live Server 등 HTTP로 미리보기**하는 것을 권장합니다.  
(`file://`에서는 브라우저/경로에 따라 스크립트 로딩이 제한될 수 있습니다.)

---

## How to Preview

1. VS Code **Live Server** 등으로 `portfolio` 루트를 연다.
2. `html/index.html`부터 확인한다.
3. PC / 모바일 너비로 GNB·전체메뉴·Swiper를 함께 본다.

상대 경로(`../css`, `component/*.js`)가 유지되도록 **폴더 구조를 그대로** 사용하세요.

---

## Tech Notes

- Custom Elements로 헤더·푸터를 재사용해 HTML 중복을 줄인 구조
- `css/common.css` + `css/style.css` — 공통·화면 스타일
- Swiper — 메인 비주얼 등 슬라이더
- XEIcon — 아이콘 폰트

---

## Access & Sharing

- 저장소는 **Private**로 운영합니다.
- 면접관·리뷰어에게만 collaborator 초대로 공유하고, 검토 후 권한을 회수합니다.
- Public fork, 재배포, 클라이언트·제3자 전달을 금지합니다.

---

## License

포트폴리오 열람 목적의 비공개 샘플입니다.  
무단 복제·배포·상업적 이용을 금지합니다.
