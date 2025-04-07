import React from 'react';
import $ from 'jquery';

export function Settings(props) {
    const wallpapers = {
        "wall-custom": "./images/wallpapers/wall-custom.jpg",
        "wall-1": "./images/wallpapers/wall-1.webp",
        "wall-2": "./images/wallpapers/wall-2.webp",
        "wall-3": "./images/wallpapers/wall-3.webp",
        "wall-4": "./images/wallpapers/wall-4.webp",
        "wall-5": "./images/wallpapers/wall-5.webp",
        "wall-6": "./images/wallpapers/wall-6.webp",
        "wall-7": "./images/wallpapers/wall-7.webp",
        "wall-8": "./images/wallpapers/wall-8.webp",
    };

    let changeBackgroundImage = (e) => {
        props.changeBackgroundImage($(e.target).data("path"));
    }

    return (
        <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey"}>
            <div className="p-4">
                <h1 className="text-white text-2xl font-bold mb-4">Paramètres d'affichage</h1>
                <p className="text-gray-300 mb-4">Choisissez votre fond d'écran préféré</p>
            </div>
            <div className="md:w-2/3 w-5/6 h-1/3 m-auto my-4 rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: `url(${wallpapers[props.currBgImgName]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            </div>
            <div className="p-2 text-center text-white font-medium">
                {props.currBgImgName === 'wall-custom' ? 'Fond d\'écran personnalisé' : `Fond d'écran ${props.currBgImgName}`}
            </div>
            <div className="flex flex-wrap justify-center items-center border-t border-gray-900 p-4">
                {
                    Object.keys(wallpapers).map((name, index) => {
                        return (
                            <div 
                                key={index} 
                                tabIndex="1" 
                                onFocus={changeBackgroundImage} 
                                data-path={name} 
                                className={((name === props.currBgImgName) ? " border-yellow-500 shadow-lg transform scale-105" : " border-transparent hover:border-yellow-700 hover:shadow-md") + " md:px-24 md:py-16 md:m-4 m-2 px-12 py-8 outline-none border-4 border-opacity-80 rounded-lg transition-all duration-200 cursor-pointer"} 
                                style={{ backgroundImage: `url(${wallpapers[name]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}
                            >
                                {name === 'wall-custom' && (
                                    <div className="bg-black bg-opacity-50 text-white text-xs p-1 rounded absolute bottom-0 left-0 m-1">Personnalisé</div>
                                )}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Settings


export const displaySettings = () => {
    return <Settings> </Settings>;
}
