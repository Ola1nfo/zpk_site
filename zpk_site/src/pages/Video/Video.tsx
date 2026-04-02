import { useEffect } from 'react';

export default function VideoGallery() {
    useEffect(() => {
        // автоматично перекидає на відео
        window.location.href = "https://www.youtube.com/@zpk2026";
    }, []);

    return (
        <div>
            <p>Якщо вас не перекинуло автоматично, <a href="https://www.youtube.com/@zpk2026" target="_blank" rel="noopener noreferrer">натисніть тут</a>.</p>
        </div>
    );
}
