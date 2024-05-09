import React from 'react';
interface Props{
    width?:number;
    height?:number;
}
const IPhone = ({height,width}:Props) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={width || 32} height={height||32} viewBox="0 0 32 32" id="Phone">
                <path
                    d="M13.216 8.064c-.382-4.394-4.966-6.55-5.16-6.638a.974.974 0 0 0-.582-.078c-5.292.878-6.088 3.958-6.12 4.086a.99.99 0 0 0 .02.54c6.312 19.584 19.43 23.214 23.742 24.408.332.092.606.166.814.234a.99.99 0 0 0 .722-.042c.132-.06 3.248-1.528 4.01-6.316a.997.997 0 0 0-.096-.612c-.068-.132-1.698-3.234-6.218-4.33a.977.977 0 0 0-.884.21c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146-.07-.57 1.236-2.572 2.738-4.2a.998.998 0 0 0 .26-.766z"
                    fill="#ffffff" className="color000000 svgShape"></path>
            </svg>
        </div>
    );
};

export default IPhone;