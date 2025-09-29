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

## 1. DECLARATION
The declaration <!DOCTYPE html> is placed at the very top of an HTML file and tells the web browser that the document is written in HTML5, which is the latest standard of HTML.
- It is not an HTML tag — it's an instruction to the browser.
- It helps the browser render the page correctly by using standards mode, rather than quirks mode (which may mimic old browser behavior).
- The declaration is case-insensitive but is conventionally written in uppercase: <!DOCTYPE html>.
Example:
```html
<!DOCTYPE html>
```
## 2. HTML 
The html tag is the root element of an HTML document. It wraps all the content on the page, including both the head and body sections. Everything that makes up the website — from metadata and page title to the visible content like headings, images, links, and buttons — is placed inside this tag. The <html> tag tells the browser that what follows is HTML code. It usually includes a lang attribute (like lang="en") to define the language of the content for accessibility and SEO purposes.

Example:
```html
<html lang="en">
  <head></head>
  <body></body>
</html>
```
## 3. HEAD 
The head tag contains metadata and settings that are not displayed directly on the webpage but are essential for the browser, search engines, and other services. It includes things like the page title, character encoding, links to CSS stylesheets, icons, and other metadata. The content inside <head> helps control how the webpage behaves and how it’s described when shared or indexed online.
Its contents include: 
| HTML Tag                             | Purpose / Description                                                         |
|--------------------------------------|-------------------------------------------------------------------------------|
| `<!DOCTYPE html>`                    | Declares the document type as HTML5.|
| `<meta charset="UTF-8">`             | Sets character encoding to UTF-8 (supports most characters worldwide).|
| `<title>`                            | Sets the title of the page (shown in browser tab and search results).|
| `<meta name="viewport" ...>`         | Makes the page responsive on all devices (especially mobile).|
| `<link rel="stylesheet" href="...">` | Links an external CSS file to style the page.|
| `<link rel="icon" href="...">`       | Links to the favicon (small icon in browser tab).|
| `<meta name="description" ...>`      | Provides a short description of the page for search engines.|
| `<meta name="keywords" ...>`         | (Optional) Lists keywords for SEO purposes.|
| `<meta name="author" ...>`           | Specifies the author's name.|
| `<script src="..."></script>`        | Links to an external JavaScript file (for interactivity or functionality).|
|`<style>...</style>`                  | (Optional) Adds internal CSS styles directly in the head.|


Example: 
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <script src="https://kit.fontawesome.com/4a2b055604.js" crossorigin="anonymous"></script>
  <title>Tutorials</title>
  <link rel="stylesheet" href="styles.css" />
</head>
```
## 4. BODY
The body tag defines the main content area of an HTML document. Everything that you want to display on the web page — such as text, images, buttons, navigation, sections, etc. — goes inside the <body>.
The browser renders only what’s inside the <body> tag. Anything outside it (like inside <head>) is not visible to the user.
The elements under it include:
| Tag                 | Purpose                                    |
|---------------------|--------------------------------------------|
|header	              |Top navigation and branding (logo, links)   |
|main	                |Central content and sections of the website |
| footer	(Optional)  |Bottom area for legal, links, etc.          |

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

The main tag contains the core content of the website. It is divided into multiple sections that guide the user through the site's purpose, offerings, and information. Here's a breakdown of each section within the <main>:

### Hero Section

This is the introductory section meant to grab attention. It contains:
- A prominent title encouraging users to “Get schooled”.
- Subtitles that highlight core values: “SMILES”, “GRIN”, and “LAUGH”.
- A call-to-action button: “REGISTER FOR FREE”.
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
- A heading: “Learn from the pros”
- A series of testimonial cards featuring images, names, and titles.

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
- A user image.
- A quote block highlighting positive feedback.
- Author's name and role.

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
- An image.
- Title and description.
- Author info.
- Star-based rating.
- Duration.

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
- A title.
- Multiple cards, each highlighting a benefit or feature.
- A call-to-action button to register.

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
- A question (heading).
- A detailed answer (paragraph).

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

### (c). Footer
The footer element serves as the bottom section of the webpage, providing key information and branding. Inside it, a section with the class "footer-content" groups the main footer elements together for organization and styling. This section contains a container div that holds the website’s logo, represented by an image, which reinforces brand identity. Adjacent to the logo is a set of social media icons (Facebook, Twitter, Instagram) rendered using font-awesome classes, enabling users to easily navigate to the site’s social media profiles. Below this, a simple paragraph displays the copyright notice "©smileschool 2020," which legally protects the site content and informs users of the ownership and date.

Example:
``` html
<footer>   <!-- Bottom section of the website containing branding, social media icons, and copyright -->
  <section class="footer-content">   <!-- Wrapper for footer elements -->
    <div>   <!-- Container for logo and social media icons -->
      <img src="..." alt="logo" class="footer-logo" />   <!-- Website or company logo -->
      <div class="social-icons">   <!-- Icons linking to social media platforms -->
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
    <p>©smileschool 2020</p>   <!-- Copyright notice -->
  </section>
</footer>
```
### In summary:
This HTML project represents a complete, well-structured web page designed to promote an online tutorial platform. It begins with a proper HTML5 declaration and uses the <head> section to link essential resources like CSS styles, JavaScript, and responsive settings. The <body> is organized into clear, semantic sections: a header with navigation links and branding, a main section featuring an engaging hero banner, professional testimonials, tutorial previews, and FAQs—all designed to inform and attract users. The layout is enhanced with buttons and images to improve visual appeal and user interaction. Finally, a footer reinforces branding and includes social media icons, ensuring the site is informative and user-friendly from top to bottom. This structure follows modern web development best practices, combining visual design, accessibility, and responsiveness.


