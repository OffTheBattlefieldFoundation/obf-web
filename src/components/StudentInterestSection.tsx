export default function StudentInterestSection({}) {
  const studentInterestStyles = {
    backgroundColor: 'white',
    border: `4px solid green`,
    borderRadius: '15px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
  }

  const description =
    'We rely on the support and collaboration of fellow students to bring this initiative to life. Whether you have skills to share, ideas to contribute, or simply a passion for learning, your involvement can make a real difference. If you’re interested in gaining hands-on experience and working with a dedicated team, we’d love for you to join us!'
  const url = 'https://forms.gle/BLYtA3yiVw9nvkoR6'

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
          Want To Join Our Team?
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
