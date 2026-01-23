"use client";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { portfolioData } from "@/data/portfolio";

export const generateResumePDF = async (setLoading: (loading: boolean) => void) => {
    setLoading(true);
    try {
        const container = document.createElement("div");
        container.style.position = "absolute";
        container.style.left = "-9999px";
        container.style.top = "-9999px";
        container.style.width = "800px";
        container.style.padding = "40px";
        container.style.backgroundColor = "#ffffff";
        container.style.color = "#000000";
        container.style.fontFamily = "Arial, sans-serif";

        const header = `
      <div style="text-align: center; border-bottom: 2px solid #b8d4f0; padding-bottom: 20px; margin-bottom: 30px;">
        <h1 style="font-size: 32px; margin-bottom: 5px; color: #0a0a0b;">${portfolioData.name}</h1>
        <p style="font-size: 18px; color: #555; margin-bottom: 15px;">${portfolioData.title}</p>
        <div style="font-size: 12px; color: #888; display: flex; justify-content: center; gap: 15px;">
          <span>${portfolioData.email}</span> | 
          <span>${portfolioData.phone}</span> | 
          <span>${portfolioData.location}</span>
        </div>
      </div>
    `;

        const about = `
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 20px; color: #0a0a0b; border-left: 4px solid #b8d4f0; padding-left: 10px; margin-bottom: 10px;">About</h2>
        <p style="font-size: 14px; line-height: 1.6; color: #333;">${portfolioData.about}</p>
      </div>
    `;

        const experience = `
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 20px; color: #0a0a0b; border-left: 4px solid #b8d4f0; padding-left: 10px; margin-bottom: 15px;">Experience</h2>
        ${portfolioData.experience.map(exp => `
          <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
              <h3 style="font-size: 16px; margin: 0; color: #0a0a0b;">${exp.role}</h3>
              <span style="font-size: 12px; color: #888;">${exp.period}</span>
            </div>
            <p style="font-size: 14px; font-weight: bold; color: #555; margin: 0 0 8px 0;">${exp.company}</p>
            <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #444; line-height: 1.5;">
              ${exp.description.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;

        const skillsList = Object.entries(portfolioData.skills).map(([category, items]) => `
      <div style="margin-bottom: 10px;">
        <strong style="font-size: 14px; color: #0a0a0b; text-transform: capitalize;">${category}:</strong>
        <span style="font-size: 13px; color: #444;">${items.join(", ")}</span>
      </div>
    `).join("");

        const skills = `
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 20px; color: #0a0a0b; border-left: 4px solid #b8d4f0; padding-left: 10px; margin-bottom: 15px;">Technical Skills</h2>
        ${skillsList}
      </div>
    `;

        const education = `
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 20px; color: #0a0a0b; border-left: 4px solid #b8d4f0; padding-left: 10px; margin-bottom: 15px;">Education</h2>
        ${portfolioData.education.map(edu => `
          <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: baseline;">
            <div>
              <h3 style="font-size: 15px; margin: 0; color: #0a0a0b;">${edu.degree}</h3>
              <p style="font-size: 13px; color: #555; margin: 2px 0 0 0;">${edu.school}</p>
            </div>
            <span style="font-size: 12px; color: #888;">${edu.period}</span>
          </div>
        `).join("")}
      </div>
    `;

        container.innerHTML = header + about + experience + skills + education;
        document.body.appendChild(container);

        const canvas = await html2canvas(container, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
        });

        document.body.removeChild(container);

        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save(`${portfolioData.name.replace(/\s+/g, "_")}_Resume.pdf`);
    } catch (error) {
        console.error("PDF generation failed:", error);
        alert("Failed to generate PDF. Please try again.");
    } finally {
        setLoading(false);
    }
};
