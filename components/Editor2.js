import React, { useEffect, useState, useRef } from "react";
import useArticleContentStore from '../store/articleContent'

// import { CKEditor } from "@ckeditor/ckeditor5-react"; //starting from ckeditor5-react v3, we should use { CKEditor }
// // import CKEditor from "@ckeditor/ckeditor5-react"; // for ckeditor5-react v2
// import ClassicEditor from "ckeditor5-build-classic-dna";

function Editor2() {
    let editorRef = useRef();
    const { CKEditor, ClassicEditor } = editorRef.current || {}; // if it don't find any document then it will be an empty object 

    let [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        editorRef.current = {
            // CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
            // ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),

            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
            ClassicEditor: require("ckeditor5-build-classic-dna"),
        };

        setLoaded(true);
    }, []); // run on mounting

    if (loaded) {
        return (
            <CKEditor
                editor={ClassicEditor}
                config={{
                    table: {
                        customClass: ["ui", "table", "celled"], // Important!!! need to be array
                    },
                    image: {
                        customClass: ["ui", "fluid", "image"], // Use whatever class names defined in your theme
                    },
                    toolbar: [
                        "heading",
                        "|",
                        "bold",
                        "italic",
                        "link",
                        "bulletedList",
                        "numberedList",
                        "|",
                        "indent",
                        "outdent",
                        "|",
                        "codeBlock",
                        "blockQuote",
                        "insertTable",
                        "mediaEmbed",
                        "undo",
                        "redo",
                    ],
                }}
                data=""
                // onInit={(editor) => {
                // // You can store the "editor" and use when it is needed.
                //     console.log("Editor is ready to use!", editor);
                // }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    useArticleContentStore.setState({ articleContent: data })
                }}
            />
            // <CKEditor
            //     editor={ClassicEditor}
            //     data=""
            //     onReady={(editor) => {
            //         // You can store the "editor" and use when it is needed.
            //         console.log("Editor is ready to use!", editor);
            //     }}
            //     onChange={(event, editor) => {
            //         // do something when editor's content changed
            //         const data = editor.getData();
            //         useArticleContentStore.setState({ articleContent: data })
            //         console.log({ event, editor, data });
            //     }}
            //     onBlur={(event, editor) => {
            //         console.log("Blur.", editor);
            //     }}
            //     onFocus={(event, editor) => {
            //         console.log("Focus.", editor);
            //     }}
            // />
        );
    } else {
        return <h2> Editor is loading </h2>;
    }
}

export default Editor2;