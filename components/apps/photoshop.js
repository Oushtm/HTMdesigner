import React from 'react'

export default function Photoshop() {
    return (
        <div className="h-full w-full flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="flex items-center justify-between bg-gray-800 p-2">
                <div className="flex items-center">
                    <img src="./themes/Yaru/apps/photoshop.svg" alt="Photoshop Logo" className="h-6 w-6 mr-2" />
                    <span className="text-blue-400 font-semibold">Adobe Photoshop 2025</span>
                </div>
                <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                </div>
            </div>
            <div className="flex flex-1">
                <div className="w-12 bg-gray-800 p-2 flex flex-col items-center space-y-4">
                    <div className="h-6 w-6 bg-blue-500 rounded-sm"></div>
                    <div className="h-6 w-6 bg-gray-700 rounded-sm"></div>
                    <div className="h-6 w-6 bg-gray-700 rounded-sm"></div>
                    <div className="h-6 w-6 bg-gray-700 rounded-sm"></div>
                    <div className="h-6 w-6 bg-gray-700 rounded-sm"></div>
                </div>
                <div className="w-48 bg-gray-800 border-r border-gray-700 p-2">
                    <div className="text-xs text-gray-400 mb-2">TOOLS</div>
                    <div className="space-y-2">
                        <div className="flex items-center p-1 bg-gray-700 rounded">
                            <div className="h-4 w-4 mr-2 bg-gray-600 rounded-sm"></div>
                            <span className="text-xs">Move Tool</span>
                        </div>
                        <div className="flex items-center p-1 rounded">
                            <div className="h-4 w-4 mr-2 bg-gray-600 rounded-sm"></div>
                            <span className="text-xs">Brush Tool</span>
                        </div>
                        <div className="flex items-center p-1 rounded">
                            <div className="h-4 w-4 mr-2 bg-gray-600 rounded-sm"></div>
                            <span className="text-xs">Type Tool</span>
                        </div>
                        <div className="flex items-center p-1 rounded">
                            <div className="h-4 w-4 mr-2 bg-gray-600 rounded-sm"></div>
                            <span className="text-xs">Selection Tool</span>
                        </div>
                        <div className="flex items-center p-1 rounded">
                            <div className="h-4 w-4 mr-2 bg-gray-600 rounded-sm"></div>
                            <span className="text-xs">Crop Tool</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-gray-900 flex flex-col">
                    <div className="h-8 bg-gray-800 border-b border-gray-700 flex items-center px-4">
                        <span className="text-xs text-gray-400">OusHtm_Portfolio.psd @ 100%</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="w-96 h-64 bg-white rounded shadow-lg flex items-center justify-center">
                            <img src="./themes/Yaru/status/ubuntu_white_hex.svg" alt="Ubuntu Logo" className="h-24 opacity-10" />
                            <div className="absolute text-gray-800 font-bold text-2xl">OusHtm Portfolio</div>
                        </div>
                    </div>
                </div>
                <div className="w-48 bg-gray-800 border-l border-gray-700 p-2">
                    <div className="text-xs text-gray-400 mb-2">LAYERS</div>
                    <div className="space-y-2">
                        <div className="flex items-center p-1 bg-gray-700 rounded">
                            <div className="h-4 w-4 mr-2 bg-blue-500 rounded-sm"></div>
                            <span className="text-xs">Background</span>
                        </div>
                        <div className="flex items-center p-1 rounded">
                            <div className="h-4 w-4 mr-2 bg-gray-600 rounded-sm"></div>
                            <span className="text-xs">Text Layer</span>
                        </div>
                        <div className="flex items-center p-1 rounded">
                            <div className="h-4 w-4 mr-2 bg-gray-600 rounded-sm"></div>
                            <span className="text-xs">Logo</span>
                        </div>
                        <div className="flex items-center p-1 rounded">
                            <div className="h-4 w-4 mr-2 bg-gray-600 rounded-sm"></div>
                            <span className="text-xs">UI Elements</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-6 bg-gray-800 border-t border-gray-700 flex items-center justify-between px-4">
                <span className="text-xs text-gray-400">Ready</span>
                <span className="text-xs text-gray-400">100%</span>
            </div>
        </div>
    )
}

export function displayPhotoshop() {
    return <Photoshop />;
}
