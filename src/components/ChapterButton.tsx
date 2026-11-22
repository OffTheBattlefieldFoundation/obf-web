import Link from 'next/link'
import PropTypes from 'prop-types'

const ChapterButton = ({
  data,
}: {
  data: {
    href: string
    imgSrc: string
    altText: string
    title: string
    // Width of the logo box in pixels (default 200). Wide logos can use a
    // wider box so they don't end up smaller than the others.
    imgWidth?: number
  }
}) => (
  <Link href={data.href} legacyBehavior>
    <a
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: `${data.imgWidth ?? 200}px`,
          maxWidth: '100%',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={data.imgSrc}
          alt={data.altText}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            cursor: 'pointer',
          }}
        />
      </div>
      <p style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold' }}>
        {data.title}
      </p>
    </a>
  </Link>
)

ChapterButton.propTypes = {
  data: PropTypes.shape({
    href: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgWidth: PropTypes.number,
  }).isRequired,
}

export default ChapterButton
