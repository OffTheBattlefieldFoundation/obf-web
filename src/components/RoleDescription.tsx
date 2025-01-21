interface Item {
  title: string;
  message: string;
}

interface ContentSectionProps {
  descriptionStyles: React.CSSProperties;
  items: Item[];
  chapterName: string;
}

export default function ContentSection({
  descriptionStyles,
  items,
  chapterName,
}: ContentSectionProps) {
  return (
    <>
      {/* Define CSS styles for hover effect */}
      <style>
        {`
          .details-container {
            margin-bottom: 10px;
            padding: 2% 2% 2% 4%;
            border-radius: 10px;
            background-color: white;
            cursor: pointer;
            font-size: 18px;
            transition: background-color 0.3s ease;
          }

          .details-container:hover {
            background-color:rgb(230, 249, 224);
          }

          .details-summary {
            display: flex;
            align-items: center;
            font-weight: bold;
            color: #282F34;
            cursor: pointer;
            list-style: none;
          }
        `}
      </style>

      <div style={{ margin: "1% 40% 0% 5%", ...descriptionStyles }}>
        <span style={{ color: "green" }}>#</span>&nbsp;Welcome to {chapterName}
      </div>

      <div
        style={{
          margin: "1% 35% 5% 5%",
          flexDirection: "column",
          alignItems: "flex-start",
          ...descriptionStyles,
        }}
      >
        <span style={{ color: "#282F34", fontSize: 32 }}>
          Why You Should Join Us:
        </span>
        <span style={{ color: "#2EB872", fontSize: 32 }}>
          &nbsp;The Ukraine Rebuilding Initiative
        </span>
        <p
          style={{
            color: "#282F34",
            fontSize: 16,
            marginTop: "10px",
            fontWeight: "normal",
          }}
        >
          The initiative is structured around five key division-based projects,
          each targeting a specific area of development and rehabilitation in
          Ukraine.
        </p>

        <div style={{ marginTop: "20px" }}>
          {items.map((item, index) => (
            <details
              key={index}
              className="details-container" // Apply the hoverable class
              style={{
                border: descriptionStyles.border,
              }}
            >
              <summary className="details-summary">
                <img
                  src="/greenmark.png"
                  alt="green mark"
                  style={{
                    width: "3%",
                    height: "3%",
                    marginRight: "10px",
                  }}
                />
                {item.title}
              </summary>
              <p
                style={{
                  marginTop: "10px",
                  color: "#555",
                  fontWeight: "normal",
                  fontSize: 16,
                }}
              >
                {item.message}
              </p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}