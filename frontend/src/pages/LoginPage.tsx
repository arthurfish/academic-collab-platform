import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC<{ setAuthenticated: (authenticated: boolean) => void }> = ({ setAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        //if (email === 'user@example.com' && password === 'password') {
        setAuthenticated(true);
        navigate('/personal');
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
                <div className="w-full max-w-md">
                    <div className="flex items-center mb-8">
                        <svg className="h-8 w-8 text-blue-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 4h16v16H4z"/>
                        </svg>
                        <span className="text-2xl font-bold text-gray-800">学术合作推荐系统</span>
                    </div>
                    <h2 className="text-xs uppercase text-gray-500 mb-2">开始您的学术之旅！</h2>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">登录网站</h1>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="text-sm text-gray-600 block mb-1">请输入您的电子邮件地址</label>
                            <input
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm text-gray-600 block mb-1">请输入您的密码</label>
                            <input
                                id="password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                            onClick={handleLogin}
                        >
                            登录
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500 mb-4">or sign up with</p>
                        <div className="flex justify-center space-x-4">
                            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                                <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </button>
                            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                                </svg>
                            </button>
                            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.623 3.872 10.328 9.092 11.63-.056-.162-.092-.35-.092-.583v-2.051c-1.791.415-2.18-.621-2.18-.621-.292-.744-.705-.941-.705-.941-.577-.396.044-.387.044-.387.637.044.953.654.953.654.562.963 1.474.684 1.835.521.056-.411.22-.684.4-.843-1.408-.16-2.892-.704-2.892-3.132 0-.691.248-1.257.646-1.7-.065-.158-.28-.79.06-1.65 0 0 .527-.168 1.725.644.5-.139 1.037-.208 1.57-.21.531.002 1.069.071 1.57.21 1.197-.812 1.723-.644 1.723-.644.342.86.127 1.492.063 1.65.4.443.646 1.009.646 1.7 0 2.436-1.487 2.97-2.9 3.126.222.191.42.569.42 1.146v2.551c0 .233-.037.422-.095.585C20.13 22.33 24 17.624 24 12c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-sm text-gray-500">
                        没有账户？ <a href="#" className="text-blue-500 hover:underline">注册</a>
                    </p>
                </div>
            </div>
            <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-blue-400 to-purple-500">
                {/* You can add an image or design element here */}
            </div>
        </div>
    );
};

export default LoginPage;