import React from 'react';
import SenseiSkoryk from '../../../assets/images/Sensei Skoryk.png';
import SenpaiCrowley from '../../../assets/images/Senpai Crowley.png';
import SenpaiMasurkevitch from '../../../assets/images/Senpai Masurkevitch.png';
import SenpaiSura from '../../../assets/images/Senpai Sura.png';

export default function OurInstructorsSections() {
  const sensei = {
    name: 'Gregg Skoryk',
    rank: '7th Degree, Go Ju Ryu',
    bio: 'Beginning his training with Shotokan Karate in 1980, Sensei Skoryk is currently a student of Go Ju Ryu under Hanshi Wallace Platt, 10th Deg.  Also a Weapons and Tai Chi Master, he has been teaching in Kitchener/Waterloo for over 30 years!  His experience includes countless competitions, demonstrations and training from around the world including the North and South Shaolin Temples of China.  In addition, he has received instruction from teachers such as Don Warrner, Sensei Chuck Merriman, Sensei Morio Higaonna, O\'Sensei Richard Kim and Sensei Peter Urban and many others',
    image: SenseiSkoryk,
  };

  const senpais = [
    {
      name: 'George Masurkevitch',
      rank: '4th Degree, Go Ju Ryu',
      bio: 'Senpai Masurkevitch has been an earnest student of Sensei Skoryk\'s for over 20 years! Recently awarded his 4th degree blackbelt in Karate, he also holds a 4th degree for Weapons and Tai Chi. Contributing to his training, he has also experienced various seminars, events and trips all around the world including China and Tibet.',
      image: SenpaiMasurkevitch,
    },
    {
      name: 'Brett Sura',
      rank: '4th Degree, Go Ju Ryu',
      bio: 'Senpai Sura began his martial arts training in 1999 at the Burlington Honbu Dojo, under Sensei Wallace Platt. In 2002, he also began training with Sensei Skoryk here at the Kitchener-Waterloo Dojo. In addition to his Karate training, he is a 3rd degree blackbelt in Weapons with a level 2 instructors certificate in Tai Chi. He has also travelled around the globe to train and compete in such locations as China, Australia and Hawaii.',
      image: SenpaiSura,
    },
    {
      name: 'Derek Crowley',
      rank: '3rd Degree, Go Ju Ryu',
      bio: 'A student of Sensei Skoryk\'s since 2004, Senpai Crowley continues to climb the ladder of Classical Martial Arts. With additional experience in Wing Chun Kung Fu and Ju Jitsu, he has also recently been awarded a Level One Tai Chi Instructors Certificate and a First Degree Blackbelt in our weapons program.',
      image: SenpaiCrowley,
    },
  ];

  const senpaisList = senpais.map((senpai) => (
    <div key={senpai.name + senpai.ranks} className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center p-2">
      <div className="instructor-card-container">
        <div className="instructor-card">
          <img src={senpai.image} alt="" />
          <div className="instructor-bio-container">
            <p>{senpai.bio}</p>
          </div>
        </div>
        <div className="instructor-info-container">
          <h4 style={{ marginBottom: '0' }}>{senpai.name}</h4>
          <h5>{senpai.rank}</h5>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="our-instructors" className="home-page-section">
      <div className="home-page-section-title-container">
        <h3>Our Instructors</h3>
      </div>
      <div className="home-page-section-content-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center p-4">
              <div className="instructor-card-container">
                <div className="instructor-card">
                  <img src={sensei.image} alt="" />
                  <div className="instructor-bio-container">
                    <p>{sensei.bio}</p>
                  </div>
                </div>
                <div className="instructor-info-container">
                  <h4 style={{ marginBottom: '0' }}>{sensei.name}</h4>
                  <h5>{sensei.rank}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            { senpaisList }
          </div>
        </div>
      </div>
    </section>
  );
}
