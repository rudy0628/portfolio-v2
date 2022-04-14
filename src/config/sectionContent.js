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

import {
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoNodejs,
} from 'react-icons/io5';
import { SiMongodb } from 'react-icons/si';
import { FaBootstrap, FaReact, FaSass } from 'react-icons/fa';

export const projectContent = [
	{
		id: 'p1',
		title: 'Shoppingsite',
		description:
			'小型電商網站，可以上傳商品以及擁有購物車系統。使用express實現RESTful API以及使用ejs作為HTML樣板',
		skills: [
			<IoLogoNodejs className={'tools__icon--nodejs'} />,
			<SiMongodb className={'tools__icon--mongodb'} />,
			<FaBootstrap className={'tools__icon--bootstrap'} />,
		],
		site: 'https://blooming-eyrie-21858.herokuapp.com/',
		github: 'https://github.com/rudy0628/shoppingSite',
		projectWebPic: shoppingSiteWebPic,
		projectMinPic: shoppingSiteMinPic,
		tag: ['fullstack', 'ecommerce', 'RESTfulAPI'],
	},
	{
		id: 'p2',
		title: 'todolist-map',
		description:
			'傳統 todolist，結合 leaflet 開源地圖，以及 open weather 顯示天氣，使用parcel打包',
		skills: [
			<IoLogoHtml5 className={'tools__icon--html'} />,
			<IoLogoCss3 className={'tools__icon--css'} />,
			<IoLogoJavascript className={'tools__icon--js'} />,
		],
		site: 'https://todolist-map.netlify.app/',
		github: 'https://github.com/rudy0628/todolist-map',
		projectWebPic: todoListWebPic,
		projectMinPic: todoListMinPic,
		tag: ['todolist', 'location'],
	},
	{
		id: 'p3',
		title: 'real-time taiwan weather',
		description: '小型氣象查詢系統，可以查詢台灣各城市即時天氣資訊',
		skills: [
			<IoLogoHtml5 className={'tools__icon--html'} />,
			<IoLogoCss3 className={'tools__icon--css'} />,
			<IoLogoJavascript className={'tools__icon--js'} />,
		],
		site: 'https://taiwan-weather-search.netlify.app/',
		github: 'https://github.com/rudy0628/taiwan-weather-real-time-search',
		projectWebPic: weatherWebPic,
		projectMinPic: weatherMinPic,
		tag: ['weather'],
	},
	{
		id: 'p4',
		title: 'airtshop',
		description:
			'使用React、Redux開發機票訂購網站，擁有會員系統，可使用google及facebook登入',
		skills: [
			<FaReact className={'tools__icon--react'} />,
			<FaSass className={'tools__icon--sass'} />,
			<IoLogoJavascript className={'tools__icon--js'} />,
		],
		site: 'https://airtshop.netlify.app',
		github: 'https://github.com/rudy0628/airtshop',
		projectWebPic: airtshopMinPic,
		projectMinPic: airtshopWebPic,
		tag: ['airplane', 'user'],
	},
	{
		id: 'p5',
		title: 'Youtube Landing Page Clone',
		description: '使用Sass複製Youtube首頁，有RWD設計',
		skills: [
			<IoLogoHtml5 className={'tools__icon--html'} />,
			<FaSass className={'tools__icon--sass'} />,
			<IoLogoJavascript className={'tools__icon--js'} />,
		],
		site: 'https://youtube-page-clone.netlify.app/',
		github: 'https://github.com/rudy0628/youtube_clone',
		projectWebPic: youtubePageCloneMinPic,
		projectMinPic: youtubePageCloneWebPic,
		tag: ['clone', 'youtube'],
	},
	{
		id: 'p5',
		title: 'Youtube-note-extension',
		description:
			'使用React搭配Bootstrap開發chrome外掛元件，可在Youtube時間軸上使用文字筆記',
		skills: [
			<FaReact className={'tools__icon--react'} />,
			<FaBootstrap className={'tools__icon--bootstrap'} />,
		],
		site: 'https://chrome.google.com/webstore/detail/youtube-note-extension/ophgbipjpfgllhhcehdnfldjfgcggmnp',
		projectWebPic: youtubeNoteMinPic,
		projectMinPic: youtubeNoteWebPic,
		tag: ['chrome', 'youtube'],
	},
];

export const professionalContent = [
	{
		id: 'pro1',
		title: 'FRONT-END WEB DEV',
		description:
			'使用網頁前端技術HTML5、CSS3、JavaScript進行開發，目前專業於React，未來準備研究MERN生態環境',
		icon: FiChrome,
	},
	{
		id: 'pro2',
		title: 'UI DESIGN',
		description:
			'擅長使用CSS及SASS進行網頁切版設計，曾經使用SASS實現過Youtube首頁，以及擁有過多次RWD開發經驗',
		icon: FiLayers,
	},
	{
		id: 'pro3',
		title: 'MOBILE APP DEV',
		description:
			'曾經使用過Android studio進行App開發，於系上比賽中獲取行動應用組第二名成績，有開發過AI類型APP的經驗',
		icon: FiSmartphone,
	},
];
