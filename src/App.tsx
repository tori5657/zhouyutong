/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Sun,
  MapPin,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Send,
  X,
  ExternalLink,
  Camera,
  ArrowUpRight
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const RevealOnScroll = ({ children, className = "", delay = 0, key }: { children: React.ReactNode, className?: string, delay?: number, key?: React.Key }) => {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 md:px-12 py-8 max-w-7xl mx-auto w-full">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-3"
    >
      <div className="w-10 h-10 bg-pastel-pink rounded-2xl flex items-center justify-center font-black text-white shadow-md rotate-3">Y</div>
      <span className="text-xl font-black tracking-tight text-text-dark">Yutong<span className="text-pastel-pink">.</span></span>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="hidden md:flex gap-10 text-sm font-bold text-text-main"
    >
      <a href="#about" className="hover:text-pastel-pink transition-colors">关于我</a>
      <a href="#journey" className="hover:text-pastel-pink transition-colors">旅程</a>
      <a href="#life" className="hover:text-pastel-pink transition-colors">碎片</a>
    </motion.div>
    <motion.a 
      href="#contact"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="px-6 py-2.5 bg-white text-text-dark font-bold rounded-full text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 border border-gray-100"
    >
      <MessageCircle className="w-4 h-4 text-pastel-pink" /> 找我玩
    </motion.a>
  </nav>
);

