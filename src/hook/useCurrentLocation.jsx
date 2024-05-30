import { useState, useEffect } from 'react';

const useCurrentLocation = (options = {}) => {
    const [nlocation, setLocation] = useState({
        latitude: null,
        longitude: null,
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            setLoading(false);
            return;
        }

        const successHandler = (position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            setError(null);
            setLoading(false);
        };

        const errorHandler = (error) => {
            setError(error.message);
            setLoading(false);
        };

        navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);

    }, []);

    return { nlocation, error, loading };
};

export default useCurrentLocation;