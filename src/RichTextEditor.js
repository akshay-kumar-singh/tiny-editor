import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichTextEditor = () => {
  const [content, setContent] = useState(""); // State for TinyMCE editor content

  // Handle changes in the TinyMCE editor
  const handleEditorChange = (content) => {
    setContent(content);
    console.log("Content updated:", content);
  };

  // Handle submit button click
  const handleSubmit = () => {
    console.log("Submitted Content:", content);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Rich Text Editor</h2>

      {/* TinyMCE Editor */}
      <Editor
        apiKey="qixv9zc8jaowyfd2o2v5iznq302w0wbdszyd5dde84v8wdf0"
        value={content}
        init={{
          height: 300,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "image",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help | image",
          paste_data_images: true,
          images_upload_handler: (blobInfo, success, failure) => {
            const reader = new FileReader();
            reader.onload = () => {
              success(reader.result);
            };
            reader.readAsDataURL(blobInfo.blob());
          },
        }}
        onEditorChange={handleEditorChange}
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default RichTextEditor;
