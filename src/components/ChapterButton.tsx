import Link from 'next/link'
import PropTypes from 'prop-types'

const ChapterButton = ({
  data,
}: {
  data: { href: string; imgSrc: string; altText: string; title: string }
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
          width: '200px',
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
  }).isRequired,
}

export default ChapterButton
