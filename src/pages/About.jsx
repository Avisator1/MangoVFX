import React from 'react';

const InertiaStudios = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <div className="home-page-top">
          <div className="home-page-top-ctn">
            <div className="home-page-title">
              <p>
                <div className="home-page-hero-line" style={{ display: 'block', transform: 'translate(0.0073%, 0%) translate3d(-281.707px, 0px, 0px)' }}>
                  <div className="home-page-hero-word" style={{ position: 'relative' }}>INERTIA</div>
                </div>
                <div className="home-page-hero-line" style={{ display: 'block', textAlign: 'center', position: 'relative', transform: 'translate(-0.0073%, 0%) translate3d(264.111px, 0px, 0px)' }}>
                  <div className="home-page-hero-word" style={{ position: 'relative', display: 'inline-block' }}>STUDIOS</div>
                </div>
              </p>
            </div>
            
            <div className="home-page-video-ctn" style={{ transform: 'translate(0px, 0px)' }}>
              <video 
                src="https://player.vimeo.com/progressive_redirect/playback/1081760237/rendition/1080p/file.mp4?loc=external&log_user=0&signature=741bda2d968294df1e81eb1c5a920f1df0d2562573fde7bd94a28cf97ef1177e" 
                playsInline 
                muted 
                loop 
                style={{ clipPath: 'inset(0% 0.0034%)', transform: 'translate3d(0px, 0px, 0px) scale(1.0008, 1.0008)' }}
              />
            </div>
          </div>
        </div>
        
        <div className="home-page-bottom">
          <h1>
            <div className="home-hero-bottom-line" style={{ display: 'block', textAlign: 'center', position: 'relative' }}>
              A creative <strong>CGI studio </strong>
            </div>
            <div className="home-hero-bottom-line" style={{ display: 'block', textAlign: 'center', position: 'relative' }}>
              Setting brands <strong>in motion</strong>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InertiaStudios;