import React from 'react';
import Button from 'react-bootstrap/esm/Button';

class ImageUploader extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        let element = document.getElementById("uploadFile");
        element.click();
    }

    readFile = () => {
        alert(
            `Selected file - ${this.fileInput.current.files[0].name
            }`
        );
    }

    render() {
        return (
            <div >
                <input id="uploadFile" type="file" ref={this.fileInput} onChange={this.readFile} style={{ display: "none" }} />
                <Button onClick={this.handleSubmit} className='uploadFile_btn '>
                        <strong>Click to upload</strong> or drag and drop <br /> 
                        SVG, PNG, JPG or GIF (max. 800x400px)
                </Button>
            </div>
        );
    }
}


export default ImageUploader;
