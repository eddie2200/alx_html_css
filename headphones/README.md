# HEADPHONES WEBSITE
This is a practice assignment meant to strengthen my HTML and CSS skills by building a basic headphones website.
A blue print of the final product has been provided to acts as a model guide but everything should be implemented from scratch and individually customized.

## Basic HTML Structure
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
  </header>

  <main>
  </main>

  <section>
  </section>

  <footer>
  </footer>
  
</body>
</html>
```
## Page Componenets:
---
### Landing Page

A landing page is a standalone web page created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after clicking a link in an email, ad, social media post, or other source.
```
  <header id="header">
    <div id="logo"></div>
    <div id="navigationBar">
      <nav>
        <a href="#what-we-do">What we do</a>
        <a href="#our-results">Our Results</a>
        <a href="#contact-us">Contact Us</a>
      </nav>
    </div>
  </header>
  <main>
    <section id="section-1">
      <div id="hero-div1">
        <div class="hero-text">
          <div id="hero-text-div1">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
          </div><br>
          <div id="hero-text-div2">
            <p>Facilis eos omnis sequi, eligendi architecto odio inventore doloribus assumenda</p>
          </div>
        </div>
        <div>
          <button Id="cta" type="button">Call To Action</button>
        </div>
        <div class="hero-text">
          <p style="display: block; margin: 200px 20px ;">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia quas dignissimos in maxime, id optio
            exercitationem odit laboriosam odio suscipit quia ratione ad repudiandae magnam omnis nisi quis dolore ex
          </p>
        </div>
      </div>
    </section>
```
## What we do section
This section tells the viewer what the comapany deals with, what products they sell or develop and all that. This is how the section looks like on HTML;
```
    <section>
      <div id="whatWedoDiv">
        <h3 id="what-we-do">What we do</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Officia quas dignissimos in maxime, id optio</p>
        <p>exercitationem odit laboriosam odio suscipit quia</p>
        <p>ratione ad repudiandae magnam omnis nisi quis dolore ex</p>
      </div>
      <div id="what-we-do-div2">
        <div class="all-img">
          <img class="img"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/017/046/small/abstract-music-circle-equalizer-background-video.jpg"
            alt="Music Frequency">
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas dignissimos in maxime</p>
        </div>

        <div class="all-img">
          <img class="img" src="https://i.pinimg.com/736x/10/a9/53/10a9533bc9b7adac43cc01cf18445788.jpg"
            alt="Movie Roll Drawing">
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas dignissimos in maxime</p>
        </div>


        <div class="all-img">
          <img class="img" src="https://www.shyamh.com/images/blog/music.jpg" alt="music">
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas dignissimos in maxime</p>
        </div>

        <div class="all-img">
          <img class="img"
            src="https://thumbs.dreamstime.com/b/ear-listening-to-music-notes-illustration-ear-musical-notes-symbolizing-listening-to-music-sound-audio-ear-332382039.jpg"
            alt="musical ear">
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas dignissimos in maxime</p>
        </div>
      </div>
    </section>
```

### Rsults sections
Shows the viewer the results they have been able to achieve over the years, in ranks, sales etc. This is how this sction look like in HTML;
```
    <section>
      <div id="our-results">
        <h3>Our results speak for themselves</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <p>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        </p>
        <p>commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
        <p>nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</p>
        <p>animid est laborum.</p>
      </div>
      <div class="combined-shape">
        <h1>+2%</h1>
        <p class="combinedP">Lorem Ipsum</p>
      </div>

      <div class="combined-shape">
        <h1>+2%</h1>
        <p class="combinedP">Lorem Ipsum</p>
      </div>

      <div class="combined-shape">
        <h1>+2%</h1>
        <p class="combinedP">Lorem Ipsum</p>
      </div>

      <div class="combined-shape">
        <h1>+2%</h1>
        <p class="combinedP">Lorem Ipsum</p>
      </div>
    </section>
```
## Contact section
This a section that allows the viewer to leave their name email and a short message to be veiewd by the company satff/other person on the opposite side of the website. This is how it looks on HTML:
```
    <section>
      <form id="contact-us" action="/submit" method="POST">

        <label for="username">Username:</label><br>
        <input class="input" type="username" id="username" name="username" required>

        <br><br>

        <label for="email">Email Address:</label> <br>
        <input class="input" type="email" id="email" name="email" required>

        <br><br>

        <label for="yourMessage">Message:</label><br>
        <input class="input" type="yourMessage" id="yourMessage" name="yourMessage" required>

        <br><br>

        <button type="submit">Submit</button>

      </form>
    </section>
