interface StudentInterestSectionProps {
  studentInterestStyles: React.CSSProperties
  description: string
  url: string
}

export default function StudentInterestSection({
  studentInterestStyles,
  description,
  url,
}: StudentInterestSectionProps) {
  return (
    <>
      {/* Define CSS styles for hover effect */}
      <style>
        {`
                .details-container-studentInterest {
                  padding: 0;
                  background-color: white;
                  cursor: pointer;
                  font-size: 18px;
                  transition: background-color 0.3s ease;
                }
      
                .details-container-studentInterest:hover {
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

      <div style={{ margin: '1% 40% 0% 5%', ...studentInterestStyles }}>
        <span style={{ color: 'green' }}>#</span>&nbsp;Student Interest Form
      </div>

      <div
        style={{
          margin: '1% 35% 5% 5%',
          flexDirection: 'column',
          alignItems: 'flex-start',
          ...studentInterestStyles,
        }}
      >
        <span style={{ color: '#282F34', fontSize: 32 }}>
          &nbsp;Want To Join Our Team?{' '}
        </span>
        <div
          style={{
            color: '#282F34',
            fontSize: 16,
            marginTop: '10px',
            fontWeight: 'normal',
          }}
        >
          <div style={{ margin: '2% 2% 3% 0%' }}>{description}</div>
          <a href={url}>
            <div
              className="details-container-studentInterest"
              style={{
                margin: '4% 60% 2% 0%',
                border: studentInterestStyles.border,
                borderRadius: studentInterestStyles.borderRadius,
                padding: studentInterestStyles.padding,
                fontSize: studentInterestStyles.fontSize,
                fontWeight: studentInterestStyles.fontWeight,
                boxShadow: studentInterestStyles.boxShadow,
                zIndex: 10,
              }}
            >
              <center>Student Interest Form</center>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
