import React from 'react';
import Card from './Card';
import { FileData } from './../types/FileData';

type CardListProps = {
    files: FileData[];
};

// All the content is prepared here, if we have other data types in the future other than cards they can be easilly added
const CardList: React.FC<CardListProps> = ({ files }) => {
    return (
        <div className="card-list">
            {files.map((file) => (
                <Card key={file.id} file={file} />
            ))}
        </div>
    );
};

export default CardList;