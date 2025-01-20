interface Item {
    title: string
    message: string
  }
  
  interface ContentSectionProps {
    descriptionStyles: React.CSSProperties
    items: Item[]
    chapterName: string
  }
  
  export default function ContentSection({
    descriptionStyles,
    items,
    chapterName,
  }: ContentSectionProps) {
    return (
      <>
        <div style={{ margin: '1% 40% 0% 5%', ...descriptionStyles }}>
          <span style={{ color: 'green' }}>#</span>&nbsp;Welcome to {chapterName}
        </div>
  
        <div
          style={{
            margin: '1% 35% 5% 5%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            ...descriptionStyles,
          }}
        >
          <span style={{ color: '#282F34', fontSize: 32 }}>
            Why You Should Join Us:
          </span>
          <span style={{ color: '#2EB872', fontSize: 32 }}>
            &nbsp;The Ukraine Rebuilding Initiative
          </span>
          <p
            style={{
              color: '#282F34',
              fontSize: 16,
              marginTop: '10px',
              fontWeight: 'normal',
            }}
          >
            The initiative is structured around five key division-based projects,
            each targeting a specific area of development and rehabilitation in
            Ukraine.
          </p>
  
          <div style={{ marginTop: '20px' }}>
            {items.map((item, index) => (
              <details
                key={index}
                style={{
                  marginBottom: '10px',
                  padding: '2% 2% 2% 4%',
                  border: descriptionStyles.border,
                  borderRadius: '10px',
                  backgroundColor: '#f9fcf0',
                  cursor: 'pointer',
                  fontSize: '18px',
                }}
              >
                <summary
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    color: '#282F34',
                    cursor: 'pointer',
                    listStyle: 'none',
                  }}
                >
                  <span
                    style={{
                      color: '#2EB872',
                      fontSize: '18px',
                      marginRight: '10px',
                    }}
                  >
                    ✓⃝
                  </span>
                  {item.title}
                </summary>
                <p
                  style={{
                    marginTop: '10px',
                    color: '#555',
                    fontWeight: 'normal',
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
    )
  }