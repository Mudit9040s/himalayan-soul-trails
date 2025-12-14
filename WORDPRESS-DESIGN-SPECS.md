# HIMO WordPress Theme Design Specifications

A complete design guide for recreating the HIMO Himalayan trekking website as a WordPress theme.

---

## 🎨 Color Palette

### Primary Colors (HSL Format)
```css
/* Background Colors */
--background: hsl(220, 20%, 8%);        /* #0f1419 - Deep navy-charcoal */
--foreground: hsl(45, 30%, 95%);        /* #f8f4ed - Warm off-white */

/* Primary Brand Color (Gold/Amber) */
--primary: hsl(38, 70%, 50%);           /* #d9a01d - Rich amber gold */
--primary-foreground: hsl(220, 20%, 8%);

/* Secondary */
--secondary: hsl(220, 15%, 15%);        /* #1f2328 - Dark slate */
--secondary-foreground: hsl(45, 30%, 95%);

/* Muted/Subtle */
--muted: hsl(220, 15%, 18%);            /* #262b32 */
--muted-foreground: hsl(45, 10%, 60%);  /* #a19d94 */

/* Accent */
--accent: hsl(38, 50%, 25%);            /* #5f4a1f - Deep gold */
--accent-foreground: hsl(45, 30%, 95%);

/* Card Surfaces */
--card: hsl(220, 18%, 12%);             /* #181c22 */
--card-foreground: hsl(45, 30%, 95%);

/* Borders */
--border: hsl(38, 30%, 25%);            /* #52462e - Gold-tinted border */

/* Destructive/Error */
--destructive: hsl(0, 62%, 30%);
--destructive-foreground: hsl(45, 30%, 95%);
```

### Gradient Definitions
```css
/* Hero Gradient Overlay */
--gradient-hero: linear-gradient(
  to bottom,
  hsl(220, 20%, 8%, 0.3) 0%,
  hsl(220, 20%, 8%, 0.6) 50%,
  hsl(220, 20%, 8%, 0.9) 100%
);

/* Gold Gradient */
--gradient-gold: linear-gradient(
  135deg,
  hsl(38, 70%, 50%) 0%,
  hsl(38, 50%, 35%) 100%
);

/* Card Hover Gradient */
--gradient-card: linear-gradient(
  180deg,
  transparent 0%,
  hsl(220, 20%, 8%, 0.95) 100%
);
```

---

## 🔤 Typography

### Font Families
```css
/* Display/Headings - Playfair Display (Google Fonts) */
font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;

/* Body Text - Inter (Google Fonts) */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Google Fonts Link
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
```

### Type Scale
| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| H1 (Hero) | Playfair Display | 4rem-6rem | 700 | 1.1 | -0.02em |
| H2 (Section) | Playfair Display | 2.5rem-3.5rem | 600 | 1.2 | -0.01em |
| H3 (Card Title) | Playfair Display | 1.5rem-2rem | 600 | 1.3 | 0 |
| Body Large | Inter | 1.25rem | 300 | 1.7 | 0 |
| Body | Inter | 1rem | 400 | 1.6 | 0 |
| Body Small | Inter | 0.875rem | 400 | 1.5 | 0 |
| Caption | Inter | 0.75rem | 500 | 1.4 | 0.05em |
| Nav Links | Inter | 0.875rem | 500 | 1 | 0.05em |

---

## 📐 Spacing System

### Base Unit: 4px (0.25rem)

| Token | Value | Use Case |
|-------|-------|----------|
| xs | 4px | Tight spacing, icons |
| sm | 8px | Small gaps |
| md | 16px | Standard component padding |
| lg | 24px | Section internal padding |
| xl | 32px | Component gaps |
| 2xl | 48px | Section gaps |
| 3xl | 64px | Large section padding |
| 4xl | 96px | Hero/major section padding |
| 5xl | 128px | Maximum section padding |

### Container Widths
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .container { padding: 0 48px; }
}

