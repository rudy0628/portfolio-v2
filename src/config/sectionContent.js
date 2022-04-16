import shoppingSiteMinPic from '../img/project/shoppingsite-min.png';
import shoppingSiteWebPic from '../img/project/shoppingsite.webp';
import todoListMinPic from '../img/project/todolist-map-min.png';
import todoListWebPic from '../img/project/todolist-map.webp';
import weatherMinPic from '../img/project/weather-min.png';
import weatherWebPic from '../img/project/weather.webp';
import airtshopMinPic from '../img/project/airtshop-min.png';
import airtshopWebPic from '../img/project/airtshop.webp';
import youtubePageCloneMinPic from '../img/project/youtube-page-clone-min.png';
import youtubePageCloneWebPic from '../img/project/youtube-page-clone.webp';
import youtubeNoteMinPic from '../img/project/youtube-note-extension-min.png';
import youtubeNoteWebPic from '../img/project/youtube-note-extension.webp';

import { FiChrome, FiLayers, FiSmartphone } from 'react-icons/fi';

export const projectContent = [
	{
		id: 'p1',
		title: 'Shoppingsite',
		description:
			'小型電商網站，可以上傳商品以及擁有購物車系統。使用 Express 實現RESTful API 以及使用 EJS 作為 HTML 樣板',
		link: 'https://blooming-eyrie-21858.herokuapp.com/',
		projectWebPic: shoppingSiteWebPic,
		projectMinPic: shoppingSiteMinPic,
		skills: ['NodeJs', 'MongoDB', 'Bootstrap'],
	},
	{
		id: 'p2',
		title: 'todolist-map',
		description:
			'傳統 Todo list，結合 Leaflet 開源地圖，以及 Open Weather 顯示天氣，使用 Parcel 打包',
		link: 'https://todolist-map.netlify.app/',
		projectWebPic: todoListWebPic,
		projectMinPic: todoListMinPic,
		skills: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		id: 'p3',
		title: 'Real-time Taiwan weather',
		description: '小型氣象查詢系統，可以查詢台灣各城市即時天氣資訊',
		link: 'https://taiwan-weather-search.netlify.app/',
		projectWebPic: weatherWebPic,
		projectMinPic: weatherMinPic,
		skills: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		id: 'p4',
		title: 'Airtshop',
		description:
			'使用 React、Redux 開發機票訂購網站，擁有會員系統，可使用Google 及 Facebook 登入',
		link: 'https://github.com/rudy0628/airtshop',
		projectWebPic: airtshopMinPic,
		projectMinPic: airtshopWebPic,
		skills: ['React', 'Sass', 'JavaScript'],
	},
	{
		id: 'p5',
		title: 'Youtube landing page clone',
		description: '使用 Sass 複製 Youtube 首頁，有 RWD 設計',
		link: 'https://youtube-page-clone.netlify.app/',
		projectWebPic: youtubePageCloneMinPic,
		projectMinPic: youtubePageCloneWebPic,
		skills: ['HTML', 'Sass', 'JavaScript'],
	},
	{
		id: 'p6',
		title: 'Youtube-note-extension',
		description:
			'使用 React 搭配 Bootstrap 開發 Chrome 外掛元件，可在 Youtube 時間軸上使用文字筆記',
		link: 'https://chrome.google.com/webstore/detail/youtube-note-extension/ophgbipjpfgllhhcehdnfldjfgcggmnp',
		projectWebPic: youtubeNoteMinPic,
		projectMinPic: youtubeNoteWebPic,
		skills: ['React', 'Bootstrap'],
	},
];

export const professionalContent = [
	{
		id: 'pro1',
		title: 'FRONT-END WEB DEV',
		description:
			'使用網頁前端技術 HTML5、CSS3、JavaScript 進行開發，目前專業於 React，未來準備研究  MERN 生態環境',
		icon: FiChrome,
	},
	{
		id: 'pro2',
		title: 'UI DESIGN',
		description:
			'擅長使用 CSS 及 SASS 進行網頁切版設計，曾經使用 SASS 實現過 Youtube 首頁，以及擁有過多次 RWD 開發經驗',
		icon: FiLayers,
	},
	{
		id: 'pro3',
		title: 'MOBILE APP DEV',
		description:
			'曾經使用過 Android Studio 進行 App 開發，於系上比賽中獲取行動應用組第二名成績，有開發過 AI 類型 APP 的經驗',
		icon: FiSmartphone,
	},
];

export const timelineContent = [
	{
		id: 't1',
		title: '初次接觸網頁開發',
		date: 'Sep, 2019',
		description:
			'大學修習網頁設計時，對於網頁的運作有濃厚的興趣，開始接觸到 HTML、CSS 及 Javascript，同時也在課程中了解如何使用 BootStrap，並在完成課程時，製作出網頁小遊戲。',
		skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
	},
	{
		id: 't2',
		title: '大學實務專題',
		date: 'Feb, 2021',
		description:
			'利用 Android Studio 搭配 YOLO 建立影像辨識模型、PHP 製作討論留言板、串接資料庫查詢病徵以及物聯網感測器偵測植物狀況開發出植物の守衛 APP，於系上專題比賽取得行動應用組第二名成績。',
		skills: ['PHP', 'Android'],
	},
	{
		id: 't3',
		title: 'Airtshop 機票訂購網站',
		date: 'Feb, 2022',
		description:
			'利用 MERN 架構，開發出訂購機票的系統，開發中利用 Google Ouath、Facebook OAuth 建立第三方登入系統。後續進行優化時，使用 GraphQl 取代 RESTful API，增加 CRUD 的靈活性及速度。',
		skills: ['React', 'MongoDB', 'NodeJs'],
	},
	{
		id: 't4',
		title: 'Youtube-note-extension 擴充元件',
		date: 'Apr, 2022',
		description:
			'使用 React 開發可以在 Youtube 上加入文字筆記的 Chrome-extension，開發過程中利用 Chrome Web API，取得影片目前時間點及操作 DOM 跳轉影片時間點，目前擴充元件已經上架 Chrome web store。',
		skills: ['React', 'Bootstrap'],
	},
];
