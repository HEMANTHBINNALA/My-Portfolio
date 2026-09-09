# Binnala Hemanth — Personal Portfolio

> A responsive, modern developer portfolio showcasing my background, technical skills, projects, experience, certifications, and contact information.

[![Portfolio](https://img.shields.io/badge/Portfolio-Live%20Site-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white)](https://github.com/HEMANTHBINNALA/My-Portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-HEMANTHBINNALA-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HEMANTHBINNALA)

## About the Portfolio

This repository contains the source code and supporting assets for my personal portfolio website. The site presents my profile as a B.Tech Computer Science & Data Science student and highlights my interests in **AI/ML, Agentic AI, data science, cloud technologies, and full-stack development**.

The portfolio is intentionally lightweight and browser-first: the main experience is built with HTML, custom CSS, and vanilla JavaScript, with external font/icon resources loaded from the web.

## What You Can Explore

- **Home** — introduction, professional headline, profile summary, project CTA, and CV access.
- **About** — academic background and qualifications.
- **Skills** — programming, web/database, AI/ML/cloud, core CS concepts, analytical skills, and languages.
- **Projects** — featured projects with technology stacks, descriptions, and direct GitHub links.
- **Experience** — professional and internship information presented within the portfolio.
- **Contact** — ways to connect and reach out.
- **Theme** — dark/light theme switching with the selected theme persisted in browser storage.
- **Responsive navigation** — mobile navigation menu and active-section highlighting while scrolling.
- **Motion effects** — scroll-reveal animations and a canvas-based interactive particle background.

## Featured Projects

### RAG-Based Customer Support System

An AI-powered customer-support application focused on document-grounded question answering.

**Technologies:** `LangGraph` `ChromaDB` `Sentence Transformers` `Groq/Gemini`

**Highlighted capabilities:**

- PDF and CSV ingestion.
- Semantic retrieval using vector embeddings and cosine-similarity-based search.
- Human-in-the-Loop (HITL) escalation for cases requiring additional review.
- Streamlit-based user interface.
- Confidence information and debugging support.
- Designed to handle large uploaded knowledge sources.

**Repository:** https://github.com/HEMANTHBINNALA/Rag-Customer-Support

### AssignFlow — Assignment Management System

A full-stack academic assignment management platform for faculty and students.

**Technologies:** `PHP` `MySQL` `HTML` `CSS` `JavaScript`

**Highlighted capabilities:**

- Role-based workflows for faculty and students.
- Relational database design with foreign-key relationships.
- Assignment and class/roster management.
- Multi-format student submissions.
- In-browser audio/video recording support.
- Faculty-side grading workflow.

**Repository:** https://github.com/HEMANTHBINNALA/ASSIGNFLOW/tree/main/assignflow

## Technology Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Responsive layouts
- Custom animations and transitions
- Google Fonts — Outfit
- Phosphor Icons

### Programming & Data

- C
- C++
- Java
- Python
- R
- JavaScript
- SQL
- MySQL

### AI / ML / Cloud

- LangChain
- LangGraph
- ChromaDB
- Sentence Transformers
- Groq API
- Gemini API
- FastAPI
- AWS

### Core Computer Science

- Object-Oriented Programming (OOP)
- Database Management Systems (DBMS)
- Computer Networking
- Operating Systems
- Software Development Life Cycle (SDLC)
- Software Engineering
- Data analysis
- Semantic search
- Problem solving
- System thinking

## Repository Structure

```text
My-Portfolio/
├── index.html                         # Main portfolio page
├── assets/
│   ├── css/
│   │   └── style.css                 # Site styling and themes
│   └── js/
│       └── script.js                 # Navigation, theme, reveal and particles
├── Hemanthpic.jpg                     # Portfolio profile image
├── Hemanth_styled.png                 # Additional profile/portfolio image
├── hemanth.png                        # Additional image asset
├── Online Certifications/             # Certificates and resume assets
├── read_pdf.py                        # PDF text extraction helper
├── extracted.txt                      # Extracted text asset
├── extracted_utf8.txt                 # UTF-8 extracted text asset
├── IN226033802 (1).pdf                # PDF asset
└── Krish_Resume1 .pdf                 # Resume/PDF asset
```

## How the Frontend Works

### Navigation

The JavaScript controls the mobile navigation menu, closes the menu after a section is selected, and updates the active navigation link based on the current scroll position.

### Theme Switching

The interface supports dark and light themes. The selected theme and corresponding icon state are stored in `localStorage`, allowing the preference to persist across browser sessions.

### Scroll Reveal

Elements marked with reveal classes are activated when they enter the viewport, creating lightweight entrance animations without a frontend framework.

### Interactive Particle Background

A `<canvas>` particle system creates the animated background. Particle density is reduced on smaller screens, particles react subtly to the mouse cursor, and nearby particles can be connected with lines. Particle styling changes with the active theme.

### Responsive Design

The CSS provides responsive layouts and adjusts navigation, content grids, typography, and visual density for smaller screens.

## Running Locally

Because the portfolio is a static website, no package installation or build process is required for the main site.

### Clone the repository

```bash
git clone https://github.com/HEMANTHBINNALA/My-Portfolio.git
cd My-Portfolio
```

### Open directly

Open `index.html` in a modern web browser.

### Or use a local HTTP server

Using Python:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Using a local server is preferable when testing relative asset paths and browser behavior.

## PDF Utility

The repository also contains `read_pdf.py`, a small Python utility using **PyPDF2**. It reads text from the PDF files referenced in the script and prints the extracted content to the terminal.

```bash
python read_pdf.py
```

This helper is separate from the browser-based portfolio frontend.

## Customization Guide

To update the portfolio:

1. Edit profile text, sections, project descriptions, and links in `index.html`.
2. Update skills in the Skills section.
3. Replace profile images while preserving or updating their paths.
4. Modify colors, layouts, typography, themes, and animations in `assets/css/style.css`.
5. Modify navigation, theme persistence, scroll reveal, and particle behavior in `assets/js/script.js`.
6. Update resume and certification files and keep their links synchronized with `index.html`.

## Deployment

The project is compatible with static hosting because the portfolio frontend does not require a backend server.

Suitable platforms include:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any standard static web server

For GitHub Pages, publish the repository's `main` branch or a dedicated deployment branch and ensure `index.html` is present at the published root.

## Development Notes

- The main page is framework-free and uses vanilla JavaScript for client-side interactions.
- External resources currently include Google Fonts and Phosphor Icons.
- The particle animation reduces particle count on mobile screens.
- Theme selection is persisted using browser `localStorage`.
- Featured project cards link directly to their corresponding GitHub repositories.

## Current Technical Focus

My current focus is on building practical software at the intersection of **software engineering, data science, and AI**, with particular interest in:

- Retrieval-Augmented Generation (RAG)
- Agentic AI workflows
- Full-stack application development
- Data analysis and intelligent information retrieval
- API and backend development
- Cloud technologies

## Connect

- **GitHub:** https://github.com/HEMANTHBINNALA
- **Portfolio:** https://github.com/HEMANTHBINNALA/My-Portfolio
- **RAG Customer Support:** https://github.com/HEMANTHBINNALA/Rag-Customer-Support
- **AssignFlow:** https://github.com/HEMANTHBINNALA/ASSIGNFLOW

## Contributing

This is a personal portfolio project, but suggestions and improvements are welcome. For substantial changes, open an issue first to discuss the proposed update.

## License

No explicit open-source license is currently declared in this repository. Unless a license is added, repository contents should be treated as **all rights reserved** by the author.

---

### Built with curiosity, continuous learning, and a focus on practical software development.