```
## Footer
This is the last part of the document that contains the copyright info, social media hyperlinks and the logo.
```
  <footer>
    <div id="logo"> </div>
    <nav>
      <button id="insta" type="button"></button>
      <button id="fb" type="button"></button>
      <button id="twitter" type="button"></button>
    </nav>
    <&copy; headphones 2020>
  </footer>
```
### Basic CSS
CSS properties were used to style the document by adding background image, text font, color, borders, margins, animations, images etc using the following propperties:

```
* {}

#header {
  background-color: #ade5ea;
  color: black;
  padding: 1px 0;
  height: 2cm;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 5px 0px #384e53;
}

#navigationBar,
a {
  display: inline-block;
  /* Makes links stack vertically */
  text-decoration: none;
  /* Removes underline */
  color: #ffffff;
  /* Makes them look like normal text */
  font-size: 18px;
  margin: 10px 20px;
  /* Adds space between items */
  font-family: sans-serif;
  border: 10px;
  font-weight: bolder;
}

#navigationBar,
a:hover {
  color: purple;
}

#section-1 {
  background-image: url('https://img.freepik.com/premium-photo/positive-person-listening-music-wireless-headphones-enjoying-audio-sound-mp3-song-headset-confident-guy-using-earphones-enjoy-stereo-record-radio-rhythm-studio_482257-40413.jpg?w=360');
  background-size: cover;
  /* Makes the image cover the whole area */
  background-position: center;
  /* Centers the image */
  background-repeat: no-repeat;
  /* Prevents the image from repeating */
  background-position: center;
  height: 100vh;
  /* Makes the section full screen */
  color: white;
  /* Text color for visibility */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-text {
  display: flex;
  justify-content: center;
  /* horizontal */
  align-items: center;
  /* vertical */
  height: 200px;
  /* just to see the box */
  width: 300px;
}

#hero-div1 {
  width: 400px;
  padding: 20px;
}

.hero-text {
  width: 300px;
  padding: 20px;
  border-color: red;
  display: flex;
  flex-direction: column;
}

#hero-text-div1 {
  display: block;
  width: 100%;
}

#hero-text-div2 {
  display: block;
  width: 100%;
}

#cta {
  background-color: purple;
  color: #ffffff;
  border-radius: 10px 50px;
  padding: 15px 30px;
  font-size: 18px;
}

.img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 2px solid black;
  size: 20px;
}

#what-we-do-div2 {
  display: flex;

  /* center vertically */
  align-items: center;
  /* center horizontally */
  height: 70vh;
  /* full screen height */
  text-align: center;
  gap: 2px;
  /* space between lines */
  margin: 0px 10px;
}

.all-img {
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  margin: 7%;
  align-items: center;
  padding: 10px 10px;
  border: 20px;
  margin-top: 10px;
}

#whatWedoDiv {
  display: flex;

  /* center vertically */
  align-items: center;
  /* center horizontally */
  height: 70vh;
  /* full screen height */
  text-align: center;
  gap: 2px;
  /* space between lines */
  margin: 0px 10px;
}

#our-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* center vertically */
  align-items: center;
  /* center horizontally */
  height: 70vh;
  /* full screen height */
  text-align: center;
  gap: 0.5px;
  /* space between lines */

}

.combined-shape {
  position: relative;
  width: 100px;
  height: 100px;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  background-color: rgb(27, 54, 78);
  /* Square color */
  margin: 90px 100px;
  /* Center horizontally */
  display: inline-block;
  text-align: center;

}

/* Triangle on top using ::before */
.combined-shape::before {
  content: "";
  position: absolute;
  top: -50px;
  /* Moves triangle above the square */
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid red;
  /* Same color as square */

}

.combinedP {
  text-align: center;
  margin: 5px;
}

body {
  background-color: #3b6a8a;
}

.input {
  background-color: #3b6a8a;
  border: 2px solid black;
}

#contact-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* center vertically */
  align-items: center;
  /* center horizontally */
  height: 70vh;
  /* full screen height */
  text-align: center;
  gap: 2px;
  /* space between lines */

}

.img {
  width: 200px;
  /* adjust as needed */
  animation: float 3s ease-in-out infinite;
  transition: transform 0.3s ease;
}

/* Float up and down */
@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

/* Expand on hover */
.float-image:hover {
  transform: scale(1.05);
}
```
### JS
This project was not JS inclusive just basic HTML and CSS.
