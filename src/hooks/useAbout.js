import { useState, useEffect } from 'react';
import { getAboutUs } from '../services/aboutService';

const useAbout = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const data = await getAboutUs();
                setAboutData(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAboutData();
    }, []);

    return { aboutData, loading, error };
};

export default useAbout;
