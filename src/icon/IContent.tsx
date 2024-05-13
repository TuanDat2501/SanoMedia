import React from 'react';

interface prop {
    width?: number;
    height?: number;
}

const IContent = ({height, width}: prop) => {
    return (
        <div>
            <svg width={width || 150} height={height||150} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"
                 version="1.1" id="Capa_1" viewBox="-97.9 -97.9 685.30 685.30" xmlSpace="preserve" stroke="#000000" stroke-width="0.004895040000000001">
                <script id="gpm-inject-b"/>

                <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                <g id="SVGRepo_iconCarrier">
                    <g>
                        <path
                            d="M473.98,67.332l-55.682-55.682L406.649,0l-11.648,11.649l-29.784,29.785L70.19,336.461l-2.144,2.144l-1.241,2.766 L21.564,442.295l-17.688,39.46l39.461-17.689l100.923-45.242l2.765-1.24l2.144-2.144L473.98,90.629l11.648-11.648L473.98,67.332z M438.938,102.374L396.01,59.452l-11.643,11.643l42.927,42.922L137.52,403.792L36.597,449.034l41.64-92.889l35.382,35.143 l11.613-11.688l-37.569-37.315L376.865,53.083l29.784-29.785l55.682,55.682L438.938,102.374z"/>
                        <g id="XMLID_712_">
                            <rect x="36.631" y="473.504" width="290" height="16"/>
                        </g>
                        <g id="XMLID_747_">
                            <rect x="349.631" y="473.504" width="23" height="16"/>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default IContent;