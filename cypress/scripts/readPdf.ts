import fs from "fs"
import path from 'path'
import pdf from 'pdf-parse'

export const readPdf = (pathToPdf: string) => {
  return new Promise((resolve) => {
    const pdfPath = path.resolve(pathToPdf)
    const dataBuffer = fs.readFileSync(pdfPath);
    pdf(dataBuffer).then(function ({ text }) {
      resolve(text)
    });
  })
}