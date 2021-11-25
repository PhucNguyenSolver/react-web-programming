import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const ControlledEditor = ({state, onSaveDraft, savedDraft}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  if (state) {
    setEditorState(state);
  }
  const handleStateChange = (newState) => {
    setEditorState(newState);
  }

  return (<>
    <Editor
      editorState={editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onEditorStateChange={handleStateChange}
    />
  </>);
}

export default ControlledEditor;