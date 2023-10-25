import React, { Suspense } from 'react';

// Higher-order component for wrapping components with suspense
const Loadable = (Component) => (props) => {
    // Using Suspense to handle the loading state of the component
    return (
        <Suspense
            fallback={
                <p>Loading</p> // Fallback UI to show while the component is loading
            }
        >
            <Component {...props} /> {/* Rendering the wrapped component */}
        </Suspense>
    );
};

export default Loadable; // Exporting the Loadable higher-order component
