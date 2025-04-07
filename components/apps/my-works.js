import React, { useState } from 'react';

// This component displays a simple folder with images
function MyWorks() {
    // Image list - To add your own images:
    // 1. Add your image files to the public/my-works/ folder
    // 2. Update this list with the correct file names
    const [images] = useState([
        {
            id: 1,
            title: 'Design 1',
            filename: '1.png',  // Replace with your actual image filename
            path: './my-works/1.png' // Using SVG placeholder until you add your image
        },
        {
            id: 2,
            title: 'Design 2',
            filename: '2.jpg',
            path: './my-works/2.jpg'
        },
        {
            id: 3,
            title: 'Design 3',
            filename: '3.jpg',
            path: './my-works/3.jpg'
        },
        {
            id: 4,
            title: 'Design 4',
            filename: '4.jpg',
            path: './my-works/4.jpg'
        },
        {
            id: 5,
            title: 'Design 5',
            filename: '5.png',
            path: './my-works/5.png' // Screenshot of a phone screen
        },
        {
            id: 6,
            title: 'Design 6',
            filename: '6.jpg',
            path: './my-works/6.jpg'
        }
    ]);

    // State to track which image is being viewed in full size
    const [viewingImage, setViewingImage] = useState(null);

    // Open image in full view
    const openImage = (image) => {
        setViewingImage(image);
    };

    // Close full view
    const closeImage = () => {
        setViewingImage(null);
    };

    return (
        <div className="h-full w-full flex flex-col bg-ub-cool-grey text-white select-none">
            {/* Header */}
            <div className="flex items-center justify-between bg-ub-warm-grey bg-opacity-20 p-3">
                <div className="flex items-center">
                    <img src="./themes/Yaru/system/folder.png" alt="Folder" className="h-7 w-7 mr-2" />
                    <span className="text-lg font-medium">My Works</span>
                </div>
                <div className="flex space-x-3">
                    <div className="flex items-center bg-ub-cool-grey bg-opacity-70 rounded px-2 py-1">
                        <span className="text-sm">Files: {images.length}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-4">
                {viewingImage ? (
                    // Full image view
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                        <div className="bg-ub-cool-grey rounded-lg max-w-4xl w-full max-h-screen overflow-hidden flex flex-col">
                            <div className="p-2 flex justify-between items-center border-b border-gray-700">
                                <h2 className="text-lg">{viewingImage.filename}</h2>
                                <button 
                                    onClick={closeImage}
                                    className="bg-ub-orange hover:bg-opacity-90 rounded-full h-6 w-6 flex items-center justify-center text-sm"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="p-4 flex-1 flex items-center justify-center bg-gray-900">
                                <img 
                                    src={viewingImage.path} 
                                    alt={viewingImage.title} 
                                    className="max-w-full max-h-[70vh] object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = './themes/Yaru/status/image-missing.svg';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    // Folder view with files
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {images.map((image) => (
                            <div 
                                key={image.id} 
                                className="flex flex-col items-center cursor-pointer hover:bg-ub-grey hover:bg-opacity-20 p-2 rounded-lg"
                                onClick={() => openImage(image)}
                            >
                                <div className="h-24 w-24 mb-2 flex items-center justify-center">
                                    <img 
                                        src={image.path} 
                                        alt={image.title} 
                                        className="max-h-full max-w-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = './themes/Yaru/status/image-missing.svg';
                                        }}
                                    />
                                </div>
                                <span className="text-center text-sm truncate w-full">{image.filename}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="bg-ub-warm-grey bg-opacity-20 p-2 text-xs">
                <span>To add your images: Place them in the public/my-works/ folder and update the file paths in my-works.js</span>
            </div>
        </div>
    );
}

export default MyWorks;

export const displayMyWorks = () => {
    return <MyWorks />;
}
