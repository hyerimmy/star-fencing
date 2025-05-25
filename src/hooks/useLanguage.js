import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ko');

  const translations = {
    ko: {
      // Navigation
      home: '홈',
      about: '아카데미 소개',
      fencing: '펜싱 소개',
      instructors: '강사진',
      programs: '수업 프로그램',
      contact: '연락처',

      // Hero Section
      heroTitle: '어제보다 멋진 오늘',
      heroSubtitle: '스타펜싱 아카데미',
      heroDescription: '쉽고 체계적인 지도를 통해 누구나 펜싱을 즐기다!',
      heroButton: '수업 문의하기',

      // About Section
      aboutTitle: '아카데미 소개',
      aboutDescription: '차별화된 펜싱 수업을 통해 행복한 오늘을 경험해보세요!',
      address: '서울 양천구 오목로 192 대청빌딩 3F',
      phone: '02-2088-5358',
      facilities: '주차 가능 | 락커룸, 상담라운지, 내부화장실',
      weekdayHours: '평일: 14:00 - 22:00 (매주 월 정기휴무)',
      weekendHours: '주말: 10:30 - 18:30',

      // Fencing Intro
      fencingTitle: '펜싱 소개',
      fencingSubtitle: '사브르 전문 펜싱 학원',
      fencingDescription: '펜싱은 빠른 판단력과 전략적 사고를 기르는 스포츠입니다.',

      // Instructors
      instructorsTitle: '강사진',
      headInstructor: '대표원장',
      instructor: '코치',
      hwangProfile: '홍익사범대학교 부속고등학교 졸업\n한국체육대학교 체육교육과 졸업\n2012년 런던올림픽 금메달 오은석·구본길 지도\n세계청소년 및 유소년 메달리스트 다수배출',

      // Programs
      programsTitle: '수업 프로그램',
      elementary: '초등반',
      middleHigh: '중고등반',
      adult: '성인반',
      hobby: '취미반',
      athlete: '선수반',

      // Footer
      footerDescription: '스타펜싱 아카데미에서 펜싱의 즐거움을 경험해보세요.',
    },
    en: {
      // Navigation
      home: 'Home',
      about: 'About',
      fencing: 'Fencing',
      instructors: 'Instructors',
      programs: 'Programs',
      contact: 'Contact',

      // Hero Section
      heroTitle: 'Better Today Than Yesterday',
      heroSubtitle: 'Star Fencing Academy',
      heroDescription: 'Experience fencing through easy and systematic guidance!',
      heroButton: 'Inquire About Classes',

      // About Section
      aboutTitle: 'About Academy',
      aboutDescription: 'Experience a happy today through differentiated fencing classes!',
      address: '3F, Daecheong Building, 192 Omok-ro, Yangcheon-gu, Seoul',
      phone: '02-2088-5358',
      facilities: 'Parking Available | Locker Room, Consultation Lounge, Indoor Restroom',
      weekdayHours: 'Weekdays: 14:00 - 22:00 (Closed every Monday)',
      weekendHours: 'Weekends: 10:30 - 18:30',

      // Fencing Intro
      fencingTitle: 'About Fencing',
      fencingSubtitle: 'Sabre Specialized Fencing Academy',
      fencingDescription: 'Fencing is a sport that develops quick decision-making and strategic thinking.',

      // Instructors
      instructorsTitle: 'Instructors',
      headInstructor: 'Head Instructor',
      instructor: 'Coach',
      hwangProfile: 'Graduated from Hongik Teachers College High School\nGraduated from Korea National Sport University\nCoached 2012 London Olympics Gold Medalists Oh Eun-seok & Gu Bon-gil\nProduced numerous world youth and junior medalists',

      // Programs
      programsTitle: 'Class Programs',
      elementary: 'Elementary',
      middleHigh: 'Middle & High School',
      adult: 'Adult',
      hobby: 'Hobby Class',
      athlete: 'Athlete Class',

      // Footer
      footerDescription: 'Experience the joy of fencing at Star Fencing Academy.',
    },
    zh: {
      // Navigation
      home: '首页',
      about: '学院介绍',
      fencing: '击剑介绍',
      instructors: '教练团队',
      programs: '课程项目',
      contact: '联系方式',

      // Hero Section
      heroTitle: '比昨天更精彩的今天',
      heroSubtitle: '星击剑学院',
      heroDescription: '通过简单系统的指导，让每个人都能享受击剑！',
      heroButton: '课程咨询',

      // About Section
      aboutTitle: '学院介绍',
      aboutDescription: '通过差异化的击剑课程体验快乐的今天！',
      address: '首尔杨川区五木路192号大清大厦3楼',
      phone: '02-2088-5358',
      facilities: '可停车 | 更衣室、咨询休息室、内部洗手间',
      weekdayHours: '平日：14:00 - 22:00（每周一定期休息）',
      weekendHours: '周末：10:30 - 18:30',

      // Fencing Intro
      fencingTitle: '击剑介绍',
      fencingSubtitle: '佩剑专业击剑学院',
      fencingDescription: '击剑是培养快速判断力和战略思维的运动。',

      // Instructors
      instructorsTitle: '教练团队',
      headInstructor: '院长',
      instructor: '教练',
      hwangProfile: '弘益师范大学附属高中毕业\n韩国体育大学体育教育系毕业\n指导2012年伦敦奥运会金牌得主吴恩石、具本吉\n培养出众多世界青少年奖牌获得者',

      // Programs
      programsTitle: '课程项目',
      elementary: '小学班',
      middleHigh: '中高等班',
      adult: '成人班',
      hobby: '兴趣班',
      athlete: '选手班',

      // Footer
      footerDescription: '在星击剑学院体验击剑的乐趣。',
    },
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