const Hero = () => {
  const [activeEgg, setActiveEgg] = useState<string | null>(null);

  const tags = [
    { text: "KTV 灵魂歌手 🎤", id: "ktv", color: "bg-pastel-pink/20 text-pink-700 border-pink-200", margin: "mt-4", rotate: "-rotate-6" },
    { text: "竞技乒乓 🏓", id: "pingpong", color: "bg-pastel-green/20 text-green-700 border-green-200", margin: "-mt-6", rotate: "rotate-3" },
    { text: "无边界探索者 🌍", id: "explorer", color: "bg-pastel-blue/20 text-blue-700 border-blue-200", margin: "mt-8", rotate: "-rotate-2" },
    { text: "恐怖美学研究员 👻", id: "horror", color: "bg-purple-100 text-purple-700 border-purple-200", margin: "-mt-2", rotate: "rotate-6" },
    { text: "光合作用依赖者 ☀️", id: "sun", color: "bg-pastel-yellow/30 text-yellow-700 border-yellow-200", margin: "mt-6", rotate: "-rotate-3" },
    { text: "麻将德州双修玩家 🀄️", id: "mahjong", color: "bg-teal-100 text-teal-700 border-teal-200", margin: "-mt-8", rotate: "rotate-2" },
    { text: "产品哲学践行者 💡", id: "pm", color: "bg-orange-100 text-orange-700 border-orange-200", margin: "mt-2", rotate: "-rotate-6" },
    { text: "反内卷先锋 🕊️", id: "anti-involution", color: "bg-red-100 text-red-700 border-red-200", margin: "mt-10", rotate: "rotate-3" },
    { text: "跨时区交流达人 🌐", id: "timezone", color: "bg-indigo-100 text-indigo-700 border-indigo-200", margin: "-mt-4", rotate: "-rotate-2" },
    { text: "数据与直觉并重 ⚖️", id: "data", color: "bg-cyan-100 text-cyan-700 border-cyan-200", margin: "mt-4", rotate: "rotate-6" }
  ];

  const handleTagClick = (id: string) => {
    setActiveEgg(id);
    setTimeout(() => setActiveEgg(null), 3000);
  };

  return (
    <section id="about" className={`max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-32 relative overflow-hidden flex flex-col items-center text-center transition-colors duration-1000 ${activeEgg === 'sun' ? 'bg-orange-50' : ''}`}>
      {/* Easter Egg Overlays */}
      <AnimatePresence>
        {activeEgg === 'horror' && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 pointer-events-none flex items-center justify-center"
          >
            <motion.div 
              initial={{ y: 100, opacity: 0 }} animate={{ y: -100, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
              className="text-9xl"
            >
              👻
            </motion.div>
          </motion.div>
        )}
        {activeEgg === 'anti-involution' && (
          <motion.div 
            initial={{ y: -200, opacity: 0, rotate: -10 }} animate={{ y: 200, opacity: 1, rotate: 10 }} exit={{ opacity: 0 }} transition={{ duration: 2.5 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 z-50 pointer-events-none bg-yellow-200 text-yellow-900 px-8 py-6 rounded-lg shadow-2xl font-handwriting text-3xl"
          >
            别看了，去喝杯咖啡吧 ☕️
          </motion.div>
        )}
        {activeEgg === 'ktv' && (
          <motion.div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ y: '100vh', x: Math.random() * window.innerWidth, opacity: 1 }}
                animate={{ y: '-10vh', x: Math.random() * window.innerWidth, opacity: 0 }}
                transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
                className="absolute text-4xl"
              >
                {['🎵', '🎶', '🎤'][Math.floor(Math.random() * 3)]}
              </motion.div>
            ))}
          </motion.div>
        )}
        {activeEgg === 'mahjong' && (
          <motion.div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ y: '-10vh', x: Math.random() * window.innerWidth, opacity: 1, rotate: 0 }}
                animate={{ y: '110vh', x: Math.random() * window.innerWidth, opacity: 0, rotate: 360 }}
                transition={{ duration: 2 + Math.random() * 2, ease: "easeIn" }}
                className="absolute text-5xl"
              >
                {['🀄️', '🃏', '🎲', '♥️', '♠️'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </motion.div>
        )}
        {activeEgg === 'pingpong' && (
          <motion.div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            <motion.div 
              initial={{ x: '-10vw', y: '50vh' }}
              animate={{ 
                x: ['-10vw', '20vw', '50vw', '80vw', '110vw'], 
                y: ['50vh', '20vh', '60vh', '10vh', '50vh'] 
              }}
              transition={{ duration: 1.5, ease: "linear" }}
              className="absolute text-6xl"
            >
              🏓
            </motion.div>
          </motion.div>
        )}
        {activeEgg === 'explorer' && (
          <motion.div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            <motion.div 
              initial={{ x: '-10vw', y: '80vh', rotate: 45 }}
              animate={{ x: '110vw', y: '-10vh', rotate: 45 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute text-7xl"
            >
              ✈️
            </motion.div>
          </motion.div>
        )}
        {activeEgg === 'pm' && (
          <motion.div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5 }}
              className="text-9xl drop-shadow-[0_0_50px_rgba(250,204,21,0.8)]"
            >
              💡
            </motion.div>
          </motion.div>
        )}
        {activeEgg === 'timezone' && (
          <motion.div className="fixed inset-0 z-50 pointer-events-none overflow-hidden flex items-center justify-center gap-8">
            {['🌍', '🌎', '🌏'].map((globe, i) => (
              <motion.div 
                key={i}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, rotate: 360 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 2, delay: i * 0.2 }}
                className="text-6xl"
              >
                {globe}
              </motion.div>
            ))}
          </motion.div>
        )}
        {activeEgg === 'data' && (
          <motion.div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ y: '100vh', x: Math.random() * window.innerWidth, opacity: 1 }}
                animate={{ y: '-10vh', x: Math.random() * window.innerWidth, opacity: 0 }}
                transition={{ duration: 1 + Math.random() * 2, ease: "linear" }}
                className="absolute text-2xl font-mono text-cyan-400 font-bold"
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Blobs */}
      <div className="bg-shape bg-pastel-pink w-72 h-72 top-10 left-[10%] blur-3xl"></div>
      <div className="bg-shape bg-pastel-yellow w-96 h-96 bottom-10 right-[10%] blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-32 h-32 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 relative bg-white"
        >
          <img src={`${import.meta.env.BASE_URL}我本人.JPG`} alt="周昱彤" className="w-full h-full object-cover" />
        </motion.div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-yellow/30 text-yellow-700 font-bold text-sm mb-8">
          <Sparkles className="w-4 h-4" /> 一半是安静的观察者，一半是热烈的体验派。
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-text-dark leading-[1.2] mb-6">
          Hello, 我是<span className="text-pastel-pink relative inline-block mx-2 md:mx-4">
            周昱彤
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-pastel-yellow opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
            </svg>
          </span> ☀️
        </h1>
        
        <p className="text-lg md:text-xl text-text-main mb-10 max-w-2xl leading-relaxed font-medium">
          在内心深处构建秩序，在广阔世界里拥抱喧嚣。做产品让我习惯于主动沟通、打破边界，把天马行空的想法变成触手可及的现实；而生活让我保持热烈，去旅行、去交谈、去体验不一样的烟火气。不被定义，拒绝内耗，永远期待下一次的出发与挑战。
        </p>
        
        <div className="mb-16">
          <a href="#journey" className="px-8 py-4 bg-pastel-pink text-white rounded-full font-bold shadow-lg shadow-pastel-pink/30 hover:shadow-xl hover:shadow-pastel-pink/40 hover:-translate-y-1 transition-all inline-block">
            开启我的旅程
          </a>
        </div>

        {/* Scattered Tags Cluster */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-x-3 gap-y-4 md:gap-x-5 md:gap-y-6 relative z-10 mt-4"
        >
          {tags.map((tag, i) => (
            <div key={i} className={`relative ${tag.margin}`}>
              <motion.button
                onClick={() => handleTagClick(tag.id)}
                animate={{ y: [0, -6, 0] }}
                transition={{ 
                  duration: 3 + (i % 3), 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.2 
                }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full border font-bold text-xs md:text-sm cursor-pointer shadow-sm backdrop-blur-sm transition-colors ${tag.color} ${tag.rotate}`}
              >
                {tag.text}
              </motion.button>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const JourneyTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const journey = [
    {
      period: "2017.09 - 2021.06",
      title: "山东大学",
      subtitle: "学士 | 管理科学与工程",
      desc: "故事的起点。不仅在这里打下了扎实的管理与数据基础，更重要的是，学会了如何用好奇心去解构这个复杂的世界。",
      color: "bg-pastel-yellow",
      textColor: "text-yellow-700",
      img: `${import.meta.env.BASE_URL}山东大学.jpg`
    },
    {
      period: "2019.07 - 2020.01",
      title: "香港城市大学",
      subtitle: "交换生",
      desc: "第一次勇敢地跨出舒适圈。在维港的海风中，体验了多元文化的激烈碰撞，也让我在不同的学术氛围里找到了新的自我坐标。",
      color: "bg-purple-200",
      textColor: "text-purple-700",
      img: `${import.meta.env.BASE_URL}cityu.jpg`
    },
    {
      period: "2022.08 - 2024.01",
      title: "新加坡国立大学",
      subtitle: "硕士 | 数据分析",
      desc: "跨越赤道来到热烈的狮城。在数据的海洋里深潜，在全球化的视野中重塑认知，更加坚定了我要走向更广阔世界的决心。",
      color: "bg-pastel-green",
      textColor: "text-green-700",
      img: `${import.meta.env.BASE_URL}nus.jpg`
    },
    {
      period: "2024.04 - 2025.05",
      title: "宁德时代 (CATL)",
      subtitle: "数字化产品工程师",
      desc: "一头扎进新能源巨头的快车道。在这里，我把严谨的数据分析当成武器，在错综复杂的跨部门协作中，硬核地推动了一个个数字化产品的落地。",
      color: "bg-pastel-blue",
      textColor: "text-blue-700",
      img: `${import.meta.env.BASE_URL}catl.jpg`
    },
    {
      period: "2025.05 - 至今",
      title: "e签宝 · eSignGlobal",
      subtitle: "国际站产品经理",
      desc: "带着过往的所有沉淀，开启出海新篇章。现在，我正致力于将天马行空的想法转化为连接全球用户的产品力，用技术让信任跨越国界。",
      color: "bg-pastel-pink",
      textColor: "text-pink-700",
      img: `${import.meta.env.BASE_URL}e签宝.png`
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % journey.length);
  const current = journey[currentIndex];

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="bg-shape bg-pastel-blue w-96 h-96 top-20 right-0 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12 text-center md:text-left">
        <RevealOnScroll>
          <div className="mb-12 relative z-20">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="text-4xl md:text-5xl">🗺️</span>
              <h2 className="text-4xl md:text-5xl font-black text-text-dark">我的旅程</h2>
            </div>
            <p className="text-lg text-text-main font-medium max-w-2xl mx-auto md:mx-0">一段不断向外探索、向内生长的连续故事</p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <RevealOnScroll>
          {/* Main Display Area */}
          <div className="relative h-[550px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-rose-50/30 flex items-center justify-center">
            
            {/* Image Area */}
            <div className="absolute top-0 md:top-8 left-0 md:left-8 right-0 md:right-32 bottom-48 md:bottom-24 rounded-t-[2.5rem] md:rounded-[2rem] overflow-hidden shadow-sm bg-white flex items-center justify-center p-4">
              <motion.img 
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={current.img}
                alt={current.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Overlapping Info Card Area */}
            <div className="absolute bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-[38%] md:max-w-sm bg-white p-6 md:p-8 rounded-t-[2rem] md:rounded-[1.5rem] shadow-xl border border-gray-50">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-3xl md:text-4xl font-black text-text-dark mb-1">{current.period.split(' - ')[0]}</h3>
                <h4 className={`text-lg font-bold mb-1 ${current.textColor}`}>{current.title}</h4>
                <p className="text-xs text-gray-400 font-bold mb-3">{current.subtitle}</p>
                <p className="text-sm text-text-main font-medium leading-relaxed mb-6">
                  {current.desc}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-400">{current.period}</span>
                  <button 
                    onClick={next} 
                    className="w-10 h-10 rounded-full bg-pastel-pink text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md shadow-pastel-pink/30"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Horizontal Timeline Track */}
          <div className="mt-12 relative max-w-4xl mx-auto">
            {/* Track Line */}
            <div className="absolute left-0 right-0 h-1 bg-gray-100 top-3 -translate-y-1/2 rounded-full z-0"></div>
            
            {/* Track Progress */}
            <div 
              className="absolute left-0 h-1 bg-pastel-pink top-3 -translate-y-1/2 rounded-full z-0 transition-all duration-500"
              style={{ width: `${(currentIndex / (journey.length - 1)) * 100}%` }}
            ></div>

            <div className="flex justify-between relative z-10">
              {journey.map((item, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)} 
                  className="flex flex-col items-center gap-3 group outline-none"
                >
                  <div className={`w-6 h-6 rounded-full border-4 flex items-center justify-center transition-colors duration-300 ${
                    idx <= currentIndex ? 'border-pastel-pink bg-white' : 'border-gray-200 bg-white group-hover:border-pastel-pink/50'
                  }`}>
                    {idx === currentIndex && <div className="w-2 h-2 bg-pastel-pink rounded-full" />}
                  </div>
                  <span className={`text-xs md:text-sm font-bold transition-colors ${
                    idx === currentIndex ? 'text-pastel-pink' : 'text-gray-400 group-hover:text-gray-600'
                  }`}>
                    {item.period.split(' - ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleries = [
    {
      id: 0,
      title: "家乡记忆",
      subtitle: "Hometown",
      descLeft: "来自东北的凛冽与温柔。",
      descRight: "吉林，是我出发的地方，也是永远的底色。",
      photos: [
        { url: `${import.meta.env.BASE_URL}家乡1.jpg`, caption: "银装素裹的童话世界" },
        { url: `${import.meta.env.BASE_URL}家乡2.JPG`, caption: "属于东北的限定浪漫" },
        { url: `${import.meta.env.BASE_URL}家乡.jpg`, caption: "静谧的故乡" },
        { url: `${import.meta.env.BASE_URL}家乡-早市.jpg`, caption: "满是烟火气的早市" },
        { url: `${import.meta.env.BASE_URL}家乡-更多的天空.jpg`, caption: "抬头就是治愈系的蓝天" }
      ]
    },
    {
      id: 1,
      title: "步履不停",
      subtitle: "Travel",
      descLeft: "感受不同城市的呼吸。",
      descRight: "在多元文化中收获感动，用脚步丈量世界。",
      photos: [
        { url: `${import.meta.env.BASE_URL}泰国.JPG`, caption: "泰国的热烈海风" },
        { url: `${import.meta.env.BASE_URL}韩国.jpg`, caption: "韩国街角的午后咖啡" },
        { url: `${import.meta.env.BASE_URL}香港.jpg`, caption: "维港摇曳的夜风" },
        { url: `${import.meta.env.BASE_URL}上海迪士尼.JPG`, caption: "逃避现实的童话世界" },
        { url: `${import.meta.env.BASE_URL}厦门.jpg`, caption: "厦门的晚风很温柔" },
        { url: `${import.meta.env.BASE_URL}福州.JPG`, caption: "福州街头的慢时光" },
        { url: `${import.meta.env.BASE_URL}长沙.jpg`, caption: "长沙的夜，热烈而喧嚣" }
      ]
    },
    {
      id: 2,
      title: "精神角落",
      subtitle: "Hobbies",
      descLeft: "享受纯粹的独处时光。",
      descRight: "在智力博弈与挥洒汗水中，找到生活的平衡点。",
      photos: [
        { url: `${import.meta.env.BASE_URL}生活-每周一束花.jpg`, caption: "每周一束花的小确幸" },
        { url: `${import.meta.env.BASE_URL}生活-喜欢天空.jpg`, caption: "永远看不腻的治愈天空" },
        { url: `${import.meta.env.BASE_URL}音乐爱好.jpg`, caption: "沉浸在我的专属频段" },
        { url: `${import.meta.env.BASE_URL}兴趣爱好-德州.jpg`, caption: "德扑桌上的心理博弈" },
        { url: `${import.meta.env.BASE_URL}爱好-乒乓比赛.jpg`, caption: "乒乓赛场上的专注瞬间" }
      ]
    },
    {
      id: 3,
      title: "声浪与狂欢",
      subtitle: "Live & Festival",
      descLeft: "在音乐里尽情释放。",
      descRight: "那些跟着节奏跳跃的夜晚，是平淡生活里的高光。",
      photos: [
        { url: `${import.meta.env.BASE_URL}演唱会-许嵩.jpg`, caption: "许嵩带来的青春回忆" },
        { url: `${import.meta.env.BASE_URL}演唱会-billie eillish.jpg`, caption: "Billie Eilish 的独特魅力" },
        { url: `${import.meta.env.BASE_URL}音乐节1.jpg`, caption: "音乐节的夏日狂欢" },
        { url: `${import.meta.env.BASE_URL}音乐节2.jpg`, caption: "跟着音浪一起跳跃" },
        { url: `${import.meta.env.BASE_URL}演唱会-邓紫棋.jpg`, caption: "G.E.M. 的高音震撼全场" },
        { url: `${import.meta.env.BASE_URL}演唱会-aurora.JPG`, caption: "Aurora 的空灵之音" },
        { url: `${import.meta.env.BASE_URL}演唱会-sam smith.JPG`, caption: "Sam Smith 的深情演绎" }
      ]
    }
  ];

  const activeGallery = galleries[activeIndex];

  return (
    <section id="life" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Text & Controls */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 z-20">
            <div className="mb-10 relative z-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl md:text-5xl">📸</span>
                <h2 className="text-4xl md:text-5xl font-black text-text-dark">生活碎片</h2>
              </div>
              <p className="text-lg text-text-main font-medium leading-relaxed">
                如果说工作是构建秩序，那生活就是拥抱随机。我喜欢在不同的城市里漫无目的地游荡，在德扑桌上体验心跳加速，在演唱会的音浪里彻底放空。这些碎片，拼凑出了一个最真实的我。
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
              {galleries.map((gallery, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left px-6 py-4 rounded-2xl transition-all flex-shrink-0 lg:flex-shrink flex items-center justify-between group ${
                    activeIndex === idx
                      ? 'bg-rose-100/60 text-rose-900 shadow-sm'
                      : 'bg-transparent text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <div>
                    <div className={`text-xl font-bold mb-1 ${activeIndex === idx ? 'text-rose-900' : 'text-gray-700 group-hover:text-rose-700'}`}>
                      {gallery.title}
                    </div>
                    <div className="text-sm font-medium opacity-80">{gallery.subtitle}</div>
                  </div>
                  {activeIndex === idx && (
                    <ArrowRight className="w-5 h-5 text-rose-700 hidden lg:block" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Horizontal Scrolling Photos */}
          <div className="w-full lg:w-2/3 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                <div className="mb-8 hidden lg:block">
                  <h3 className="text-2xl font-bold text-rose-900 mb-2">{activeGallery.descLeft}</h3>
                  <p className="text-lg text-rose-800/70">{activeGallery.descRight}</p>
                </div>

                {/* Masonry Layout Container */}
                <div className="columns-2 md:columns-3 gap-4 w-full pb-8">
                  {activeGallery.photos.map((photo, idx) => (
                    <div key={idx} className="relative mb-6 break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer bg-white p-3 pb-4 border border-gray-100 transform hover:-translate-y-1">
                      <div className="rounded-lg overflow-hidden mb-3 relative">
                        <img
                          src={photo.url}
                          alt={photo.caption || "Gallery"}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      {photo.caption && (
                        <div className="px-1 flex items-start gap-2">
                          <span className="text-rose-400 mt-0.5">✨</span>
                          <p className="text-gray-700 font-medium text-sm leading-snug">{photo.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const FloatingAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hi，我是昱彤的专属 AI 助手！想了解她的产品经验，还是想问问她最近看了什么恐怖片？随便问～" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const presetQuestions = [
    "你在 eSignGlobal 负责什么？",
    "为什么喜欢看恐怖片？",
    "你的英语是怎么练的？"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, isOpen]);

  const handleAsk = async (question: string) => {
    if (!question.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: question }]);
    setInput("");
    setLoading(true);
    
    try {
      let responseText = "哎呀，这是超出我当前语料库的“超纲”问题啦！你不如直接在下方添加微信或发邮件联系昱彤本人哦～";
      if (question.includes("负责什么") || question.includes("eSignGlobal")) {
        responseText = "我负责 eSignGlobal 的核心用户链路与生态集成，致力于用技术让信任跨越国界，连接全球用户！";
      } else if (question.includes("恐怖片") || question.includes("电影")) {
        responseText = "我可是恐怖片十级学者哦！特别喜欢研究恐怖美学和极致的人性刻画，生活需要一点心跳的刺激。";
      } else if (question.includes("英语") || question.includes("英文")) {
        responseText = "多沟通、多说最重要！我当时雅思考了7.5，现在工作全英交流毫无障碍。秘诀就是永远不要害怕犯错，把语言当成打破边界的工具就好啦！";
      } else if (question.includes("你好") || question.includes("hi")) {
        responseText = "你好呀！很高兴认识你 ヾ(≧▽≦*)o";
      }

      await new Promise(resolve => setTimeout(resolve, 800)); // 模拟请求延迟
      
      setMessages(prev => [...prev, { role: 'ai', text: responseText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "网络好像有点小情绪，请稍后再试哦。" }]);
    } finally {
      setLoading(false);
    }
  };

  // TODO: 替换为你自己的卡通头像 URL
  const avatarUrl = `${import.meta.env.BASE_URL}我本人_卡通.png`;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="bg-white w-[320px] md:w-[360px] h-[480px] rounded-[2rem] soft-shadow-hover border border-gray-100 mb-4 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-pastel-pink/10 p-4 flex justify-between items-center border-b border-pastel-pink/20">
              <div className="flex items-center gap-3">
                <img src={avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full bg-white p-0.5 shadow-sm" />
                <div>
                  <h3 className="font-black text-text-dark text-sm">Yutong's AI</h3>
                  <p className="text-[10px] text-pink-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 随时在线
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/50 text-gray-500 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar bg-gray-50/50" ref={scrollRef}>
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed font-medium ${
                    msg.role === 'user' 
                      ? 'bg-pastel-pink text-white rounded-tr-sm shadow-sm' 
                      : 'bg-white text-text-dark rounded-tl-sm border border-gray-100 shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-tl-sm flex gap-2 items-center shadow-sm">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-pastel-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-pastel-yellow rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex flex-wrap gap-2 mb-3">
                {presetQuestions.map((q, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleAsk(q)}
                    disabled={loading}
                    className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-full text-[11px] text-text-main font-bold transition-colors disabled:opacity-50 whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>
              
              <div className="flex gap-2 relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAsk(input)}
                  placeholder="问点什么吧..." 
                  className="flex-1 h-12 bg-gray-50 rounded-xl border border-gray-100 pl-4 pr-12 outline-none focus:border-pastel-pink/50 focus:bg-white transition-all text-sm text-text-dark font-medium"
                />
                <button 
                  onClick={() => handleAsk(input)}
                  disabled={loading || !input.trim()}
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-9 bg-pastel-pink rounded-lg flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="w-3.5 h-3.5 text-white ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-white soft-shadow-hover border border-gray-50 flex items-center justify-center relative group z-50"
      >
        <img src={avatarUrl} alt="AI Avatar" className="w-14 h-14 rounded-full p-0.5" />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold animate-bounce">1</span>
        )}
      </motion.button>
    </div>
  );
};

const Guestbook = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [notes, setNotes] = useState([
    { id: 1, text: "今天天气真好，适合出门散步！", color: "bg-pastel-yellow/60", rotation: -2, x: "10%", y: "10%" },
    { id: 2, text: "最近在单曲循环《Yellow》，推荐给你~", color: "bg-pastel-pink/60", rotation: 3, x: "50%", y: "5%" },
    { id: 3, text: "刚看完一部超棒的悬疑片，感觉你会喜欢！", color: "bg-pastel-blue/60", rotation: -6, x: "70%", y: "15%" },
    { id: 4, text: "世界是个巨大的草台班子，别太内耗啦！", color: "bg-pastel-green/60", rotation: 2, x: "20%", y: "50%" },
  ]);
  const [newNote, setNewNote] = useState("");

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    
    const colors = ["bg-pastel-yellow/80", "bg-pastel-pink/80", "bg-pastel-blue/80", "bg-pastel-green/80", "bg-purple-200/80"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotation = Math.floor(Math.random() * 10) - 5;
    const randomX = `${Math.floor(Math.random() * 60) + 10}%`;
    const randomY = `${Math.floor(Math.random() * 50) + 10}%`;
    
    setNotes([...notes, { id: Date.now(), text: newNote, color: randomColor, rotation: randomRotation, x: randomX, y: randomY }]);
    setNewNote("");
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden border-t border-gray-100">
      <RevealOnScroll>
        <div className="mb-12 relative z-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl md:text-5xl">📮</span>
            <h2 className="text-4xl md:text-5xl font-black text-text-dark">交换生活碎片</h2>
          </div>
          <p className="text-lg text-text-main font-medium max-w-2xl">嗨，同频的陌生人。今天有什么开心的事，或者最近单曲循环了哪首歌？留下一块你的碎片吧。</p>
        </div>

        <div className="relative w-full min-h-[400px] bg-rose-50/30 rounded-[3rem] border-2 border-dashed border-rose-200 p-8">
          {/* Notes Area */}
          <div ref={containerRef} className="absolute inset-0 overflow-hidden rounded-[3rem] pointer-events-none">
            <AnimatePresence>
              {notes.map((note) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, scale: 0.5, rotate: note.rotation }}
                  animate={{ opacity: 1, scale: 1, rotate: note.rotation }}
                  whileDrag={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                  transition={{ type: "spring" }}
                  className={`p-4 md:p-5 shadow-sm hover:shadow-md rounded-lg w-[160px] md:w-[200px] pointer-events-auto cursor-grab active:cursor-grabbing ${note.color} border border-white/50 backdrop-blur-sm absolute`}
                  style={{ left: note.x, top: note.y }}
                  drag
                  dragConstraints={containerRef}
                  dragElastic={0.1}
                  dragMomentum={false}
                >
                  <div className="w-full flex justify-center mb-2">
                    <div className="w-6 h-1.5 bg-white/60 rounded-full"></div>
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-800 leading-relaxed">{note.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Input Form */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-30">
            <form onSubmit={addNote} className="flex gap-2 bg-white p-2 rounded-full shadow-xl border border-gray-100">
              <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="写下你的碎片..."
                className="flex-1 px-4 py-2 outline-none bg-transparent font-medium text-gray-700 text-sm"
                maxLength={50}
              />
              <button 
                type="submit"
                disabled={!newNote.trim()}
                className="bg-rose-400 hover:bg-rose-500 disabled:bg-gray-300 text-white px-6 py-2 rounded-full font-bold transition-colors text-sm"
              >
                贴上
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const ContactCTA = () => (
  <section id="contact" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
    <RevealOnScroll>
      <div className="bg-pastel-pink rounded-[3rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">🎈 随时找我玩</h2>
          <p className="text-lg text-white/90 font-medium mb-10">
            无论是探讨出海产品、交流跨文化经验，还是分享最近的旅行见闻与生活趣事，期待与你建立连接。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="mailto:zyt6586@gmail.com" className="flex items-center justify-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <Mail className="w-5 h-5" />
              zyt6586@gmail.com
            </a>
            <a href="tel:15584510999" className="flex items-center justify-center gap-3 bg-white/20 text-white border border-white/50 px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all">
              <MessageCircle className="w-5 h-5" />
              155 8451 0999
            </a>
          </div>
        </div>
        

        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
      </div>
    </RevealOnScroll>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-pastel-pink selection:text-white font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <JourneyTimeline />
        <PhotoGallery />
        <Guestbook />
        <ContactCTA />
      </main>

      <FloatingAIAssistant />

      <footer className="text-center py-8 text-sm font-bold text-gray-400 border-t border-gray-100 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-4">
          <p>© 2026 Zhou Yutong. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Hangzhou, China
          </div>
        </div>
      </footer>
    </div>
  );
}
