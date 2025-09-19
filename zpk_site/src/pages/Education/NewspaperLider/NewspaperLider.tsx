import { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./NewspaperLider.scss";


//pdf
import DesemberPDF from "../../Education/NewspaperLider/pdf/desember.pdf"
import JanuaryPDF from "../../Education/NewspaperLider/pdf/january.pdf"
import MarchPDF from "../../Education/NewspaperLider/pdf/march.pdf"
import AprilPDF from "../../Education/NewspaperLider/pdf/april.pdf"
import MayPDF from "../../Education/NewspaperLider/pdf/may.pdf"

//img covers
import WinterCover from "../../Education/NewspaperLider/img/WinterCover.png"
import SpringCover from "../../Education/NewspaperLider/img/SpringCover.png"

export default function NewspaperArchive() {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const issues = [
    { id: 12, month: "Грудень", year: 2024, cover: WinterCover, pdf: DesemberPDF },
    { id: 1, month: "Січень-Лютий", year: 2025, cover: WinterCover, pdf: JanuaryPDF },
    { id: 2, month: "Березень", year: 2025, cover: SpringCover, pdf: MarchPDF },
    { id: 3, month: "Квітень", year: 2025, cover: SpringCover, pdf: AprilPDF },
    { id: 4, month: "Травень", year: 2025, cover: SpringCover, pdf: MayPDF }
  ];

  return (
    <div>
        <Header />
        <div className="newspaper-archive">
            <h1 className="archive-title">Газета «Лідер»</h1>
            <div className="archive-grid">
                {issues.map((issue) => (
                <div
                    key={issue.id}
                    className="issue-card"
                    onClick={() => setSelectedIssue(issue)}
                >
                    <img src={issue.cover} alt={issue.month} className="issue-cover" />
                    <div className="issue-info">
                    <h2>{issue.month} {issue.year}</h2>
                    <button className="read-btn">Читати</button>
                    </div>
                </div>
                ))}
            </div>

            {selectedIssue && (
                <div className="modal" onClick={() => setSelectedIssue(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={() => setSelectedIssue(null)}>×</button>
                    <iframe src={selectedIssue.pdf} title={selectedIssue.month} className="pdf-viewer"></iframe>
                </div>
                </div>
            )}
        </div>
        <Footer />
    </div>
  );
}
