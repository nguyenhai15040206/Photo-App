import React from 'react'
import PropTypes from 'prop-types'
import './Banner.css'

function Banner(props) {
    const { title, backgroundUrl } = props;
    const bannerStyle = backgroundUrl
        ? { backgroundImage: `url(${backgroundUrl})` } : {}
    return (
        <section className="banner" style={bannerStyle} >
            <h1 className="banner-title">{title}</h1>
        </section>
    )
}

Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string,
}

Banner.defaultProps = {
    title: '',
    backgroundUrl: ''
}

export default Banner

