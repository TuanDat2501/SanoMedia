import React from 'react';
interface Props{
    width?:number | string;
    height?:number | string;
}
const IGraduate = ({height,width}:Props) => {
    return (
        <div>
            <svg fill="#000000" height={height||'25px'} width={width || '25px'} version="1.1" id="Capa_1"
                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 290.152 290.152" xmlSpace="preserve" stroke="#000000" strokeWidth="3.771976"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path colorRendering="auto" imageRendering="auto" shapeRendering="auto"
                                                   colorInterpolation="sRGB"
                                                   d="M145.311,59.329 c-0.645-0.028-1.289,0.07-1.896,0.287L3.455,109.733c-4.586,1.49-4.614,7.968-0.041,9.498l16.682,5.957v35.221 c-5.797,2.081-10,7.64-10,14.113s4.203,12.032,10,14.113v15.887c-0.096,6.762,10.096,6.762,10,0v-15.887 c5.797-2.081,10-7.64,10-14.113c0-6.473-4.203-12.032-10-14.113v-31.648l30,10.715v74.215c-0.417,2.531,1.148,4.966,3.623,5.639 c53.462,15.313,114.222,15.362,162.885-0.039c2.44-0.728,3.943-3.172,3.492-5.678v-74.137l56.682-20.244 c4.627-1.591,4.451-8.194-0.254-9.537v-0.01L146.776,59.612c-0.472-0.169-0.966-0.265-1.467-0.287L145.311,59.329z M145.096,69.634 l125.414,44.791l-125.414,44.789L19.682,114.425L145.096,69.634z M145.096,109.522c-5.523,0-10,2.239-10,5c0,2.761,4.477,5,10,5 s10-2.239,10-5C155.096,111.761,150.619,109.522,145.096,109.522z M70.096,143.046l73.318,26.185c1.087,0.388,2.276,0.388,3.363,0 l73.318-26.185v67.771c-44.717,13.27-100.63,13.287-150-0.102L70.096,143.046z M25.096,169.522c2.821,0,5,2.179,5,5 c0,2.821-2.179,5-5,5c-2.821,0-5-2.179-5-5C20.096,171.702,22.275,169.522,25.096,169.522z"></path> </g></svg>
        </div>
    );
};

export default IGraduate;