import React, { useState } from 'react';
import axios from 'axios';

type Result = {
    title: string,
    year: string,
    authors: string[],
}

const ProfessorSearchPage: React.FC = () => {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState<Result[]>([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/professor-search?keyword=${keyword}`);
            setResults(response.data);
        } catch (error) {
            console.error('搜索教授时出错', error);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* SVG 背景 */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4facfe" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4158D0" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#C850C0" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grad1)" />
                <circle cx="5%" cy="5%" r="10%" fill="url(#grad2)" />
                <circle cx="95%" cy="95%" r="15%" fill="url(#grad2)" />
                <path d="M0,50 Q50,0 100,50 T200,50" stroke="url(#grad2)" strokeWidth="0.5" fill="none" />
                <path d="M0,80 Q50,30 100,80 T200,80" stroke="url(#grad2)" strokeWidth="0.5" fill="none" />
            </svg>

            {/* 内容区域 */}
            <div className="relative z-10 max-w-6xl mx-auto p-8">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">教授搜索系统</h1>
                <div className="mb-12 flex">
                    <input
                        className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-80"
                        type="text"
                        placeholder="输入关键词搜索教授"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button
                        className="px-6 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-300"
                        onClick={handleSearch}
                    >
                        搜索
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {results.map((result, index) => (
                        <div key={index} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{result.title}</h2>
                            <p className="text-gray-600 mb-4">发表年份: {result.year}</p>
                            <div>
                                <h3 className="font-semibold text-gray-700 mb-2">作者:</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    {result.authors.map((author, authorIndex) => (
                                        <li key={authorIndex}>{author}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                {results.length > 0 && (
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 italic">
                            "使用这个应用，我们可以轻松搜索教授、追踪他们的研究，并在一个平台上管理所有学术信息。"
                        </p>
                        <div className="mt-4 flex items-center justify-center">
                            <img src="https://via.placeholder.com/40" alt="用户头像" className="rounded-full mr-3" />
                        </div>
                    </div>
                )}
                {results.length === 0 && keyword && (
                    <div className="text-center text-gray-600 mt-8">
                        <p>没有找到相关结果，请尝试其他关键词。</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfessorSearchPage;