//Accordion componen

import { useState } from "react";
export default function Accordion() {
const tabs = [
  { id: "HTML", label: `HTML `, content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser." },
  { id: "CSS", label: `CSS `, content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML." },
  { id: "JavaScript", label: `JavaScript `, content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS." },
];
const [currentTab,setCurrentTab] = useState({
  "HTML" : false,
  "CSS" : false,
  "JavaScript" : false
});
  return (

<div>
    {/* Toggle buttons */}
    {tabs.map((tab) => (
      <div>
      <div
        onClick={() =>
          setCurrentTab((prev) => ({
            ...prev,
            [tab.id]: !prev[tab.id], // correct toggle
          }))
        }
      >
        {tab.label}
      </div>
      {currentTab[tab.id] && (
            <div key={tab.id} style={{ marginBottom: "15px" }}>
              <p>{tab.content}</p>
            </div>
      )}
      </div>
    ))}
  </div>
  );
}
