import React, {Component} from 'react';
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import '../sStudent.css'
import {Card, Button} from 'react-bootstrap'
import Nav from '../../Navigator'


class StudentViewAssignment extends Component {
    /* var dropFileForm = document.getElementById("dropFileForm");
     var fileLabelText = document.getElementById("fileLabelText");
     var uploadStatus = document.getElementById("uploadStatus");
     var fileInput = document.getElementById("fileInput");
     var droppedFiles;

     overrideDefault(event) {
         event.preventDefault();
         event.stopPropagation();
     }

     fileHover() {
         dropFileForm.classList.add("fileHover");
     }

     fileHoverEnd() {
         dropFileForm.classList.remove("fileHover");
     }

     addFiles(event) {
         var droppedFiles = event.target.files || event.dataTransfer.files;
         showFiles(droppedFiles);
     }

     showFiles(files) {
         if (files.length > 1) {
             fileLabelText.innerText = files.length + " files selected";
         } else {
             fileLabelText.innerText = files[0].name;
         }
     }

    uploadFiles(event) {
         event.preventDefault();
         changeStatus("Uploading...");

         var formData = new FormData();

         for (var i = 0, file; (file = droppedFiles[i]); i++) {
             formData.append(fileInput.name, file, file.name);
         }

         var xhr = new XMLHttpRequest();
         xhr.onreadystatechange = function(data) {
             //handle server response and change status of
             //upload process via changeStatus(text)
             console.log(xhr.response);
         };
         xhr.open(dropFileForm.method, dropFileForm.action, true);
         xhr.send(formData);
     }

     changeStatus(text) {
         uploadStatus.innerText = text;
     }

     */

    render() {
        return (
            <div>
                <HeaderMain/>
                <Nav/>
                <br/><br/>
                <div className="StudentViewAssCard">
                    <Card className="text-center">
                        <Card.Header>Submission Status</Card.Header>
                        <Card.Body>
                            <div className="studentViewTable">

                                <form id="dropFileForm" action="http://localhost/upload.php" method="post"
                                      onSubmit="uploadFiles(event)">
                                    <input type="file" name="files[]" id="fileInput" multiple
                                           onChange="addFiles(event)"/>

                                    <label htmlFor="fileInput" id="fileLabel"
                                           onDragOver="overrideDefault(event);fileHover();"
                                           onDragEnter="overrideDefault(event);fileHover();"
                                           onDragLeave="overrideDefault(event);fileHoverEnd();"
                                           onDrop="overrideDefault(event);fileHoverEnd(); addFiles(event);">
                                        <i className="fa fa-download fa-5x"></i>
                                        <br/>
                                        <span id="fileLabelText">
                                              Choose a file or drag it here
                                            </span>
                                        <br/>
                                        <span id="uploadStatus"></span>
                                    </label>


                                </form>
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Button variant="success">Save changes</Button>{' '}
                            <Button variant="danger">Delete</Button>
                        </Card.Footer>
                    </Card>
                </div>
                <br/><br/>
                <Footer/>
            </div>
        );
    }
}

export default StudentViewAssignment;
