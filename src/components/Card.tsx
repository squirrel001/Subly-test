import React from 'react';
import './Card.css';
import { FileData } from './../types/FileData';
import { formatDistanceToNow } from 'date-fns';
import deleteIcon from './../assets/delete-icon.png';
import languagesIcon from '../assets/translate-icon.png';
import errorIcon from '../assets/exclamation-icon.png';

type CardProps = {
    file: FileData;
};

const Card: React.FC<CardProps> = ({ file }) => {
    const getStatusText = () => {
        if (file.status === 'transcribing') {
            return 'Transcribing';
        } else if (file.status === 'error') {
            return 'Error in processing';
        } else {
            // To get time of last Edit, only for files that are Ready
            return `Edited ${formatDistanceToNow(new Date(file.updatedAt))} ago`;
        }
    };

    // Overlay for Transcribing and Error status
    const renderOverlayContent = () => {
        if (file.status === 'transcribing') {
            return (
                <div>
                    <div className="overlay-transcribing">
                        <span>Transcribing subtitles</span>
                    </div>
                    <div className="overlay-transcribing">
                        <div className="loading-bar"></div>
                    </div>
                </div>
            );
        } else if (file.status === 'error') {
            return (
                <div className="overlay error">
                    <div className="error">
                        <span>An error occurred while processing your file. Delete the file to try again, and report issue if the problem persists.</span>
                    </div>

                    <div className="error-actions">
                        <button className="error-btn" onClick={() => {}}>Delete file</button>
                        <button className="error-btn">Report issue</button>
                    </div>
                </div>
            );
        }
        return null;
    };

    // Overlay for Ready
    const renderReadyOverlay = () => {
        if (file.status === 'ready') {
            return (
                <div className="ready-overlay">
                    <div className="overlay-btn top-left">
                        <img src={languagesIcon} alt="Languages" />
                        &nbsp;{file.languages.length} language(s)&nbsp;
                    </div>
                    <button className="overlay-btn top-right"><img src={deleteIcon} alt="Delete" /></button>
                    <button className="overlay-btn center">Edit</button>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="card">
            <div className={`card-image ${file.status}`}>
                <img src={file.cover} alt={file.name} />
                {renderOverlayContent()}
                {file.status === 'ready' && renderReadyOverlay()}
            </div>
            <div className="card-content">
                <strong>{file.name}</strong>
                <div className="status-text">{getStatusText()}</div>
            </div>
        </div>
    );
};

export default Card;