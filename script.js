:root {
  --main-bg: #1a1e29;
  --accent: #e35d6a;
  --text: #fff;
  --soft: #878ca3;
  --btn-hover: #ffb3bb;
  --border-radius: 22px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Nunito', 'Montserrat', sans-serif;
  background: var(--main-bg);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.6;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 7vw;
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(26, 30, 41, 0.95);
  z-index: 20;
}

nav .logo {
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 2px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 35px;
}

nav li a {
  color: var(--text);
  text-decoration: none;
  font-size: 1.06em;
  transition: color 0.2s;
  font-weight: 600;
}

nav li a:hover {
  color: var(--accent);
}

header {
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10vh 7vw 0 7vw;
  flex-wrap: wrap;
  margin-bottom: 7vh;
  gap: 40px;
}

.header-content {
  max-width: 450px;
  z-index: 1;
}

.header-content h1 {
  font-size: 2.9rem;
  margin-bottom: 14px;
  font-weight: 700;
}

.header-content .accent {
  color: var(--accent);
}

.subtitle {
  font-size: 1.25rem;
  color: var(--soft);
  margin-bottom: 30px;
  font-weight: 400;
}

.btn {
  padding: 13px 40px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.07rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.18s;
  box-shadow: 0 8px 25px 0 #e35d6a2c;
}

.btn:hover {
  background: var(--btn-hover);
  color: var(--main-bg);
}

.header-image {
  width: 310px;
  height: 310px;
  background: url('assets/profile.png') no-repeat center/cover, linear-gradient(120deg,var(--accent),#893253);
  border-radius: 50%;
  box-shadow: 0 10px 40px 0 #e35d6a18;
  grid-area: headerImage;
}

/* -------SECTIONS------- */
section {
  padding: 70px 8vw;
  max-width: 1100px;
  margin: 0 auto 36px;
}

section h2 {
  font-size: 2.2rem;
  margin-bottom: 27px;
  font-weight: 700;
}

#about p {
  color: var(--soft);
  font-size: 1.18em;
  max-width: 700px;
}

/* ---- Portfolio ---- */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 40px 30px;
}

.portfolio-item {
  background: #23273c;
  border-radius: var(--border-radius);
  box-shadow: 0 7px 22px 0 #23273c32;
  padding: 23px 18px 18px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform .21s;
}

.portfolio-item:hover {
  transform: translateY(-7px) scale(1.04);
}

.portfolio-item img {
  width: 100%;
  border-radius: 18px;
  margin-bottom: 18px;
  object-fit: cover;
  height: 170px;
  background: #bbb;
}

.portfolio-item h3 {
  font-size: 1.2em;
  margin-bottom: 9px;
}

.portfolio-item p {
  color: var(--soft);
  font-size: 1.04em;
  margin-bottom: 13px;
  text-align: center;
}

/* Tiny button */
.btn-mini {
  font-size: 0.98em;
  padding: 7px 22px;
  background: var(--accent);
  border: none;
  border-radius: 11px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: background .18s;
  cursor: pointer;
}

.btn-mini:hover {
  background: var(--btn-hover);
  color: var(--main-bg);
}

/* --- Contact --- */
#contact form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 430px;
  margin-top: 15px;
}

#contact input,
#contact textarea {
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: #2d3147;
  color: var(--text);
  font-size: 1em;
  font-family: inherit;
  resize: none;
  outline: none;
}

#contact textarea {
  min-height: 80px;
}

#contact button {
  align-self: flex-end;
}

footer {
  text-align: center;
  padding: 22px 0 12px 0;
  color: var(--soft);
  font-size: .99em;
}

/* --- Responsive --- */
@media (max-width: 950px) {
  header {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 100px;
  }
  .header-image {
    margin-top: 40px;
  }
  nav {
    padding: 22px 4vw;
  }
}

@media (max-width: 650px) {
  nav ul {
    gap: 19px;
  }
  header {
    min-height: 66vh;
    padding-top: 120px;
    margin-bottom: 3vh;
  }
  .header-image {
    width: 180px;
    height: 180px;
  }
  section {
    padding: 40px 3vw;
  }
  section h2 {
    font-size: 1.3em;
  }
  .portfolio-grid {
    gap: 18px 0;
  }
}
