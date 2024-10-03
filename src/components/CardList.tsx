import React from 'react';
import Card from './Card';
import { FileData } from './../types/FileData';

type CardListProps = {
    files: FileData[];
};

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