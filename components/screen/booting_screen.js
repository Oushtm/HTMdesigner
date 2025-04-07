import React from 'react'

function BootingScreen(props) {
    return (
        <div style={(props.visible || props.isShutDown ? { zIndex: "100" } : { zIndex: "-20" })} className={(props.visible || props.isShutDown ? " visible opacity-100" : " invisible opacity-0 ") + " absolute duration-500 select-none flex flex-col justify-center items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black"}
        >
            {/* Center content */}
            <div className="flex flex-col items-center">
                {/* Logo with shine effect */}
                <div className="relative mb-12">
                    <div className="w-40 h-40 md:w-48 md:h-48 relative">
                        <img className="w-full h-full object-cover rounded-full border-2 border-white shadow-xl" src="./images/htm.jpg" alt="HTM Logo" />
                        {props.visible && !props.isShutDown && (
                            <div className="absolute inset-0 rounded-full" style={{
                                boxShadow: '0 0 25px 5px rgba(255,255,255,0.2)',
                                animation: 'pulse-shadow 2s infinite'
                            }}></div>
                        )}
                    </div>
                </div>
                
                {/* HTMdesigner text */}
                <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wider mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">HTM</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">designer</span>
                </h1>
                
                {/* Loading animation */}
                {props.visible && !props.isShutDown ? (
                    <div className="flex flex-col items-center">
                        <div className="loader mb-4">
                            <div className="spinner"></div>
                        </div>
                        <div className="text-white text-sm font-light tracking-widest uppercase">
                            Loading
                        </div>
                    </div>
                ) : (
                    <div onClick={props.turnOn} className="cursor-pointer hover:opacity-80 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                            </svg>
                        </div>
                        <div className="text-white text-xs mt-2 text-center">START</div>
                    </div>
                )}
            </div>
            
            {/* Style for the loading spinner */}
            <style jsx>{`
                @keyframes pulse-shadow {
                    0% { box-shadow: 0 0 15px 2px rgba(255,255,255,0.1); }
                    50% { box-shadow: 0 0 25px 5px rgba(255,255,255,0.3); }
                    100% { box-shadow: 0 0 15px 2px rgba(255,255,255,0.1); }
                }
                
                .loader {
                    position: relative;
                    width: 40px;
                    height: 40px;
                }
                
                .spinner {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                
                @keyframes progress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
            `}</style>
        </div>
    )
}

export default BootingScreen
