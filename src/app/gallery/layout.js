import React from 'react';

export const metadata={
    title: "Gallery | VisionFly Holidays",
    description: "Explore the stunning visuals of our MICE services and events at VisionFly Holidays."
}
function layout({children}) {
    return (
        <div>
            {children}
        </div>
    );
}

export default layout;