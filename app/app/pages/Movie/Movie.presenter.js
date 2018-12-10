/* eslint-disable no-underscore-dangle */
/* Node */
import RoundStarBorder from 'react-md-icon/dist/RoundStarBorder';
import RoundPlayArrow from 'react-md-icon/dist/RoundPlayArrow';
import RoundStarHalf from 'react-md-icon/dist/RoundStarHalf';
import RoundMoodBad from 'react-md-icon/dist/RoundMoodBad';
import RoundClose from 'react-md-icon/dist/RoundClose';
import RoundStar from 'react-md-icon/dist/RoundStar';
import RoundMood from 'react-md-icon/dist/RoundMood';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import React from 'react';

/* Relative */
import { Spinner } from '../../components/Spinner';
import propTypes from './Movie.propTypes';
import styles from './Movie.styles';

const MoviePresenter = ({
    movie, stars, isHD, runtime, quality, torrentInfo,
}) => (
    <div className={css(styles.container)}>
        {movie && movie.images && movie.images.fanart && (
            <img className={css(styles.background)} src={movie.images.fanart} alt="" />
        )}

        <div className={css(styles.overlay)} />

        <Link to="/" className={css(styles.closeIcon)}>
            <RoundClose />
        </Link>

        {movie ? (
            <div className={css(styles.innerContainer)}>
                <h1 className={css(styles.title)}>{movie.title}</h1>

                <div className={css(styles.metadata)}>
                    <p className={css(styles.metadataText)}>{movie.year}</p>
                    <p className={css(styles.metadataText)}>&#8226;</p>
                    <p className={css(styles.metadataText)}>{runtime}</p>
                    <p className={css(styles.metadataText)}>&#8226;</p>
                    <p className={css(styles.metadataText)}>{isHD ? 'HD' : 'SD'}</p>
                    <p className={css(styles.metadataText)}>&#8226;</p>
                    <p className={css(styles.metadataText)}>{movie.certification}</p>
                    <p className={css(styles.metadataText)}>&#8226;</p>

                    <div className={css(styles.metadataText, styles.metadataStars)}>
                        {stars.filledStars.map(num => (
                            <RoundStar key={num} className={css(styles.starIcon)} />
                        ))}

                        {stars.hasHalfStar
                            ? <RoundStarHalf className={css(styles.starIcon)} />
                            : null}

                        {stars.emptyStars.map(num => (
                            <RoundStarBorder key={num} className={css(styles.starIcon)} />
                        ))}
                    </div>

                    <p className={css(styles.metadataText)}>&#8226;</p>

                    <div className={css(styles.metadataText, styles.metadataHealth)}>
                        {torrentInfo.status === 'Good'
                            ? <RoundMood className={css(styles.healthIcon, styles[`health${torrentInfo.status}`])} />
                            : <RoundMoodBad className={css(styles.healthIcon, styles[`health${torrentInfo.status}`])} />}
                    </div>
                </div>

                <p className={css(styles.synopsis)}>{movie.synopsis}</p>

                <Link to={`/video/${movie._id}`} className={css(styles.buttonContainer)}>
                    <button className={css(styles.button)} type="button"><RoundPlayArrow className={css(styles.playIcon)} /></button>
                </Link>
            </div>
        ) : (
            <Spinner />
        )}
    </div>
);

MoviePresenter.propTypes = propTypes.presenter;

export default MoviePresenter;
