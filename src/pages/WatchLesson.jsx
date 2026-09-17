import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const WatchLesson = ({ language = 'KH', darkMode = false }) => {
    const { id } = useParams();

    // មុខងារទាញយក Thumbnail ពី YouTube Embed URL
    const getYouTubeThumbnail = (url) => {
        const match = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
        const videoId = match ? match[1] : null;
        return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : '';
    };

    // ទិន្នន័យបទចម្រៀងខ្មែរ
    const lessonData = {
        1: {
            titleKH: "បទចម្រៀងពេញនិយម (Khmer Top Hits)",
            titleEN: "Popular Khmer Hits",
            descKH: "បណ្ដុំបទចម្រៀងខ្មែរដែលពេញនិយមខ្លាំង ជាមួយនឹងគុណភាពសំឡេង និងរូបភាពច្បាស់ត្រជាក់ភ្នែក។",
            descEN: "A collection of top trending Cambodian songs and official music videos.",
            categoryKH: "ចម្រៀងពេញនិយម",
            categoryEN: "Top Hits",
            currentEmbed: "https://www.youtube.com/embed/rvje5oblrLw",
            playlist: [
                { id: 101, title: "Time To Rise - VannDa ft. Master Kong Nay", duration: "05:40", url: "https://www.youtube.com/embed/rvje5oblrLw" },
                { id: 102, title: "សង្រ្កាន្តស្គាល់ស្នេហ៍ - VannDa", duration: "04:53", url: "https://www.youtube.com/embed/Cpo3DmbdCxs" },
                { id: 103, title: "MOONLIGHT - GMENGZ ft JADY", duration: "03:28", url: "https://www.youtube.com/embed/yMINha31-uw" },
                { id: 104, title: "ភ្ជាប់និស្ស័យ (NISAI) - OLICA ft. KZ", duration: "04:26", url: "https://www.youtube.com/embed/Mn_qLC7_ueA" }
            ]
        },
        2: {
            titleKH: "បទមនោសញ្ចេតនា និងស្នេហា",
            titleEN: "Romantic & Melodic Khmer Songs",
            descKH: "បទចម្រៀងបែបមនោសញ្ចេតនា ផ្អែមល្ហែម និងចាក់ដោតអារម្មណ៍។",
            descEN: "Emotional, heart-touching and romantic Cambodian hit songs.",
            categoryKH: "មនោសញ្ចេតនា",
            categoryEN: "Romantic",
            currentEmbed: "https://www.youtube.com/embed/eD5ksjR-NPk",
            playlist: [
                { id: 201, title: "គេជាអ្នកណា - នាង ដាវីន (RHM)", duration: "04:35", url: "https://www.youtube.com/embed/eD5ksjR-NPk" },
                { id: 202, title: "ជួបជុំ (BACK HOME) - VannDa", duration: "04:10", url: "https://www.youtube.com/embed/dryShmzXrgo" },
                { id: 203, title: "BLUE STORY - VannDa", duration: "04:05", url: "https://www.youtube.com/embed/0jSgcE-sxeo" }
            ]
        }
    };

    const currentLesson = lessonData[id] || lessonData[1];
    const [activeVideo, setActiveVideo] = useState(currentLesson.playlist[0]?.url || currentLesson.currentEmbed);

    useEffect(() => {
        setActiveVideo(currentLesson.playlist[0]?.url || currentLesson.currentEmbed);
    }, [id]);

    const activeItem = currentLesson.playlist.find(item => item.url === activeVideo) || currentLesson.playlist[0];

    return (
        <div className={`min-h-screen py-8 px-4 sm:px-6 lg:px-10 transition-colors duration-300 selection:bg-primary selection:text-white dark:bg-slate-950 dark:text-slate-100 ${
            darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
        }`}>
            <div className="max-w-7xl mx-auto space-y-6">
                
                {/* Top Navigation & Info */}
                <div className="flex items-center justify-between">
                    <Link 
                        to="/" 
                        className={`group inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all shadow-xs border hover:border-primary dark:bg-slate-800/80 dark:border-slate-700 dark:text-slate-300 dark:hover:text-primary ${
                            darkMode 
                                ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-primary' 
                                : 'bg-white border-slate-200 text-slate-600 hover:text-primary hover:bg-slate-50'
                        }`}
                    >
                        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>{language === 'EN' ? "Back to Playlist" : "ត្រឡប់ទៅបញ្ជីចម្រៀង"}</span>
                    </Link>

                    <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                            {language === 'EN' ? currentLesson.categoryEN : currentLesson.categoryKH}
                        </span>
                        <span className="hidden sm:inline-block opacity-40">•</span>
                        <span className={`hidden sm:inline-block px-2.5 py-1 rounded-full border dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 ${
                            darkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-600'
                        }`}>
                            {currentLesson.playlist.length} {language === 'EN' ? "Tracks" : "បទចម្រៀង"}
                        </span>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Player & Info */}
                    <div className="lg:col-span-8 space-y-5">
                        
                        <div className="relative pt-[56.25%] w-full rounded-2xl overflow-hidden shadow-xl bg-black border border-slate-200 dark:border-slate-800">
                            <iframe 
                                src={`${activeVideo}?autoplay=1&rel=0`} 
                                title="Khmer Music Video Player"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Title & Description */}
                        <div className={`p-6 sm:p-7 rounded-2xl border shadow-xs space-y-4 transition-colors duration-300 dark:bg-slate-900/80 dark:border-slate-800 ${
                            darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/80'
                        }`}>
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 bg-primary/10 px-2.5 py-1 rounded-lg">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    {language === 'EN' ? "Now Playing" : "កំពុងចាក់ផ្សាយ"}
                                </span>
                                <span className={`text-xs font-medium px-2.5 py-1 rounded-md dark:bg-slate-800 dark:text-slate-400 ${
                                    darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                                }`}>
                                    {activeItem?.duration}
                                </span>
                            </div>

                            <h1 className={`text-xl sm:text-2xl font-bold tracking-tight dark:text-white ${
                                darkMode ? 'text-white' : 'text-slate-900'
                            }`}>
                                {activeItem?.title || (language === 'EN' ? currentLesson.titleEN : currentLesson.titleKH)}
                            </h1>

                            <div className={`h-px dark:bg-slate-800 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}></div>

                            <div>
                                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                                    {language === 'EN' ? "Description" : "ការពិពណ៌នា"}
                                </h4>
                                <p className={`text-sm leading-relaxed dark:text-slate-300 ${
                                    darkMode ? 'text-slate-300' : 'text-slate-600'
                                }`}>
                                    {language === 'EN' ? currentLesson.descEN : currentLesson.descKH}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Playlist Panel */}
                    <div className={`lg:col-span-4 rounded-2xl border shadow-xs overflow-hidden flex flex-col transition-colors duration-300 dark:bg-slate-900/80 dark:border-slate-800 ${
                        darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/80'
                    }`}>
                        
                        <div className={`p-4 sm:p-5 border-b flex items-center justify-between dark:border-slate-800 dark:bg-slate-800/40 ${
                            darkMode ? 'border-slate-800 bg-slate-800/40' : 'border-slate-100 bg-slate-50/70'
                        }`}>
                            <div>
                                <h3 className={`font-bold text-sm tracking-wide dark:text-white ${
                                    darkMode ? 'text-white' : 'text-slate-900'
                                }`}>
                                    {language === 'EN' ? "Music Playlist" : "បញ្ជីបទចម្រៀង"}
                                </h3>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    {currentLesson.playlist.length} {language === 'EN' ? "Songs" : "បទចម្រៀង"}
                                </p>
                            </div>
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-lg border dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 ${
                                darkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-white text-slate-700 border-slate-200 shadow-2xs'
                            }`}>
                                {language === 'EN' ? currentLesson.titleEN : currentLesson.titleKH}
                            </span>
                        </div>

                        <div className="p-3 space-y-2.5 max-h-[550px] overflow-y-auto">
                            {currentLesson.playlist.map((vid, index) => {
                                const isPlaying = activeVideo === vid.url;
                                const thumbnailUrl = getYouTubeThumbnail(vid.url);

                                return (
                                    <div 
                                        key={vid.id || index}
                                        onClick={() => setActiveVideo(vid.url)}
                                        className={`group relative flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-all duration-200 border ${
                                            isPlaying 
                                                ? (darkMode 
                                                    ? 'bg-primary/15 border-primary text-white shadow-xs' 
                                                    : 'bg-primary/10 border-primary shadow-xs') 
                                                : (darkMode 
                                                    ? 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 text-slate-300' 
                                                    : 'bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200 text-slate-700')
                                        }`}
                                    >
                                        <div className="relative w-28 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-900">
                                            {thumbnailUrl ? (
                                                <img 
                                                    src={thumbnailUrl} 
                                                    alt={vid.title} 
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 text-xs">
                                                    No Image
                                                </div>
                                            )}

                                            <span className="absolute bottom-1 right-1 bg-black/80 text-[10px] font-semibold text-white px-1.5 py-0.5 rounded">
                                                {vid.duration}
                                            </span>

                                            {isPlaying && (
                                                <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                                                    <div className="flex items-end gap-0.5 h-3.5 bg-black/50 p-1.5 rounded-full">
                                                        <span className="w-0.5 h-full bg-white animate-[bounce_0.8s_infinite_100ms]"></span>
                                                        <span className="w-0.5 h-full bg-white animate-[bounce_0.8s_infinite_300ms]"></span>
                                                        <span className="w-0.5 h-full bg-white animate-[bounce_0.8s_infinite_200ms]"></span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0 pr-1">
                                            <span className="text-[10px] font-semibold text-slate-400 block mb-0.5">
                                                បទទី {index + 1}
                                            </span>
                                            <p className={`text-xs font-medium leading-snug line-clamp-2 transition-colors ${
                                                isPlaying 
                                                    ? 'text-primary font-bold' 
                                                    : (darkMode ? 'text-slate-200 group-hover:text-primary' : 'text-slate-800 group-hover:text-primary')
                                            }`}>
                                                {vid.title}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WatchLesson;