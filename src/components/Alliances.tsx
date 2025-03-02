interface AllianceSectionProps {
  allianceStyles: React.CSSProperties
  description: string
  bolded_description: string
  url: string
}

export default function AllianceSection({
  allianceStyles,
  description,
  bolded_description,
  url,
}: AllianceSectionProps) {
  return (
    <>
      {/* Define CSS styles for hover effect */}
      <style>
        {`
              .details-container-alliance {
                padding: 0;
                background-color: white;
                cursor: pointer;
                font-size: 18px;
                transition: background-color 0.3s ease;
              }
    
              .details-container-alliance:hover {
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

      <div style={{ margin: '1% 40% 0% 5%', ...allianceStyles }}>
        <span style={{ color: 'green' }}>#</span>&nbsp;Alliances
      </div>

      <div
        style={{
          margin: '1% 35% 5% 5%',
          flexDirection: 'column',
          alignItems: 'flex-start',
          ...allianceStyles,
        }}
      >
        <span style={{ color: '#2EB872', fontSize: 32 }}>Sister</span>

        <span style={{ color: '#282F34', fontSize: 32 }}>&nbsp;City</span>
        <span style={{ color: '#2EB872', fontSize: 32 }}>&nbsp;Alliance</span>
        <div
          style={{
            color: '#282F34',
            fontSize: 16,
            marginTop: '10px',
            fontWeight: 'normal',
          }}
        >
          <div style={{ margin: '2% 2% 3% 0%' }}>{description}</div>
          <div style={{ margin: '2% 2% 2% 0%' }}>
            <strong>{bolded_description}</strong>
          </div>
          <a href={url}>
            <div
              className="details-container-alliance"
              style={{
                margin: '4% 60% 2% 0%',
                border: allianceStyles.border,
                borderRadius: allianceStyles.borderRadius,
                padding: allianceStyles.padding,
                fontSize: allianceStyles.fontSize,
                fontWeight: allianceStyles.fontWeight,
                boxShadow: allianceStyles.boxShadow,
                zIndex: 10,
              }}
            >
              <center>Partnership Form</center>
            </div>{' '}
          </a>
        </div>
      </div>
    </>
  )
}