@media (min-width: 1024px) {
  .container { padding: 0 64px; }
}
```

---

## 🎭 Component Styles

### Buttons

#### Primary Button (Gold)
```css
.btn-primary {
  background: linear-gradient(135deg, hsl(38, 70%, 50%), hsl(38, 50%, 35%));
  color: hsl(220, 20%, 8%);
  padding: 16px 32px;
  border-radius: 2px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px hsl(38, 70%, 50%, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px hsl(38, 70%, 50%, 0.4);
}
```

#### Outline Button (Hero)
```css
.btn-outline {
  background: transparent;
  color: hsl(45, 30%, 95%);
  padding: 16px 32px;
  border: 1px solid hsl(45, 30%, 95%, 0.3);
  border-radius: 2px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: hsl(45, 30%, 95%, 0.1);
  border-color: hsl(45, 30%, 95%, 0.5);
}
```

### Cards

#### Program Card
```css
.program-card {
  background: hsl(220, 18%, 12%);
  border: 1px solid hsl(38, 30%, 25%, 0.3);
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.program-card:hover {
  transform: translateY(-8px);
  border-color: hsl(38, 70%, 50%, 0.5);
  box-shadow: 0 25px 50px hsl(0, 0%, 0%, 0.5);
}

.program-card-image {
  aspect-ratio: 4/3;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.program-card:hover .program-card-image {
  transform: scale(1.1);
}
```

#### Feature Card (Why HIMO)
```css
.feature-card {
  padding: 32px;
  border: 1px solid hsl(38, 30%, 25%, 0.2);
  border-radius: 4px;
  background: linear-gradient(
    180deg,
    hsl(220, 18%, 12%) 0%,
    hsl(220, 20%, 8%) 100%
  );
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: hsl(38, 70%, 50%, 0.3);
  transform: translateY(-4px);
}

.feature-icon {
  width: 48px;
  height: 48px;
  color: hsl(38, 70%, 50%);
  margin-bottom: 24px;
}
```

### Navigation

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 24px 0;
  transition: all 0.3s ease;
}

.nav.scrolled {
  background: hsl(220, 20%, 8%, 0.95);
  backdrop-filter: blur(12px);
  padding: 16px 0;
  border-bottom: 1px solid hsl(38, 30%, 25%, 0.2);
}

.nav-link {
  color: hsl(45, 30%, 95%);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 1px;
  background: hsl(38, 70%, 50%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}
```

---

## 🖼️ Section Layouts

### Hero Section
- **Height**: 100vh (full viewport)
- **Background**: Full-bleed image with gradient overlay
- **Content**: Centered, max-width 900px
- **Elements**: Eyebrow text, H1, tagline, 2 CTA buttons, scroll indicator

### Philosophy Section
- **Background**: Solid background color
- **Padding**: 128px vertical
- **Content**: Centered quote with decorative border
- **Quote marks**: Large decorative elements

### Programs Section
- **Layout**: 3-column grid (responsive)
- **Gap**: 32px
- **Cards**: Equal height with image aspect ratio 4:3

### Why HIMO Section
- **Layout**: 2x3 grid of feature cards
- **Icons**: Lucide icons (Shield, Mountain, Users, Compass, Heart, Leaf)

### Call to Action Section
- **Background**: Gradient or subtle pattern
- **Content**: Centered with H2 and CTA button

### Footer
- **Layout**: 4-column grid (Logo, Links, Contact, Social)
- **Background**: Darker than main background
- **Border**: Top border in gold

---

## 🎬 Animations

### Fade Up (on scroll)
```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.8s ease-out forwards;
}
```

### Float (Hero scroll indicator)
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

### Stagger Children
Apply increasing animation-delay to child elements:
```css
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |
| 2xl | 1536px | Extra large |

---

## 📝 Content Structure

### Pages
1. **Home** (/)
2. **Expeditions** (/expeditions)
3. **Custom Treks** (/custom-treks)
4. **Spiritual Journeys** (/spiritual-journeys)
5. **Contact** (/contact)

### Home Sections (in order)
1. Navigation (fixed)
2. Hero
3. Philosophy
4. Programs (3 cards)
5. Why HIMO (6 features)
6. Call to Action
7. Footer

### Program Cards Content
| Program | Description | CTA |
|---------|-------------|-----|
| Himalayan Trekking | Professionally led expeditions with certified mountaineers... | Explore Expeditions |
| Custom Treks | Fully personalized experiences tailored to your preferences... | Plan Your Trek |
| Spiritual Journeys | Follow paths once walked by saints and sages... | Begin Your Journey |

### Why HIMO Features
1. **Certified Experts** - Qualified mountaineers with multiple first ascents
2. **Unique Routes** - Paths less traveled, beyond commercial formats
3. **Small Groups** - Intimate experiences with personalized attention
4. **Safety First** - Rigorous protocols and emergency preparedness
5. **Cultural Immersion** - Deep connection with Himalayan traditions
6. **Eco-Conscious** - Sustainable practices protecting the mountains

---

## 🖼️ Image Specifications

| Image | Dimensions | Aspect Ratio | Use |
|-------|------------|--------------|-----|
| Hero | 1920x1080 | 16:9 | Hero background |
| Program Cards | 800x600 | 4:3 | Program thumbnails |
| Gallery | 1200x800 | 3:2 | Gallery items |

### Image Style Guidelines
- Dramatic Himalayan landscapes
- Warm, golden hour lighting preferred
- High contrast, cinematic color grading
- Slight desaturation for editorial feel

---

## 🔗 External Resources

### Icons
Use [Lucide Icons](https://lucide.dev/) for consistent iconography:
- Shield, Mountain, Users, Compass, Heart, Leaf
- Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin

### Fonts
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- [Inter](https://fonts.google.com/specimen/Inter)

---

## WordPress-Specific Notes

### Recommended Plugins
- **ACF Pro** - For custom fields and flexible content
- **Yoast SEO** - For SEO optimization
- **Contact Form 7** or **WPForms** - For contact form
- **GSAP/ScrollTrigger** - For scroll animations

### Custom Post Types Suggested
- `expedition` - For individual trek listings
- `testimonial` - For customer reviews
- `team_member` - For guide profiles

### Customizer Settings to Include
- Logo upload
- Primary color picker
- Social media links
- Contact information
- Footer text

---

*Generated from HIMO React application - Ready for WordPress theme development*
