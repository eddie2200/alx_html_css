# Tutorials Site (HTML Project)

This is a **basic HTML5 project** that demonstrates proper **semantic structure** from `<!DOCTYPE html>` down to `<footer>`.

---

## 📂 Structure

- **`<!DOCTYPE html>`** → declares HTML5 document.  
- **`<html lang="en">`** → root element, sets language.  
- **`<head>`** → metadata: charset, viewport, and title.  
- **`<body>`** → all visible content goes here.  

---

## 🔹 Sections

## 1. BODY
The <body> tag defines the main content area of an HTML document. Everything that you want to display on the web page — such as text, images, buttons, navigation, sections, etc. — goes inside the <body>.
The browser renders only what’s inside the <body> tag. Anything outside it (like inside <head>) is not visible to the user.
The elements under it include:
```
| Tag                 | Purpose                                 |
|---------------------|-----------------------------------------|
|<header>	            |Top navigation and branding (logo, links)|
|<main>	              |Central content and sections of the website|
|<footer>	(Optional)  |Bottom area for legal, links, etc.|
```

### (a). Header
The header is found inside the body element and it contains the navigation links to the differnt parts of your website ie: Course, Pricing and Login in a list. It also contains the Logo (mostly an image and at times image and text) An example of the header.
```html
  <header class="header">
    <nav class="nav-links">
      <img src="https://fakeimg.pl/250x250?text=Sample+Logo" alt="logo" class="logo" />
      <ul class="nav-menu">
        <li><a href="#">COURSE</a></li>
        <li><a href="#">PRICING</a></li>
        <li><a href="#">LOGIN</a></li>
      </ul>
    </nav>
  </header>
```

### (b). Main

The <main> tag contains the core content of the website. It is divided into multiple sections that guide the user through the site's purpose, offerings, and information. Here's a breakdown of each section within the <main>:

### Hero Section

This is the introductory section meant to grab attention. It contains:
A prominent title encouraging users to “Get schooled”.
Subtitles that highlight core values: “SMILES”, “GRIN”, and “LAUGH”.
A call-to-action button: “REGISTER FOR FREE”.
Example:
```html
<section class="hero">
  <div>
    <h1 class="hero-title">Get schooled</h1>
    <span class="hero-subtitle">SMILES</span>
    <span class="hero-subtitle">GRIN</span>
    <span class="hero-subtitle">LAUGH</span>
    <button class="cta-button">REGISTER FOR FREE</button>
  </div>
</section>
```
### Testimonials Section

This part builds trust and credibility by showcasing professionals who are associated with the platform. It includes:
A heading: “Learn from the pros”
A series of testimonial cards featuring images, names, and titles.

Example:
```html
<div class="testimonials">
  <h2 class="section-heading"><span>Learn</span> from the pros</h2>
  <div class="testimonial-cards">
    <!-- Multiple .testimonial-card elements -->
  </div>
</div>
```
### Quote Section

Provides a featured quote from a satisfied user. This section includes:
A user image.
A quote block highlighting positive feedback.
Author's name and role.

Example:
```html
<section class="quote-section">
  <div class="quote-image">
    <img src="..." alt="image" />
  </div>
  <div class="quote-content">
    <blockquote class="quote-text">« Those tutorials are concise... »</blockquote>
    <h3 class="quote-author">NAME</h3>
    <p class="quote-role">weather presenter</p>
  </div>
</section>
```
### Tutorials Section

Highlights the most popular tutorials offered by the platform. Each tutorial includes:
An image.
Title and description.
Author info.
Star-based rating.
Duration.

Example:
``` html
<section class="tutorials-section">
  <h2 class="section-heading">Most popular tutorials</h2>
  <div class="tutorial-card">
    <!-- Image, title, author, rating, and duration -->
  </div>
  <!-- More tutorial cards -->
</section>
```

### Membership Section

Promotes the free membership with benefits. It includes:
A title.
Multiple cards, each highlighting a benefit or feature.
A call-to-action button to register.

Example:
```html
<section class="membership-section">
  <h2>Free membership</h2>
  <div class="membership-card">
    <!-- Image, heading, and description -->
  </div>
  <!-- More membership cards -->
  <button class="cta-button">REGISTER FOR FREE</button>
</section>
```

### FAQ Section
Provides answers to common questions. It's structured in two columns, each containing FAQ items.
Each item contains:
A question (heading).
A detailed answer (paragraph).

Example:
``` html
<section class="faq-section">
  <h2>F.A.Q</h2>
  <div class="faq-container">
    <div class="faq-column">
      <div class="faq-item">
        <h3>How does this work?</h3>
        <div class="faq-answer">
          <!-- FAQ content -->
        </div>
      </div>
    </div>
    <!-- Second column -->
  </div>
</section>
```



