import collaboration from "../../assets/img/about/collaboration.svg";
import nature from "../../assets/img/about/nature.svg";
import connected from "../../assets/img/about/connected.svg";
import marie from "../../assets/img/avatars/marie.svg";
import raid from "../../assets/img/avatars/raid.svg";
import evelyne from "../../assets/img/avatars/evelyne.svg";
import dylan from "../../assets/img/avatars/dylan.svg";
import john from "../../assets/img/avatars/john.svg";

import Quotes from "../Quotes";

import "./style.scss";

const AboutQuote = () => {
  return <span>“Qui ne se plante jamais n'a aucune chance de pousser.”</span>;
};

const About = () => {
  return (
    <main className="about-page">
      <h1 className="about-page-title">
        Avec O’My Plant, n'oubliez plus vos plantes !
      </h1>
      <section className="about-page-section-introduction">
        <div className="about-page-section-text">
          <h2 className="about-page-section-title">A propos d'O'My Plant</h2>
          <p className="about-page-section-content">
            O'My Plant a été développé pendant 1 mois par une team de 5
            personnes en reconversion professionnelle. Ce projet est le fruit
            d'un travail d'équipe après 4 mois de formation intensive chez
            O'clock.
          </p>
        </div>
        <img
          className="about-page-section-plant-image"
          src="https://res.cloudinary.com/dtnoanxmt/image/upload/c_scale,w_260/v1643378630/photo-1520412099551-62b6bafeb5bb_h6lepk.jpg"
          alt="plante"
        />
      </section>
      <section className="about-page-section">
        <h2 className="about-page-section-team-title">L'équipe O'My Plant</h2>
        <div className="about-page-section-content">
          <div className="about-page-section-member">
            <img
              className="about-page-section-member-avatar"
              alt="Avatar de Marie"
              src={marie}
            />
            <h2 className="about-page-section-member-name">Marie</h2>
            <h3 className="about-page-section-member-role">
              Dev Front
              <br />
              Product Owner
            </h3>
          </div>
          <div className="about-page-section-member">
            <img
              className="about-page-section-member-avatar"
              alt="Avatar de Raïd"
              src={raid}
            />
            <h2 className="about-page-section-member-name">Raïd</h2>
            <h3 className="about-page-section-member-role">
              Dev Front <br /> Scrum Master
            </h3>
          </div>
          <div className="about-page-section-member">
            <img
              className="about-page-section-member-avatar"
              alt="Avatar d'Evelyne'"
              src={evelyne}
            />
            <h2 className="about-page-section-member-name">Evelyne</h2>
            <h3 className="about-page-section-member-role">Lead Dev Front</h3>
          </div>
          <div className="about-page-section-member">
            <img
              className="about-page-section-member-avatar"
              alt="Avatar de Dylan"
              src={dylan}
            />
            <h2 className="about-page-section-member-name">Dylan</h2>
            <h3 className="about-page-section-member-role">Lead Dev Back</h3>
          </div>
          <div className="about-page-section-member">
            <img
              className="about-page-section-member-avatar"
              alt="Avatar de John"
              src={john}
            />
            <h2 className="about-page-section-member-name">John</h2>
            <h3 className="about-page-section-member-role">
              Dev Back <br /> Git Master
            </h3>
          </div>
        </div>
      </section>
      <section className="about-page-section">
        <h2 className="about-page-section-team-title">Nos valeurs</h2>
        <div className="about-page-section-content">
          <article className="about-page-section-values">
            <img
              className="about-page-section-values-image"
              src={collaboration}
              alt="collaboration"
            />
            <div className="about-page-section-values-name">Collaboration</div>
          </article>
          <article className="about-page-section-values">
            <img
              className="about-page-section-values-image"
              src={nature}
              alt="nature"
            />
            <div className="about-page-section-values-name">Nature</div>
          </article>
          <article className="about-page-section-values">
            <img
              className="about-page-section-values-image"
              src={connected}
              alt="connecté"
            />
            <div className="about-page-section-values-name">Connecté</div>
          </article>
        </div>
      </section>
      <Quotes page="about" quote={<AboutQuote />} author="Proverbe arabe" />
    </main>
  );
};

export default About;
