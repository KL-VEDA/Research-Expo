import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Media.css";

// Manual imports of Researchthon images
import r1 from '../../assets/media/Researchthon/img1.jpg';
import r2 from '../../assets/media/Researchthon/img2.jpg';
import r3 from '../../assets/media/Researchthon/img3.jpg';
import r4 from '../../assets/media/Researchthon/img4.jpg';

// Manual imports of ICEES images (1 to 31)
import i1 from '../../assets/media/ICEES/Image_1.jpg';
import i2 from '../../assets/media/ICEES/Image_2.jpg';
import i3 from '../../assets/media/ICEES/Image_3.jpg';
import i4 from '../../assets/media/ICEES/Image_4.jpg';
import i5 from '../../assets/media/ICEES/Image_5.jpg';
import i6 from '../../assets/media/ICEES/Image_6.jpg';
import i7 from '../../assets/media/ICEES/Image_7.jpg';
import i8 from '../../assets/media/ICEES/Image_8.jpg';
import i9 from '../../assets/media/ICEES/Image_9.jpg';
import i10 from '../../assets/media/ICEES/Image_10.jpg';
import i11 from '../../assets/media/ICEES/Image_11.jpg';
import i12 from '../../assets/media/ICEES/Image_12.jpg';
import i13 from '../../assets/media/ICEES/Image_13.jpg';
import i14 from '../../assets/media/ICEES/Image_14.jpg';
import i15 from '../../assets/media/ICEES/Image_15.jpg';
import i16 from '../../assets/media/ICEES/Image_16.jpg';
import i17 from '../../assets/media/ICEES/Image_17.jpg';
import i18 from '../../assets/media/ICEES/Image_18.jpg';
import i19 from '../../assets/media/ICEES/Image_19.jpg';
import i20 from '../../assets/media/ICEES/Image_20.jpg';
import i21 from '../../assets/media/ICEES/Image_21.jpg';
import i22 from '../../assets/media/ICEES/Image_22.jpg';
import i23 from '../../assets/media/ICEES/Image_23.jpg';
import i24 from '../../assets/media/ICEES/Image_24.jpg';
import i25 from '../../assets/media/ICEES/Image_25.jpg';
import i26 from '../../assets/media/ICEES/Image_26.jpg';
import i27 from '../../assets/media/ICEES/Image_27.jpg';
import i28 from '../../assets/media/ICEES/Image_28.jpg';
import i29 from '../../assets/media/ICEES/Image_29.jpg';
import i30 from '../../assets/media/ICEES/Image_30.jpg';
import i31 from '../../assets/media/ICEES/Image_31.jpg';

// Media gallery structured by type key
const mediaGallery = {
  researcathon: {
    title: "Researchthon",
    sections: {
      "Researchthon": [r1, r2, r3, r4],
    }
  },
  icees: {
    title: "ICEES",
    sections: {
      "ICEES MEMORIES": [i1, i2, i3, i4, i5, i10, i11, i12, i13, i15, i17, i21, i22, i23, i24, i25, i28, i29, i31],
      "ICEES SPEAKERS": [i6, i7, i8, i9, i14, i16, i18, i20, i27, i30],
    }
  },
};

function Media() {
  const { type } = useParams();
  const normalizedType = type?.toLowerCase();

  const validKeys = Object.keys(mediaGallery);
  const selectedGallery = mediaGallery[normalizedType];

  const renderGallery = () => {
    if (!selectedGallery) {
      // If no type is provided or invalid, show categories
      return (
<div className="media-fallback">
  {/* <h2>Please select a Media Category:</h2> */}
  <div className="media-flyer-grid">
    {validKeys.map((key) => {
      const { title, sections } = mediaGallery[key];
      const allImages = Object.values(sections).flat();
      const randomImage = allImages[Math.floor(2 + 0 * Math.random() * allImages.length)];

      return (
        <Link to={`/media/${key}`} key={key} className="media-flyer-card" style={{ backgroundImage: `url(${randomImage})` }}>
          <div className="media-flyer-overlay">
            <span className="media-flyer-title">{title}</span>
          </div>
        </Link>
      );
    })}
  </div>
</div>
      );
    }

    // Render selected media gallery
    return Object.entries(selectedGallery.sections).map(([section, images]) => (
      <div key={section} className="media-section">
        <h2>{section}</h2>
        <div className="media-grid">
          {images.map((src, index) => (
            <div key={index} className="media-card">
              <img src={src} alt={`${section} ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="media-container">
      <h1 className="media-title">
        {selectedGallery ? selectedGallery.title + " Gallery" : "Media Gallery"}
      </h1>
      {renderGallery()}
    </div>
  );
}

export default Media;
