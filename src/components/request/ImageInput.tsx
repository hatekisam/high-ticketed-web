'use client';

import React from 'react';
import FileDropZone from './FileDropZone';

interface Props {
  setSelectFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const FileInput = ({ setSelectFile }: Props) => {
  const handleFilesSelected = (filetype: string, files: File[]) => {
    console.log(filetype + ':' + files);
    setSelectFile(files[0]);
  };
  return (
    <FileDropZone
      fileType="landing"
      onFilesSelected={handleFilesSelected}
      title="Cover photo of the student"
    />
  );
};

export default FileInput;
