import { useEffect } from 'react';

export default function VideoGallery() {
    useEffect(() => {
        // автоматично перекидає на відео
        window.location.href = "https://www.youtube.com/watch?v=gYno78tASso&t=4s";
    }, []);

    return (
        <div>
            <p>Якщо вас не перекинуло автоматично, <a href="https://www.youtube.com/watch?v=gYno78tASso&t=4s" target="_blank" rel="noopener noreferrer">натисніть тут</a>.</p>
        </div>
    );
}
