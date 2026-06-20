import ReactMarkdown from "react-markdown";

function TextReviews({ text }: { text: string }) {
  return (
    <div>
      <h3>Zagolovok</h3>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default TextReviews;
