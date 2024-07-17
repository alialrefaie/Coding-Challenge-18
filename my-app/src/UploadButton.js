import React, { useState } from 'react';

const UploadButton = () => {
    const [uploading, setUploading] = useState(false);

    const handleUpload = () => {
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
            alert('File uploaded successfully!');
        }, 2000);
    };

    return (
        <button onClick={handleUpload} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload File'}
        </button>
    );
};

export default UploadButton;