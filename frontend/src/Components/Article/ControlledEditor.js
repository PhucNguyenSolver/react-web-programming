import "./article.scss";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const ControlledEditor = ({draft, onStateChange}) => {
  const initState = draft || EditorState.createEmpty();
  const [editorState, setEditorState] = useState(initState);
  const handleStateChange = (s) => {
    setEditorState(s);
    onStateChange(s);
  }

  return (<>
  <div className="bg-dark p-1">
    <div className="row h-50">
      <div className="col-12">
        <div className="bg-light mb-2">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={handleStateChange}
          />
        </div>
      </div>
    </div>
  </div>
  </>);
}

export default ControlledEditor;