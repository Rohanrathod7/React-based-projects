export default function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <h2 className="main__title">Rohan Rathod</h2>
        <h5 className="main__description">frontEnd Devloper</h5>
        <p className="main__description">rohanx.com</p>
        <div className="button">
            <button className="main__button"><i className="fa-solid fa-envelope"></i> Email</button>
            <button className="main__button">LinkedIn</button>
        </div>
        <div className="about-interest">
            <div className="about">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="about">
                <h3>Interest</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
      </div>
    </main>
  );
}