import { saveAs } from 'file-saver';
import pdf from 'html-pdf';
import pdfTemplate from '../components/documents/index'

export default data =(state) => {pdf.create(pdfTemplate(state), {}).toFile('result.pdf', (err) => {
    if(err) {
        console.log(err);
    }
    else{
        const pdfBlob = new Blob([data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'pitch.pdf');
    }})
}