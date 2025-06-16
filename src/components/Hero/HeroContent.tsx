import React from 'react';

const HeroContent: React.FC = () => {
  const scrollToRecruitment = () => {
    const recruitmentSection = document.getElementById('リクルート');
    if (recruitmentSection) {
      recruitmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
      <div className="max-w-3xl mx-auto animate-fadeIn">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          El&K株式会社
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          エアコン工事のプロフェッショナル。福井県密着で年間約1500件の工事を施工しています。<br />
          未経験の方でも歓迎！！私たちと働きませんか？
        </p>
        <button 
          onClick={scrollToRecruitment}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          リクルート
        </button>
      </div>
    </div>
  );
};

export default HeroContent;