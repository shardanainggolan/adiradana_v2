import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Quill from '../utils/quill'
import ImageResize from 'quill-image-resize-module';
import useArticleContentStore from '../store/articleContent'

Quill.register('modules/imageResize', ImageResize);

const modules = {
    toolbar: [
        [ { header: '1' }, { header: '2' }, { header: '3' }, { font: [] } ],
        [ { size: [] } ],
        [ 'bold', 'italic', 'underline', 'strike', 'blockquote' ],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { align: [] },
            { indent: '-1' },
            { indent: '+1' },
        ],
        // [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']       
    ],
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
    },
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}

export default function Editor() {
    return (
        <ReactQuill
            modules={modules} 
            onChange={(val) => useArticleContentStore.setState({ articleContent: val })} 
            theme="snow" 
            style={{ height: 500 }} 
        />
    )
}