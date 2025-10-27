import React, { useState, useEffect } from 'react';

function VideoPlayer({ videoPath }) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [videoPath]);

    // Extract video ID from Google Drive URL
    const getVideoId = (url) => {
        const match = url.match(/\/d\/([^/]+)/);
        return match ? match[1] : null;
    };

    // Convert to embedded URL
    const getEmbedUrl = (url) => {
        const videoId = getVideoId(url);
        if (!videoId) return null;
        return `https://drive.google.com/file/d/${videoId}/preview`;
    };

    const embedUrl = getEmbedUrl(videoPath);

    if (!embedUrl) {
        return (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-red-600">Invalid video URL</div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay"
            allowFullScreen
            title="Video player"
        />
    );
}

export default VideoPlayer;
